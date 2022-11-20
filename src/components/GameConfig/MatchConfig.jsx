import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import {getRobotsNames} from "../../services";
import {useNavigate} from "react-router-dom";

import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
  Div,
} from "./MatchConfig.styled.js";

const MatchConfig = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false); //Form subido con exito
  const [failure_data, setFailure_data] = useState(""); //Detalle del servidor
  const [robotsNames, setRobotsNames] = useState([]);

  const callGetRobotsNames = async () => {
    try {
      const response = await getRobotsNames(localStorage.getItem(`user`));
      setRobotsNames(response.data);
    } catch (error) {
      setFailure_data(error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    callGetRobotsNames();
  }, []);

  const onSubmit = async (data) => {
    setFailure_data("");
    const token = await localStorage.getItem("user");
    await fetch(`${process.env.REACT_APP_API_KEY}matches/new-match`, {
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
          navigate("/listgames");
        } else {
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
        <h2>Create match</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputName'>
              Name:
            </label>
            <StyledInput
              autoComplete='off'
              type='text'
              id='inputName'
              data-testid='name'
              {...register("name", {
                required: true,
                maxLength: 16,
                minLength: 3,
              })}
            />
            {errors.name?.type === "required" && (
              <StyledError role='alertError'>Name is required.</StyledError>
            )}
            {errors.name?.type === "maxLength" && (
              <StyledError role='alertError'>
                The name must have at most 16 characters.
              </StyledError>
            )}
            {errors.name?.type === "minLength" && (
              <StyledError role='alertError'>
                The name must have at least 3 characters.
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputPassword'>
              Password (optional):
            </label>
            <StyledInput
              autoComplete='off'
              type='password'
              id='inputPassword'
              data-testid='password'
              {...register("password", {
                maxLength: 16,
              })}
            />
            {errors.password?.type === "maxLength" && (
              <StyledError role='alertError'>
                The password must have at most 16 characters.
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label>Min players:</label>
            <select
              data-testid='minPlayers'
              {...register("min_players", {required: true})}>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </StyledInputGroup>
          <StyledInputGroup>
            <label>Max players:</label>
            <select
              data-testid='maxPlayers'
              {...register("max_players", {
                required: true,
                validate: (val) => {
                  return val >= watch("min_players");
                },
              })}>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
            {errors.max_players?.type === "validate" && (
              <StyledError role='alertError'>
                The maximum number of players must be greater than or equal to
                the minimum established.
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputnum_games'>
              Number of games:
            </label>
            <StyledInput
              autoComplete='off'
              type='text'
              id='inputnum_games'
              data-testid='nGames'
              {...register("num_games", {
                required: true,
                validate: (val) => {
                  return 1 <= val && val <= 200;
                },
              })}
            />
            {errors.num_games?.type === "required" && (
              <StyledError role='alertError'>
                Number of games is required.
              </StyledError>
            )}
            {errors.num_games?.type === "validate" && (
              <StyledError role='alertError'>
                Enter an integer between 1 and 200.
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputnum_rounds'>
              Number of rounds:
            </label>
            <StyledInput
              autoComplete='off'
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
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputRobot'>
              Robot:
            </label>
            <select
              id='inputRobot'
              data-testid='nameRobot'
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
          <StyledButton type='submit' data-testid='submit'>
            Create
          </StyledButton>
        </form>
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

export default MatchConfig;
