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

  function getBase64(file, cb) {
    if (file.length !== 0) {
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = function () {
        cb(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    }
  }

  const submitForm = async (data) => {
    const JSONdata = {};
    JSONdata.name = data.name;

    getBase64(data.codigo, (res) => {
      JSONdata.code = res;
    });
    getBase64(data.avatar, (res) => {
      JSONdata.avatar = res;
    });
    await console.log(data);
    const token = localStorage.getItem("token");
    await fetch(`${process.env.REACT_APP_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        Authorization: `${token}`,
      },
      body: JSON.stringify(JSONdata),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        if (response.status === 200) {
          //console.log("Status 200 !");
          // No hubo errores :D
          // guardo el token que recibí en LocalStorage
          //console.log(data);
          if (data.Authorization) {
            // console.log("ESTOY POR GUARDAR EL TOKEN");
            localStorage.setItem("user", data.Authorization);
            // console.log(localStorage.getItem("user"));
          }
          setSuccess(true);
        } else {
          // console.log();
          alert(response);
          setSuccess(false);
        }
      })
      .catch((err) => alert(err));
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
            {errors.name?.type === "required" ? (
              <StyledError role='invalid_name'>Ingresar nombre</StyledError>
            ) : null}
            {errors.name?.type === "pattern" ? (
              <StyledError>No se permiten caracteres especiales</StyledError>
            ) : null}
          </StyledInputGroup>

          <StyledInputGroup>
            <label className='form-content' htmlFor='codigo'>
              codigo:
            </label>
            <StyledInput
              id='codigo'
              type='file'
              accept='.py'
              {...register("codigo", {
                validate: (e) => {
                  return e.length !== 0 && e[0].type === "text/x-python";
                },
              })}
            />
            {/* {errors.codigo?.type === "required" && (
              <StyledError>Ingresar codigo</StyledError>
            )} */}
            {errors.codigo?.type === "validate" ? (
              <StyledError role='invalid_codigo'>
                Ingrese un archivo con extensión .py
              </StyledError>
            ) : null}
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
                  return e.length === 0 || e[0].type === "image/png";
                },
              })}
            />
            {errors.avatar?.type === "validate" ? (
              <StyledError role='invalid_avatar'>
                Se necesita un archivo con extensión .png
              </StyledError>
            ) : null}
          </StyledInputGroup>

          <StyledButton type='submit'>Subir</StyledButton>
        </form>
        {success ? <div role='alert'>Subido exitosamente</div> : null}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Botsubmit;
