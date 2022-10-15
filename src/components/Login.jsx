import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {BrowserRouter as Router, Link} from "react-router-dom";
//import {useHistory} from "react-router-dom";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./Login.style";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    // data.preventDefault();
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
        // console.log(data.accessToken);
        //const responseData = await response.json();
        if (response.status === 401) {
          // console.log(data.detail);
          alert(data.detail);
          setSuccess(false);
        } else if (response.status === 200) {
          //console.log("Status 200 !");
          // No hubo errores :D
          // guardo el token que recibí en LocalStorage
          //console.log(data);
          if (data.Authorization) {
            // console.log("ESTOY POR GUARDAR EL TOKEN");
            localStorage.setItem("user", data.Authorization);
            // console.log(localStorage.getItem("user"));
            setSuccess(true);
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
          <StyledInputGroup data-testid='emailGroup'>
            <label htmlFor='inputEmail' data-testid='titleEmail'>
              Email
            </label>
            <StyledInput
              id='inputEmail'
              data-testid='inputEmail'
              type='text'
              placeholder='example@example.com'
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <StyledError data-testid='errorEmailNotValid'>
                Ingrese un email válido
              </StyledError>
            )}
            {errors.email?.type === "required" && (
              <StyledError data-testid='errorEmailEmpty'>
                Ingrese un email
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
            {/*Acá redirigir a perfil de usuario?*/}
          </div>
        )}
        <span>
          <p data-testid='notAMemb'>Not a member?</p>
          <Link to='/register' data-testid='linkToReg'>
            Register
          </Link>
        </span>
        {/* Redirigir a registrar! 
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Join us!</a>
          */}
        {/*        
        <Router>
          <div>
            <Link to='/about'>
              <button>Click</button>
            </Link>
          </div>
        </Router>
        */}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Login;
