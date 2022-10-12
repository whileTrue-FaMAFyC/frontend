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
    <StyledEntryCard>
      <EntryPage className='registro'>
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
              <StyledError>Ingrese un usuario</StyledError>
            )}
            {errors.username?.type === "maxLength" && (
              <StyledError>
                El campo username puede tener a lo sumo 16 caracteres
              </StyledError>
            )}
            {errors.username?.type === "minLength" && (
              <StyledError>
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
              <StyledError>El formato del email es incorrecto</StyledError>
            )}
            {errors.email?.type === "required" && (
              <StyledError>Ingrese un email</StyledError>
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
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})$/,
              })}
            />
            {errors.password?.type === "pattern" && (
              <StyledError>
                La contraseña debe contener al menos una mayuscula, minuscula y
                numero
              </StyledError>
            )}
            {errors.password?.type === "required" && (
              <StyledError>Ingrese una contraseña</StyledError>
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
                  if (watch("password") !== val) {
                    return false;
                  }
                },
              })}
            />
            {errors.confirmPassword?.type === "validate" && (
              <StyledError>Las contraseñas no coinciden</StyledError>
            )}
            {errors.email?.type === "required" && (
              <StyledError>Ingrese nuevamente su contraseña</StyledError>
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
              <StyledError>
                La extension del archivo es incorrecta, el archivo debe ser .png
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledButton type='submit'>Enviar</StyledButton>
        </form>
        {success && (
          <StyledInputGroup className='alert alert-success mt-4' role='alert'>
            Se mandó la solicitud de registro
          </StyledInputGroup>
        )}
      </EntryPage>
    </StyledEntryCard>
  );
};

export default Formulario;
