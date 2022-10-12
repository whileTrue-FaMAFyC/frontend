import {useForm} from "react-hook-form";
import {useState} from "react";
import "./reg.css";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    fetch(`${process.env.REACT_APP_REG_KEY}register`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => setSuccess(true))
      .catch((error) => console.log(error));
  };

  return (
    <div className='registro'>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className='form-label' htmlFor='inputUsername'>
            Username
          </label>
          <input
            type='text'
            id='inputUsername'
            {...register("username", {
              required: true,
              maxLength: 16,
              minLength: 3,
            })}
          />
          {errors.username?.type === "required" && (
            <p class='error'>Ingrese un usuario</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p class='error'>
              El campo username puede tener a lo sumo 16 caracteres
            </p>
          )}
          {errors.username?.type === "minLength" && (
            <p class='error'>
              El campo username debe tener al menos 3 caracteres
            </p>
          )}
        </div>
        <div>
          <label className='form-label' htmlFor='inputEmail'>
            Email
          </label>
          <input
            type='text'
            id='inputEmail'
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p class='error'>El formato del email es incorrecto</p>
          )}
          {errors.email?.type === "required" && (
            <p class='error'>Ingrese un email</p>
          )}
        </div>
        <div>
          <label className='form-label' htmlFor='inputPassword'>
            Password
          </label>
          <input
            type='password'
            id='inputPassword'
            {...register("password", {
              required: true,
              pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})$/,
            })}
          />
          {errors.password?.type === "pattern" && (
            <p class='error'>
              La contraseña debe contener al menos una mayuscula, minuscula y
              numero
            </p>
          )}
          {errors.password?.type === "required" && (
            <p class='error'>Ingrese una contraseña</p>
          )}
        </div>
        <div>
          <label className='form-label' htmlFor='inputConfirmPassword'>
            Confirm password
          </label>
          <input
            type='password'
            id='inputConfirmPassword'
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val) {
                  return false;
                }
              },
            })}
          />
          {errors.confirmPassword?.type === "validate" && (
            <p class='error'>Las contraseñas no coinciden</p>
          )}
          {errors.email?.type === "required" && (
            <p class='error'>Ingrese nuevamente su contraseña</p>
          )}
        </div>
        <div>
          <label className='form-label' htmlFor='inputAvatar'>
            Avatar
          </label>
          <input
            type='file'
            id='inputAvatar'
            accept='.png'
            {...register("avatar", {
              validate: (val) => {
                return val.length === 0 || val[0].type === "image/png";
              },
            })}
          />
          {errors.avatar?.type === "validate" && (
            <p class='error'>
              La extension del archivo es incorrecta, el archivo debe ser .png
            </p>
          )}
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

export default Formulario;
