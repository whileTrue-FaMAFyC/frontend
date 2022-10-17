import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./Login.styled";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 401) {
          alert(data.detail);
          setSuccess(false);
        } else if (response.status === 200) {
          if (data.Authorization) {
            localStorage.setItem("user", data.Authorization);
            setSuccess(true);
          } else {
            setSuccess(false);
          }
        } else {
          alert("Unknown error");
          setSuccess(false);
        }
      })
      .catch((error) => {
        alert("Error!");
        setSuccess(false);
      });
  };

  return (
    <EntryPage>
      <StyledEntryCard>
        <h2 data-testid='Title'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} id='form' data-testid='form'>
          <StyledInputGroup data-testid='usernameOrEmailGroup'>
            <label
              htmlFor='inputUsernameOrEmail'
              data-testid='titleUsrenameOrEmail'>
              Username or Email
            </label>
            <StyledInput
              id='inputUsernameOrEmail'
              data-testid='inputUsernameOrEmail'
              type='text'
              placeholder='your username or email'
              {...register("username_or_email", {
                required: true,
              })}
            />
            {errors.username_or_email?.type === "required" && (
              <StyledError data-testid='errorUsernameOrEmailEmpty'>
                Ingrese su username o email
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup data-testid='passwordGroup'>
            <label htmlFor='inputPassword' data-testid='titlePassword'>
              Password
            </label>
            <StyledInput
              type='password'
              id='inputPassword'
              data-testid='inputPassword'
              placeholder='password'
              {...register("password", {
                required: true,
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})$/,
              })}
            />
            {errors.password?.type === "pattern" && (
              <StyledError data-testid='errorPasswordNotValid'>
                La contraseña debe contener al menos una mayuscula, minuscula y
                numero
              </StyledError>
            )}
            {errors.password?.type === "required" && (
              <StyledError data-testid='errorPasswordEmpty'>
                Ingrese una contraseña
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledButton type='login' role='button' data-testid='loginButton'>
            Login
          </StyledButton>
        </form>
        {success && (
          <div role='alert' data-testid='loginExitoso'>
            Login exitoso!
          </div>
        )}
        <span>
          <p data-testid='notAMemb'>Not a member?</p>
          <Link to='/register' data-testid='linkToReg'>
            Register
          </Link>
        </span>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Login;
