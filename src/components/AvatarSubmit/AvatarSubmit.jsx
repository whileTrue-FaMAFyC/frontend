import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
} from "./AvatarSubmit.style";

const AvatarSubmit = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [success, setSuccess] = useState(false); //Form subido con exito
  const [failure_data, setFailure_data] = useState(""); //Detalle del servidor
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const navigate = useNavigate();
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

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

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    data.avatar =
      file == null
        ? "data:image/png;base64,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"
        : file;
    data.avatarFilename =
      file == null ? "avatarPredeterminado.png" : fileName.name;
    const token = localStorage.getItem("user");
    await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        Authorization: `${token}`,
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201) {
          setSuccess(true);
          navigate(`/`);
        } else {
          setSuccess(false);

          setFailure_data(data.detail);
        }
      })
      .catch((error) => {
        alert(error);
        setSuccess(false);
      });
  };

  return (
    <EntryPage>
      <StyledEntryCard>
        <h1>Subir avatar</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='form-label' htmlFor='inputAvatar'>
            Avatar
          </label>
          <Avatar
            style={{
              height: 100,
              width: 100,
              verticalAlign: "middle",
              position: "relative",
              left: "124px",
              justifyContent: "center",
              top: "2px",
            }}
            spacing={2}
            src={imgData}
          />
          <StyledInput
            type='file'
            id='inputAvatar'
            accept='image/*'
            data-testid='Avatar'
            {...register("avatar", {
              onChange: (avatar) => {
                onChangePicture(avatar);
                onUploadFileChange(avatar);
              },
              validate: (e) => {
                return (
                  e.length === 0 ||
                  (new RegExp("image/*").test(e[0].type) && e[0].size < 40000)
                );
              },
            })}
          />
          {errors.avatar?.type === "validate" && (
            <StyledError role='alertError'>
              El archivo debe ser una imágen
            </StyledError>
          )}
          <StyledButton type='submit'>Enviar</StyledButton>
        </form>
        {success && (
          <div className='alert alert-success mt-4' role='alertSuccess'>
            Se mandó la solicitud de registro
          </div>
        )}
        {failure_data !== "" ? (
          <div role='alertServer'>{failure_data}</div>
        ) : null}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default AvatarSubmit;
