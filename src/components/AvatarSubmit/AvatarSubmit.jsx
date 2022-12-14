import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  EntryPage,
  StyledError,
} from "./AvatarSubmit.style";

const AvatarSubmit = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [success, setSuccess] = useState(false);
  const [failure_data, setFailure_data] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
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
    if (target !== null) {
      if (target.files < 1 || !target.validity.valid) {
        return;
      }
      if (target.files[0] !== undefined) {
        fileToBase64(target.files[0], (err, result) => {
          if (result) {
            setFile(result);
          }
        });
      } else {
        setFile("");
      }
    }
  };

  const onChangePicture = (e) => {
    if (e?.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit = async (data) => {
    setFailure_data("");
    data.avatar = file == null ? "" : file;
    const username = localStorage.getItem("username");
    await fetch(`${process.env.REACT_APP_API_KEY}load-avatar/${username}`, {
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
          navigate(`/login`);
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
            autoComplete='off'
            type='file'
            id='inputAvatar'
            accept='image/*'
            data-testid='Avatar'
            {...register("avatar", {
              onChange: (file) => {
                onUploadFileChange(file);
                if (
                  file?.target.files[0] !== undefined &&
                  file?.target.files[0] !== null
                ) {
                  onChangePicture(file);
                } else {
                  setImgData(null);
                }
              },
              validate: (file) => {
                return (
                  file.length === 0 ||
                  (new RegExp(".*.(jpe?g|png)$").test(file[0].name) &&
                    file[0].size < 40000)
                );
              },
            })}
          />
          {errors.avatar?.type === "validate" && (
            <StyledError data-testid='alertError'>
              The file must be an image of extension .png, .jpg or .jpeg from at
              most 40KB.
            </StyledError>
          )}
          <StyledButton type='submit' data-testid='button'>
            Submit
          </StyledButton>
        </form>
        {success && (
          <div className='alert alert-success mt-4' data-testid='alertSuccess'>
            Successfully added
          </div>
        )}
        {failure_data !== "" ? (
          <div data-testid='alertServer'>{failure_data}</div>
        ) : null}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default AvatarSubmit;
