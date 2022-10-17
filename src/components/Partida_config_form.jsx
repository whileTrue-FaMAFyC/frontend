import {useForm} from "react-hook-form";
import {useState} from "react";

import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./Partida_config_form.style.js";

const FormPartidaConfig = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    const token = await localStorage.getItem("user");
    const JSONdata = {};
    JSONdata.name = data.name;
    JSONdata.password = data.password;
    JSONdata.min_players = data.minPlayers;
    JSONdata.max_players = data.maxPlayers;
    JSONdata.num_games = data.numberGames;
    JSONdata.num_rounds = data.numberRounds;
    JSONdata.creator_robot = data.nameRobot;
    console.log(JSON.stringify(JSONdata));
    await fetch("https://634303a43f83935a784e2a0c.mockapi.io/partida", {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(JSONdata),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201) {
          setSuccess(true);
        } else if (response.status === 400 || response.status === 401) {
          alert(data.detail);
          setSuccess(false);
        } else {
          alert(data.detail);
          setSuccess(false);
        }
      })
      .catch((error) => {
        alert(error);
        setSuccess(false);
      });
  };

  return (
    <EntryPage>
      <StyledEntryCard className='form_crear_partida'>
        <h1>Crear Partida</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputName'>
              Nombre de la partida
            </label>
            <StyledInput
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
              <StyledError role='alertError'>
                Ingrese un nombre para la partida
              </StyledError>
            )}
            {errors.name?.type === "maxLength" && (
              <StyledError role='alertError'>
                El nombre debe tener a lo sumo 16 caracteres
              </StyledError>
            )}
            {errors.name?.type === "minLength" && (
              <StyledError role='alertError'>
                El nombre debe tener al menos 3 caracteres
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputPassword'>
              Contraseña (opcional)
            </label>
            <StyledInput
              type='password'
              id='inputPassword'
              data-testid='password'
              {...register("password", {
                maxLength: 16,
              })}
            />
            {errors.password?.type === "maxLength" && (
              <StyledError role='alertError'>
                La contraseña debe tener a lo sumo 16 caracteres
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label>Mínimo de jugadores</label>
            <select
              data-testid='minPlayers'
              {...register("minPlayers", {required: true})}>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </StyledInputGroup>
          <StyledInputGroup>
            <label>Máximo de jugadores</label>
            <select
              data-testid='maxPlayers'
              {...register("maxPlayers", {
                required: true,
                validate: (val) => {
                  return val >= watch("minPlayers");
                },
              })}>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
            {errors.maxPlayers?.type === "validate" && (
              <StyledError role='alertError'>
                El máximo de jugadores debe ser mayor o igual al mínimo
                establecido
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputNumberGames'>
              Numero de juegos
            </label>
            <StyledInput
              type='text'
              id='inputNumberGames'
              data-testid='nGames'
              {...register("numberGames", {
                required: true,
                validate: (val) => {
                  return 1 <= val && val <= 200;
                },
              })}
            />
            {errors.numberGames?.type === "required" && (
              <StyledError role='alertError'>
                Ingrese el numero de juegos
              </StyledError>
            )}
            {errors.numberGames?.type === "validate" && (
              <StyledError role='alertError'>
                Ingrese un número entero entre 1 y 200
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputNumberRounds'>
              Numero de rondas
            </label>
            <StyledInput
              type='text'
              id='inputNumberRounds'
              data-testid='nRounds'
              {...register("numberRounds", {
                required: true,
                validate: (val) => {
                  return 1 <= val && val <= 10000;
                },
              })}
            />
            {errors.numberRounds?.type === "required" && (
              <StyledError role='alertError'>
                Ingrese el numero de rondas
              </StyledError>
            )}
            {errors.numberRounds?.type === "validate" && (
              <StyledError role='alertError'>
                Ingrese un número entero entre 1 y 10000
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputRobot'>
              Elegir robot
            </label>
            <StyledInput
              type='text'
              id='nameRobot'
              data-testid='nameRobot'
              {...register("nameRobot", {
                required: true,
              })}
            />{" "}
            {errors.nameRobot?.type === "required" && (
              <StyledError role='alertError'>Ingrese un robot</StyledError>
            )}
          </StyledInputGroup>
          <StyledButton type='submit'>Crear</StyledButton>
        </form>
        {success && (
          <div className='alert alert-success mt-4' role='alertSuccess'>
            La partida se creo exitosamente
          </div>
        )}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default FormPartidaConfig;
