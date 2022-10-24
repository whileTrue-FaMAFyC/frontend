import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
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

  const [success, setSuccess] = useState(false);
  const [failure_data, setFailure_data] = useState("");
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
    setFailure_data("");
    data.avatar = file == null ? "" : file;
    const username = localStorage.getItem("username");
    await fetch(`http://localhost:8000/load-avatar/${username}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        Authorization: `${username}`,
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 200) {
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
        <h1>Avatar submit</h1>
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
              validate: (file) => {
                return (
                  file.length === 0 ||
                  (new RegExp("image/*").test(file[0].type) &&
                    file[0].size < 40000)
                );
              },
            })}
          />
          {errors.avatar?.type === "validate" && (
            <StyledError role='alertError'>
              The file must be an image of at most 40KB
            </StyledError>
          )}
          <StyledButton type='submit'>Submit</StyledButton>
        </form>
        {success && (
          <div className='alert alert-success mt-4' role='alertSuccess'>
            Successfully added
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
