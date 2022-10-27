import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import {getRobotsNames} from "../../services";
import {MultiSelect} from "react-multi-select-component";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./SimCreate.styled.js";

const SimCreate = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [success, setSuccess] = useState(false); //Form subido con exito
  const [failure_data, setFailure_data] = useState(""); //Detalle del servidor
  const [robotsNames, setRobotsNames] = useState([]);
  const [selected, setSelected] = useState([]);

  const [robots, setRobots] = useState([]);

  const callGetRobotsNames = async () => {
    try {
      const response = await getRobotsNames(localStorage.getItem(`user`));
      setRobots(
        response.data.map((a) => {
          return {label: `${a.name}`, value: `${a.name}`};
        })
      );
      console.log("Executed");
    } catch (error) {
      console.log("An error occurred!");
    }
  };

  useEffect(() => {
    callGetRobotsNames();
  }, []);

  const onSubmit = async (data) => {
    setFailure_data("");
    const token = localStorage.getItem("user");
    await fetch("https://63446b7ddcae733e8fdef696.mockapi.io/:simCreate", {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201 || response.status === 200) {
          setSuccess(true);
          setFailure_data("");
        } else {
          alert(data.detail);
          setSuccess(false);
          setFailure_data(data.detail);
        }
      })
      .catch((error) => {
        alert(error);
        setSuccess(false);
        setFailure_data(data.detail);
      });
  };

  return (
    <EntryPage>
      <StyledEntryCard className='form_crear_partida'>
        <h2>Create simulation</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputGroup>
            <label>Robots:</label>
            <MultiSelect
              options={robots}
              value={selected}
              onChange={setSelected}
              // {...register("robots", {
              //   required: true,
              //   onChange: (bots) => {
              //     console.log(bots);
              //   },
              // })}
              labelledBy='Select robots'
            />
            {errors.robots?.type === "required" && (
              <StyledError role='alertError'>Robots are required.</StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputnum_rounds'>
              Number of rounds:
            </label>
            <StyledInput
              type='text'
              id='inputnum_rounds'
              data-testid='nRounds'
              {...register("num_rounds", {
                required: true,
                validate: (val) => {
                  return 1 <= val && val <= 10000;
                },
              })}
            />
            {errors.num_rounds?.type === "required" && (
              <StyledError role='alertError'>
                Number of rounds is required.
              </StyledError>
            )}
            {errors.num_rounds?.type === "validate" && (
              <StyledError role='alertError'>
                Enter an integer between 1 and 10000.
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledButton type='submit'>Create</StyledButton>
        </form>

        {selected && (
          <div style={{marginTop: 20, lineHeight: "25px"}}>
            <div>
              <b>Robots selected</b>
              {selected.map((x) => (
                <li key={x.label}>{x.value}</li>
              ))}
            </div>
          </div>
        )}

        {success && (
          <div
            className='alert alert-success mt-4'
            role='alertSuccess'
            data-testid='exito'>
            The match was created successfully.
          </div>
        )}
        {failure_data !== "" ? (
          <div role='alertServer'>{failure_data}</div>
        ) : null}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default SimCreate;
