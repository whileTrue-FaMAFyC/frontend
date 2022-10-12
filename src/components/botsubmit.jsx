import React, {useState} from "react";
import {useForm} from "react-hook-form";

const Botsubmit = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [success, setSuccess] = useState(false);

  const submitForm = (data) => {
    fetch("https://63446b7ddcae733e8fdef696.mockapi.io/botsubmit", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => alert("An error occurred"));
  };

  return (
    <div className='form-content'>
      <h3 className='form-title'>SUBIR BOT</h3>
      <form onSubmit={handleSubmit(submitForm)} className='requires-validation'>
        <div className='form-content'>
          <label className='form-content' htmlFor='name'>
            nombre:
          </label>
          <input
            className='form-content'
            id='name'
            type='text'
            {...register("name", {
              required: true,
              pattern: /^[A-Za-z0-9 ]+$/i,
            })}
            placeholder='Nombre del bot'
          />
          {errors.name?.type === "required" && (
            <p className='error'>Ingresar nombre</p>
          )}
          {errors.name?.type === "pattern" && (
            <p className='error'>No se permiten caracteres especiales</p>
          )}
        </div>

        <div className='form-content'>
          <label className='form-content' htmlFor='codigo'>
            código:
          </label>
          <input
            className='form-button'
            id='codigo'
            type='file'
            accept='.py'
            {...register("codigo", {
              required: true,
              validate: (e) => {
                return e[0].type === "text/x-python";
              },
            })}
          />
          {errors.codigo?.type === "required" && (
            <p className='error'>Ingresar codigo</p>
          )}
          {errors.codigo?.type === "validate" && (
            <p className='error'>Se necesita un archivo con extensión .py</p>
          )}
        </div>

        <div className='form-content'>
          <label className='form-content' htmlFor='avatar'>
            avatar:
          </label>
          <input
            className='form-button'
            id='avatar'
            type='file'
            accept='.png'
            {...register("avatar", {
              validate: (e) => {
                return e[0] === undefined || e[0].type === "image/png";
              },
            })}
          />
          {errors.avatar?.type === "validate" && (
            <p className='error'>Se necesita un archivo con extensión .png</p>
          )}
        </div>

        <input className='form-button' type='submit' value='Submit' />
      </form>
      {success && <div role='alert'>Subido exitosamente</div>}
    </div>
  );
};

export default Botsubmit;
