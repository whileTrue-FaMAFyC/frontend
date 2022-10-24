import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./Register.style";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false); //Form subido con exito
  const [failure_data, setFailure_data] = useState(""); //Detalle del servidor

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const username = data.username;
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
        if (response.status === 201) {
          setSuccess(true);
          localStorage.setItem("username", username);
          navigate(`/verify`);
        } else {
          setSuccess(false);
          setFailure_data(data.detail);
        }
      })
      .catch((error) => {
        alert(error);
        setSuccess(false);
      });
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
              data-testid='Username'
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
              data-testid='Email'
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
              data-testid='Password'
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
              data-testid='Confirm password'
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
          <StyledButton type='submit'>Enviar</StyledButton>
        </form>
        {success && (
          <div className='alert alert-success mt-4' role='alertSuccess'>
            Se mandó la solicitud de registro
          </div>
        )}
        {failure_data !== "" ? (
          <div role='alertServer'>{failure_data}</div>
        ) : null}
        <span>
          <p data-testid='notAMemb'>¿Ya tenes cuenta?</p>
          <Link to='/login' data-testid='linkToReg'>
            Logueate
          </Link>
        </span>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Formulario;
