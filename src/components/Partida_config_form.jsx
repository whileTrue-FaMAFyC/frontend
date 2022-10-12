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

  const onSubmit = (data) => {
    fetch(`${process.env.REACT_APP_REG_KEY}partida`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => setSuccess(true))
      .catch((error) => console.log(error));
  };

  return (
    <StyledEntryCard>
      <EntryPage className='form_crear_partida'>
        <h1>Crear Partida</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputName'>
              Nombre de la partida
            </label>
            <StyledInput
              type='text'
              id='inputName'
              {...register("name", {
                required: true,
                maxLength: 16,
                minLength: 3,
              })}
            />
            {errors.name?.type === "required" && (
              <StyledError>Ingrese un nombre para la partida</StyledError>
            )}
            {errors.name?.type === "maxLength" && (
              <StyledError>
                El nombre debe tener a lo sumo 16 caracteres
              </StyledError>
            )}
            {errors.name?.type === "minLength" && (
              <StyledError>
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
              id='inputName'
              {...register("password", {
                maxLength: 16,
              })}
            />
            {errors.password?.type === "maxLength" && (
              <StyledError>
                El nombre debe tener a lo sumo 16 caracteres
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label>Mínimo de jugadores</label>
            <select {...register("minPlayers", {required: true})}>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </StyledInputGroup>
          <StyledInputGroup>
            <label>Máximo de jugadores</label>
            <select
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
              <StyledError>
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
              type='number'
              id='inputNumberGames'
              {...register("numberGames", {
                required: true,
                min: 1,
                max: 200,
              })}
            />
            {errors.numberGames?.type === "required" && (
              <StyledError>Ingrese el numero de juegos</StyledError>
            )}
            {errors.numberGames?.type === "min" && (
              <StyledError>Se requiere al menos un juego</StyledError>
            )}
            {errors.numberGames?.type === "max" && (
              <StyledError>El máximo de juegos posibles es 200</StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputNumberRounds'>
              Numero de rondas
            </label>
            <StyledInput
              type='number'
              id='inputNumberRounds'
              {...register("numberRounds", {
                required: true,
                min: 1,
                max: 10000,
              })}
            />
            {errors.numberRounds?.type === "required" && (
              <StyledError>Ingrese el numero de rondas</StyledError>
            )}
            {errors.numberRounds?.type === "min" && (
              <StyledError>Se requiere al menos una ronda</StyledError>
            )}
            {errors.numberRounds?.type === "max" && (
              <StyledError>El máximo de rondas posibles es 10000</StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputRobot'>
              Elegir robot
            </label>
            <StyledInput
              type='file'
              id='inputAvatar'
              accept='.py'
              {...register("avatar", {
                required: false,
                validate: (val) => {
                  return val.length === 0 || val[0].type === "image/png";
                },
              })}
            />
          </StyledInputGroup>
          <StyledButton type='submit'>Crear</StyledButton>
        </form>
        {success && (
          <div className='alert alert-success mt-4' role='alert'>
            Se mandó la solicitud de registro
          </div>
        )}
      </EntryPage>
    </StyledEntryCard>
  );
};

export default FormPartidaConfig;
