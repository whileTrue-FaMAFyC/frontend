import {useForm} from "react-hook-form";
import {useState} from "react";

import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./Reg.style";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false);

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

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

  const onUploadFileChange = ({target}) => {
    if (target.files < 1 || !target.validity.valid) {
      return;
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setFile(result);
        setFileName(target.files[0]);
      }
    });
  };

  const onSubmit = async (data) => {
    const JSONdata = {};
    JSONdata.username = data.username;
    JSONdata.email = data.email;
    JSONdata.password = data.password;
    JSONdata.avatar = file == null ? "" : file;
    JSONdata.avatarFilename = file == null ? "" : fileName.name;
    await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(JSONdata),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201) {
          setSuccess(true);
        } else if (response.status === 500) {
          alert(data.detail);
          setSuccess(false);
        } else if (response.status === 400) {
          alert(data.detail);
          setSuccess(false);
        } else {
          alert("Unknown error");
          setSuccess(false);
        }
      })
      .catch((error) => {
        alert(error);
        setSuccess(false);
      });
  };

  return (
    <EntryPage>
      <StyledEntryCard className='registro'>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputUsername'>
              Username
            </label>
            <StyledInput
              type='text'
              id='inputUsername'
              data-testid='Username'
              {...register("username", {
                required: true,
                maxLength: 16,
                minLength: 3,
              })}
            />
            {errors.username?.type === "required" && (
              <StyledError role='alertError'>Ingrese un usuario</StyledError>
            )}
            {errors.username?.type === "maxLength" && (
              <StyledError role='alertError'>
                El campo username puede tener a lo sumo 16 caracteres
              </StyledError>
            )}
            {errors.username?.type === "minLength" && (
              <StyledError role='alertError'>
                El campo username debe tener al menos 3 caracteres
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputEmail'>
              Email
            </label>
            <StyledInput
              type='text'
              id='inputEmail'
              data-testid='Email'
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <StyledError role='alertError'>
                El formato del email es incorrecto
              </StyledError>
            )}
            {errors.email?.type === "required" && (
              <StyledError role='alertError'>Ingrese un email</StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputPassword'>
              Password
            </label>
            <StyledInput
              type='password'
              id='inputPassword'
              data-testid='Password'
              {...register("password", {
                required: true,
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
              })}
            />
            {errors.password?.type === "pattern" && (
              <StyledError role='alertError'>
                La contraseña debe contener al menos 8 caracteres, una
                mayúscula, minúscula y número
              </StyledError>
            )}
            {errors.password?.type === "minLength" && (
              <StyledError role='alertError'>
                La contraseña debe tener al menos 8 caracteres
              </StyledError>
            )}
            {errors.password?.type === "required" && (
              <StyledError role='alertError'>
                Ingrese una contraseña
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputConfirmPassword'>
              Confirm password
            </label>
            <StyledInput
              type='password'
              id='inputConfirmPassword'
              data-testid='Confirm password'
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  return watch("password") === "" || watch("password") === val;
                },
              })}
            />
            {errors.confirmPassword?.type === "validate" && (
              <StyledError role='alertError'>
                Las contraseñas no coinciden
              </StyledError>
            )}
            {errors.confirmPassword?.type === "required" &&
              watch("password") && (
                <StyledError role='alertError'>
                  Reingrese su contraseña
                </StyledError>
              )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label className='form-label' htmlFor='inputAvatar'>
              Avatar
            </label>
            <StyledInput
              type='file'
              id='inputAvatar'
              accept='.png'
              data-testid='Avatar'
              {...register("avatar", {
                onChange: onUploadFileChange,
                validate: (val) => {
                  return val.length === 0 || val[0].type === "image/png";
                },
              })}
            />
            {errors.avatar?.type === "validate" && (
              <StyledError role='alertError'>
                La extension del archivo es incorrecta, el archivo debe ser .png
              </StyledError>
            )}
          </StyledInputGroup>
          <StyledButton type='submit'>Enviar</StyledButton>
        </form>
        {success && (
          <StyledInputGroup
            className='alert alert-success mt-4'
            role='alertSuccess'>
            Se mandó la solicitud de registro
          </StyledInputGroup>
        )}
        {/* PONER LA REDIRECCION AL LOGIN EN CASO DE QUE YA TENGA UNA CUENTA */}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Formulario;
