import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import {getRobotsNames} from "../../services";
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
  const [showRobot3, setShowRobot3] = useState(true);
  const [showRobot4, setShowRobot4] = useState(true);

  const [robots, setRobots] = useState([]);

  const callGetRobotsNames = async () => {
    try {
      const response = await getRobotsNames(localStorage.getItem(`user`));
      setRobotsNames(response.data);
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
            <label className='form-label' htmlFor='inputRobot1'>
              Robot 1:
            </label>
            <select
              id='inputRobot1'
              data-testid='nameRobot1'
              {...register("creator_robot", {required: true})}>
              {robotsNames.map((a) => (
                <option key={a.name} value={a.name}>
                  {a.name}
                </option>
              ))}
              <option key={""} value=''>
                * Choose a robot *
              </option>
            </select>
            {errors.creator_robot?.type === "required" && (
              <StyledError role='alertError'>Robot is required.</StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputRobot2'>
              Robot 2:
            </label>
            <select
              id='inputRobot2'
              data-testid='nameRobot2'
              {...register("creator_robot", {required: true})}>
              {robotsNames.map((a) => (
                <option key={a.name} value={a.name}>
                  {a.name}
                </option>
              ))}
              <option key={""} value=''>
                * Choose a robot *
              </option>
            </select>
            {errors.creator_robot?.type === "required" && (
              <StyledError role='alertError'>Robot is required.</StyledError>
            )}
          </StyledInputGroup>
          {!showRobot3 ? (
            <StyledInputGroup>
              <label className='form-label' htmlFor='inputRobot3'>
                Robot 3:
              </label>
              <select
                hidden={showRobot3}
                id='inputRobot3'
                data-testid='nameRobot3'
                {...register("creator_robot")}>
                {robotsNames.map((a) => (
                  <option key={a.name} value={a.name}>
                    {a.name}
                  </option>
                ))}
                <option key={""} value=''>
                  * Choose a robot *
                </option>
              </select>
            </StyledInputGroup>
          ) : null}

          {!showRobot4 ? (
            <StyledInputGroup>
              <label className='form-label' htmlFor='inputRobot4'>
                Robot 4:
              </label>
              <select
                id='inputRobot4'
                data-testid='nameRobot4'
                {...register("creator_robot")}>
                {robotsNames.map((a) => (
                  <option key={a.name} value={a.name}>
                    {a.name}
                  </option>
                ))}
                <option key={""} value=''>
                  * Choose a robot *
                </option>
              </select>
            </StyledInputGroup>
          ) : null}

          <StyledButton
            type='button'
            onClick={() => {
              !showRobot3 ? setShowRobot4(false) : setShowRobot3(false);
            }}>
            Add bot
          </StyledButton>

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

        {success && (
          <div
            className='alert alert-success mt-4'
            role='alertSuccess'
            data-testid='exito'>
            The simulation is about to start!
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
