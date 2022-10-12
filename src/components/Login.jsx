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
          alert("Invalid credentials");
        } else if (response.status === 200) {
          // console.log("Status 200 !");
          // No hubo errores :D
          // guardo el token que recibí en LocalStorage
          if (data.accessToken) {
            // console.log("ESTOY POR GUARDAR EL TOKEN");
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        } else {
          alert("Unknown error");
        }
        // handlear errores, ver códigos backend
        // 401: credenciales inválidas
      })
      .catch(() => {
        alert("Network Error");
      });
  };

  return (
    <EntryPage>
      <StyledEntryCard>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputGroup>
            <label htmlFor='inputEmail'>Email</label>
            <StyledInput
              type='text'
              placeholder='example@example.com'
              id='inputEmail'
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <StyledError>Ingrese un email válido</StyledError>
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
              placeholder='password'
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
          <StyledButton type='login'>Login</StyledButton>
        </form>
        {success && (
          <div className='alert alert-success mt-4' role='alert'>
            Login exitoso!
            {/*Acá redirigir a perfil de usuario?*/}
          </div>
        )}
        <span>
          <p>Not a member?</p>
          <Link to='/register'>Register</Link>
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
