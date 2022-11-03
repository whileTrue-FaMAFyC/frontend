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
import Simulation from "../Simulation/Simulation";

const SimCreate = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [success, setSuccess] = useState(false); //Form subido con exito
  const [failure_data, setFailure_data] = useState(""); //Detalle del servidor
  const [robotsNames, setRobotsNames] = useState([]);
  const [showRobot3, setShowRobot3] = useState(false);
  const [showRobot4, setShowRobot4] = useState(false);
  const [simulation, setSimulation] = useState({});

  const callGetRobotsNames = async () => {
    try {
      const response = await getRobotsNames(localStorage.getItem(`user`));
      setRobotsNames(response.data);
    } catch (error) {
      setFailure_data(error);
    }
  };

  useEffect(() => {
    callGetRobotsNames();
  }, []);

  const onSubmit = async (data) => {
    setFailure_data("");
    const body = {
      num_rounds: data.num_rounds,
      robots: [data.robot1, data.robot2],
    };
    if (data.robot3 !== undefined && data.robot3 !== "") {
      body.robots = [...body.robots, data.robot3];
    }
    if (data.robot4 !== undefined && data.robot4 !== "") {
      body.robots = [...body.robots, data.robot4];
    }

    const token = localStorage.getItem("user");
    await fetch(`${process.env.REACT_APP_API_KEY}new-simulation`, {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201 || response.status === 200) {
          setSimulation(data);
          setSuccess(true);
          setFailure_data("");
        } else {
          setSuccess(false);
          setFailure_data(data.detail);
        }
      })
      .catch((error) => {
        alert(error);
        setSuccess(false);
        setFailure_data("Network error");
      });
  };

  return (
    <div>
      {!success ? (
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
                  {...register("robot1", {required: true})}>
                  <option key={""} value=''>
                    * Choose a robot *
                  </option>
                  {robotsNames.map((a) => (
                    <option key={a.name} value={a.name}>
                      {a.name}
                    </option>
                  ))}
                </select>
                {errors.robot1?.type === "required" && (
                  <StyledError data-testid='requiredRobot1'>
                    Robot is required.
                  </StyledError>
                )}
              </StyledInputGroup>
              <StyledInputGroup>
                <label className='form-label' htmlFor='inputRobot2'>
                  Robot 2:
                </label>
                <select
                  id='inputRobot2'
                  data-testid='nameRobot2'
                  {...register("robot2", {
                    required: true,
                    onChange: () => setShowRobot3(true),
                  })}>
                  <option key={""} value=''>
                    * Choose a robot *
                  </option>
                  {robotsNames.map((a) => (
                    <option key={a.name} value={a.name}>
                      {a.name}
                    </option>
                  ))}
                </select>
                {errors.robot2?.type === "required" && (
                  <StyledError data-testid='requiredRobot2'>
                    Robot is required.
                  </StyledError>
                )}
              </StyledInputGroup>
              {showRobot3 ? (
                <StyledInputGroup>
                  <label className='form-label' htmlFor='inputRobot3'>
                    Robot 3:
                  </label>
                  <select
                    id='inputRobot3'
                    data-testid='nameRobot3'
                    {...register("robot3", {
                      onChange: () => setShowRobot4(true),
                    })}>
                    <option key={""} value=''>
                      * No robot *
                    </option>
                    {robotsNames.map((a) => (
                      <option key={a.name} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </StyledInputGroup>
              ) : null}

              {showRobot4 ? (
                <StyledInputGroup>
                  <label className='form-label' htmlFor='inputRobot4'>
                    Robot 4:
                  </label>
                  <select
                    id='inputRobot4'
                    data-testid='nameRobot4'
                    {...register("robot4")}>
                    <option key={""} value=''>
                      * No robot *
                    </option>
                    {robotsNames.map((a) => (
                      <option key={a.name} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </StyledInputGroup>
              ) : null}

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
                  <StyledError data-testid='requiredNRounds'>
                    Number of rounds is required.
                  </StyledError>
                )}
                {errors.num_rounds?.type === "validate" && (
                  <StyledError data-testid='valNRounds'>
                    Enter an integer between 1 and 10000.
                  </StyledError>
                )}
              </StyledInputGroup>

              <StyledButton data-testid='button' type='submit'>
                Create
              </StyledButton>
            </form>

            {failure_data !== "" ? (
              <StyledError data-testid='failure'>{failure_data}</StyledError>
            ) : null}
          </StyledEntryCard>
        </EntryPage>
      ) : (
        <div>
          <Simulation props={simulation} />
        </div>
      )}
      ;
    </div>
  );
};

export default SimCreate;
