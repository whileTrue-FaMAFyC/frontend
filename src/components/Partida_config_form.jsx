import {useForm} from "react-hook-form";
import {useState} from "react";
import "./form.css";

const FormPartidaConfig = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => setSuccess(true))
      .catch((error) => console.log(error));
  };

  return (
    <div className='form_crear_partida'>
      <h1>Crear Partida</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className='form-label' htmlFor='inputName'>
            Nombre de la partida
          </label>
          <input
            type='text'
            id='inputName'
            {...register("name", {
              required: true,
              maxLength: 16,
              minLength: 3,
            })}
          />
          {errors.username?.type === "required" && (
            <p class='error'>Ingrese un nombre para la partida</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p class='error'>El nombre debe tener a lo sumo 16 caracteres</p>
          )}
          {errors.username?.type === "minLength" && (
            <p class='error'>El nombre debe tener al menos 3 caracteres</p>
          )}
        </div>
        <div>
          <label>Mínimo de jugadores</label>
          <select {...register("minPlayers")}>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
        <div>
          <label>Máximo de jugadores</label>
          <select {...register("maxPlayers")}>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
        <div>
          <label className='form-label' htmlFor='inputNumberGames'>
            Numero de juegos
          </label>
          <input
            type='number'
            id='inputNumberGames'
            {...register("numberGames", {
              required: true,
              min: 1,
              max: 200,
            })}
          />
          {errors.numberGames?.type === "min" && (
            <p class='error'>Se requiere al menos un juego</p>
          )}
          {errors.numberGames?.type === "max" && (
            <p class='error'>El máximo de juegos posibles es 200</p>
          )}
        </div>
        <div>
          <label className='form-label' htmlFor='inputNumberRounds'>
            Numero de rondas
          </label>
          <input
            type='number'
            id='inputNumberRounds'
            {...register("numberRounds", {
              required: true,
              min: 1,
              max: 10000,
            })}
          />
          {errors.numberRounds?.type === "min" && (
            <p class='error'>Se requiere al menos una ronda</p>
          )}
          {errors.numberRounds?.type === "max" && (
            <p class='error'>El máximo de rondas posibles es 10000</p>
          )}
        </div>
        <div>
          <label className='form-label' htmlFor='inputAvatar'>
            Avatar
          </label>
          <input type='file' id='inputAvatar' {...register("avatar", {})} />
        </div>
        <button type='submit'>Enviar</button>
      </form>
      {success && (
        <div className='alert alert-success mt-4' role='alert'>
          Se mandó la solicitud de registro
        </div>
      )}
    </div>
  );
};

export default FormPartidaConfig;
