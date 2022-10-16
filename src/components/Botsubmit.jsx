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
  // const express = require("express");
  // const bodyParser = require("body-parser");

  // const app = express();
  // // Express 4.0
  // app.use(bodyParser.json({limit: "10mb"}));
  // app.use(bodyParser.urlencoded({extended: true, limit: "10mb"}));

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [success, setSuccess] = useState(false);
  const [file_cod, setFile_cod] = useState(null);
  const [fileName_cod, setFileName_cod] = useState(null);

  const [file_av, setFile_av] = useState(null);
  const [fileName_av, setFileName_av] = useState(null);

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };

  const onUploadFileChange = ({target}, setFile) => {
    if (target.files < 1 || !target.validity.valid) {
      return;
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setFile(result);
      }
    });
  };

  const submitForm = async (data) => {
    data.source_code = file_cod;
    data.avatar = file_av;
    //console.log(data);
    //const token = localStorage.getItem("token");
    await fetch(`${process.env.REACT_APP_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        //Authorization: `${token}`,
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 200 || response.status === 201) {
          //console.log("Status 200 !");
          // No hubo errores :D
          // guardo el token que recibí en LocalStorage
          //console.log(data);
          // if (data.Authorization) {
          //   // console.log("ESTOY POR GUARDAR EL TOKEN");
          //   localStorage.setItem("user", data.Authorization);
          //   // console.log(localStorage.getItem("user"));
          // }
          setSuccess(true);
        } else {
          // console.log();
          alert(data);
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
              <StyledError role='no_name'>Ingresar nombre</StyledError>
            ) : null}
            {errors.name?.type === "pattern" ? (
              <StyledError role='invalid_name'>
                No se permiten caracteres especiales
              </StyledError>
            ) : null}
          </StyledInputGroup>

          <StyledInputGroup>
            <label className='form-content' htmlFor='source_code'>
              codigo:
            </label>
            <StyledInput
              id='source_code'
              type='file'
              accept='.py'
              {...register("source_code", {
                onChange: (t) => {
                  onUploadFileChange(t, setFile_cod);
                },
                validate: (e) => {
                  return e.length !== 0 && e[0].type === "text/x-python";
                },
              })}
            />
            {errors.source_code?.type === "validate" ? (
              <StyledError role='invalid_code'>
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
                onChange: (t) => {
                  onUploadFileChange(t, setFile_av);
                },
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
