import React, {useState} from "react";
import {useForm} from "react-hook-form";
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
    await fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        //const responseData = await response.json();
        if (response.satus === 200) {
          // No hubo errores :D
          // guardo el token que recibí en LocalStorage
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        }
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
          {errors.email?.type === "pattern" && <p>Ingrese un email</p>}
          {errors.email?.type === "required" && <p>Ingrese un email</p>}
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
            <p class='error'>
              La contraseña debe contener al menos una mayuscula, minuscula y
              numero
            </p>
          )}
          {errors.password?.type === "required" && (
            <p class='error'>Ingrese una contraseña</p>
          )}
        </div>
        <button type='login'>Login</button>
      </form>
      {success && (
        <div className='alert alert-success mt-4' role='alert'>
          Se mandó la solicitud de registro
        </div>
      )}
      <div>
        <p>Not a member?</p>
        {/* Redirigir a registrar! */}
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Join us!</a>
      </div>
    </div>
  );
};

export default Login;
