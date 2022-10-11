import React, {useState} from "react";
import {useForm} from "react-hook-form";
//import {BrowserRouter as Router, Link} from "react-router-dom";
//import {useHistory} from "react-router-dom";
import "./Login.css";

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
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        //const responseData = await response.json();
        if (response.status === 401) {
          alert("Invalid credentials");
        } else if (response.status === 200) {
          // No hubo errores :D
          // guardo el token que recibí en LocalStorage
          if (response.data.accessToken) {
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='inputEmail'>Email</label>
          <input
            type='text'
            placeholder='example@example.com'
            id='inputEmail'
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p className='error'>Ingrese un email válido</p>
          )}
          {errors.email?.type === "required" && (
            <p className='error'>Ingrese un email</p>
          )}
        </div>
        <div>
          <label className='form-label' htmlFor='inputPassword'>
            Password
          </label>
          <input
            type='password'
            id='inputPassword'
            placeholder='password'
            {...register("password", {
              required: true,
              pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})$/,
            })}
          />
          {errors.password?.type === "pattern" && (
            <p className='error'>
              La contraseña debe contener al menos una mayuscula, minuscula y
              numero
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className='error'>Ingrese una contraseña</p>
          )}
        </div>
        <button type='login'>Login</button>
      </form>
      {success && (
        <div className='alert alert-success mt-4' role='alert'>
          Login exitoso!
          {/*Acá redirigir a perfil de usuario?*/}
        </div>
      )}
      <div>
        <p>Not a member?</p>
        {/* Redirigir a registrar! */}
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Join us!</a>
        {/*        
        <Router>
          <div>
            <Link to='/about'>
              <button>Click</button>
            </Link>
          </div>
        </Router>
        */}
      </div>
    </div>
  );
};

export default Login;
