import {useForm} from "react-hook-form";
import {useState} from "react";

import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./Reg.style";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 400) {
          alert("Invalid credentials"); // VER CON CONSOLE.LOG COMO IMPRIMIR EL DETALLE DE LO QUE LLEGA EN EL RESPONSE
        } else if (response.status === 500) {
          alert("Error interno"); // VER CON CONSOLE.LOG COMO IMPRIMIR EL DETALLE DE LO QUE LLEGA EN EL RESPONSE
        } else if (response.status === 200) {
          // No se, supongo que nada porque esta todo bien
        } else {
          alert("Unknown error");
        }
      })
      .then((json) => setSuccess(true))
      .catch((error) => console.log(error));
  };

  return (
    <EntryPage>
      <StyledEntryCard className='registro'>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputUsername'>
              Username
            </label>
            <StyledInput
              type='text'
              id='inputUsername'
              {...register("username", {
                required: true,
                maxLength: 16,
                minLength: 3,
              })}
            />
            {errors.username?.type === "required" && (
              <StyledError role='alertError'>Ingrese un usuario</StyledError>
            )}
            {errors.username?.type === "maxLength" && (
              <StyledError role='alertError'>
                El campo username puede tener a lo sumo 16 caracteres
              </StyledError>
            )}
            {errors.username?.type === "minLength" && (
              <StyledError role='alertError'>
                El campo username debe tener al menos 3 caracteres
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputEmail'>
              Email
            </label>
            <StyledInput
              type='text'
              id='inputEmail'
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <StyledError role='alertError'>
                El formato del email es incorrecto
              </StyledError>
            )}
            {errors.email?.type === "required" && (
              <StyledError role='alertError'>Ingrese un email</StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputPassword'>
              Password
            </label>
            <StyledInput
              type='password'
              id='inputPassword'
              {...register("password", {
                required: true,
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
              })}
            />
            {errors.password?.type === "pattern" && (
              <StyledError role='alertError'>
                La contraseña debe contener al menos 8 caracteres, una
                mayúscula, minúscula y número
              </StyledError>
            )}
            {errors.password?.type === "minLength" && (
              <StyledError role='alertError'>
                La contraseña debe tener al menos 8 caracteres
              </StyledError>
            )}
            {errors.password?.type === "required" && (
              <StyledError role='alertError'>
                Ingrese una contraseña
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputConfirmPassword'>
              Confirm password
            </label>
            <StyledInput
              type='password'
              id='inputConfirmPassword'
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  return watch("password") === "" || watch("password") === val;
                },
              })}
            />
            {errors.confirmPassword?.type === "validate" && (
              <StyledError role='alertError'>
                Las contraseñas no coinciden
              </StyledError>
            )}
            {errors.confirmPassword?.type === "required" &&
              watch("password") && (
                <StyledError role='alertError'>
                  Reingrese su contraseña
                </StyledError>
              )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputAvatar'>
              Avatar
            </label>
            <StyledInput
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
              <StyledError role='alertError'>
                La extension del archivo es incorrecta, el archivo debe ser .png
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledButton type='submit'>Enviar</StyledButton>
        </form>
        {success && (
          <StyledInputGroup
            className='alert alert-success mt-4'
            role='alertSuccess'>
            Se mandó la solicitud de registro
          </StyledInputGroup>
        )}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Formulario;
