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
  const [success, setSuccess] = useState(false); //Form subido con exito
  const [failure_data, setFailure_data] = useState(""); //Detalle del servidor

  const [file_cod, setFile_cod] = useState(null); //base64 del codigo
  const [fileName_cod, setFileName_cod] = useState(null); //filename del codigo

  const [file_av, setFile_av] = useState(null); //base64 del avatar

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

  const onUploadFileChange = ({target}, setFile, setFileName) => {
    if (target !== null) {
      if (target.files < 1 || !target.validity.valid) {
        return;
      }
      if (target.files[0] !== undefined) {
        setFileName(target.files[0].name);
        fileToBase64(target.files[0], (err, result) => {
          if (result) {
            setFile(result);
          }
        });
      } else {
        setFileName("");
        setFile("");
      }
    }
  };

  const submitForm = async (data) => {
    data.source_code = file_cod;
    data.avatar = file_av;
    data.bot_filename = fileName_cod;
    const token = localStorage.getItem("user");
    try {
      await fetch(`${process.env.REACT_APP_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
          Authorization: `${token}`,
        },
        body: JSON.stringify(data),
      }).then(async (response) => {
        const data = await response.json();
        if (response.status === 200 || response.status === 201) {
          setSuccess(true);
        } else {
          setSuccess(false);
          setFailure_data(data.detail);
        }
      });
    } catch (err) {
      alert(err);
    }
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
                maxLength: 40,
                pattern: /^[A-Za-z0-9 ]+$/i,
              })}
              placeholder='Nombre del bot'
            />
            {errors.name?.type === "required" ? (
              <StyledError role='no_name'>Ingresar nombre</StyledError>
            ) : null}
            {errors.name?.type === "maxLength" ? (
              <StyledError role='invalid_name_size'>
                El nombre del bot debe tener como máximo 40 caracteres
              </StyledError>
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
                  onUploadFileChange(t, setFile_cod, setFileName_cod);
                },
                validate: (e) => {
                  return (
                    e.length !== 0 &&
                    e[0].type === "text/x-python" &&
                    e[0].size < 40000
                  );
                },
              })}
            />
            {errors.source_code?.type === "validate" ? (
              <StyledError role='invalid_code'>
                Ingrese un archivo con extensión .py de menos de 40 kB
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
              accept='image/*'
              {...register("avatar", {
                onChange: (t) => {
                  onUploadFileChange(t, setFile_av, (e) => {
                    return e;
                  });
                },
                validate: (e) => {
                  return (
                    e.length === 0 ||
                    (new RegExp("image/*").test(e[0].type) && e[0].size < 40000)
                  );
                },
              })}
            />
            {errors.avatar?.type === "validate" ? (
              <StyledError role='invalid_avatar'>
                Se necesita un archivo con extensión .png o .jpg de menos de 40
                kB
              </StyledError>
            ) : null}
          </StyledInputGroup>

          <StyledButton type='submit'>Subir</StyledButton>
        </form>
        {success ? <div role='dialog'>Subido exitosamente</div> : null}
        {failure_data !== "" ? <div role='alert'>{failure_data}</div> : null}
      </StyledEntryCard>
    </EntryPage>
  );
};

// FALTAN TESTS DE INTERACCION CON EL BACK
// * nombre ya existente entre sus robots

export default Botsubmit;
