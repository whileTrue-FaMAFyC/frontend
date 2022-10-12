import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./styles";

const Botsubmit = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [success, setSuccess] = useState(false);

  const submitForm = (data) => {
    fetch(`${process.env.REACT_APP_API_KEY}`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => alert("An error occurred"));
  };

  return (
    <EntryPage>
      <StyledEntryCard>
        <h2>SUBIR BOT</h2>
        <form
          onSubmit={handleSubmit(submitForm)}
          className='requires-validation'>
          <StyledInputGroup>
            <label className='form-content' htmlFor='name'>
              nombre:
            </label>
            <StyledInput
              id='name'
              type='text'
              {...register("name", {
                required: true,
                pattern: /^[A-Za-z0-9 ]+$/i,
              })}
              placeholder='Nombre del bot'
            />
            {errors.name?.type === "required" && (
              <StyledError>Ingresar nombre</StyledError>
            )}
            {errors.name?.type === "pattern" && (
              <StyledError>No se permiten caracteres especiales</StyledError>
            )}
          </StyledInputGroup>

          <StyledInputGroup>
            <label className='form-content' htmlFor='codigo'>
              código:
            </label>
            <StyledInput
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
              <StyledError>Ingresar codigo</StyledError>
            )}
            {errors.codigo?.type === "validate" && (
              <StyledError>
                Se necesita un archivo con extensión .py
              </StyledError>
            )}
          </StyledInputGroup>

          <StyledInputGroup>
            <label className='form-content' htmlFor='avatar'>
              avatar:
            </label>
            <StyledInput
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
              <StyledError>
                Se necesita un archivo con extensión .png
              </StyledError>
            )}
          </StyledInputGroup>

          <StyledButton type='submit' value='Submit'>
            Subir
          </StyledButton>
        </form>
        {success && <div role='alert'>Subido exitosamente</div>}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Botsubmit;
