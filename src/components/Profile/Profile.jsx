import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledError,
  StyledProbando,
} from "./Profile.style";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [changePasswordOn, setChangePasswordOn] = useState(false);
  const [changeAvatarOn, setChangeAvatarOn] = useState(false);
  const [prevAvatar, setPrevAvatar] = useState(localStorage.getItem("avatar"));

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [newAvatar, setNewAvatar] = useState(localStorage.getItem("avatar"));

  const changeAvatar = async (data) => {
    console.log(data);
    const token = localStorage.getItem("user");
    await fetch(
      `${process.env.REACT_APP_API_KEY}change-avatar`, // Probablemente haya que poner el usuario o algo en la url
      {
        method: "PUT",
        headers: {
          authorization: `${token}`,
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    )
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201 || response.status === 200) {
          // localStorage.setItem()
          console.log(data); // Ver como sacar de la respuesta el avatar que envie asi lo guardo en la localstorage
          setChangeAvatarOn(false);
        } else {
          alert(data.detail);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const changePassword = async (data) => {
    console.log(data);
    const token = localStorage.getItem("user");
    await fetch(
      `${process.env.REACT_APP_API_KEY}change-password`, // Probablemente haya que poner el usuario o algo en la url
      {
        method: "PUT",
        headers: {
          authorization: `${token}`,
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    )
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201 || response.status === 200) {
          setChangePasswordOn(false);
        } else {
          alert(data.detail);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    try {
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(null, reader.result);
      };
      reader.onerror = function (error) {
        cb(error, null);
      };
    } catch {}
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
        setNewAvatar(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <EntryPage>
      <StyledEntryCard>
        <div>
          <Button variant='string' component='label'>
            <Avatar
              style={{
                height: 150,
                width: 150,
                verticalAlign: "middle",
                position: "relative",
                justifyContent: "center",
              }}
              spacing={2}
              src={newAvatar}
            />
            <input
              type='file'
              hidden
              accept='image/*'
              multiple
              onChange={(newAvatar) => {
                onChangePicture(newAvatar);
                onUploadFileChange(newAvatar);
                setChangeAvatarOn(true);
              }}
            />
          </Button>
          {changeAvatarOn && (
            <a>
              <StyledButton onClick={() => changeAvatar(newAvatar)}>
                Apply
              </StyledButton>
              <StyledButton
                style={{backgroundColor: "red"}}
                onClick={() => {
                  setNewAvatar(prevAvatar);
                  setChangeAvatarOn(false);
                }}>
                Undo
              </StyledButton>
            </a>
          )}
          {/* </form> */}

          <div>Username</div>
          <div>aestusemburgo@gmail.com</div>
        </div>
        {changePasswordOn && (
          <div>
            <form onSubmit={handleSubmit(changePassword)}>
              <StyledInputGroup>
                <StyledInput
                  type='password'
                  placeholder='Current password'
                  {...register("current_password", {
                    required: true,
                    pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
                  })}
                />
                {errors.current_password?.type === "pattern" && (
                  <StyledError role='alertError'>
                    The password must contain at least 8 characters, one
                    uppercase, lowercase and number
                  </StyledError>
                )}
                {errors.current_password?.type === "minLength" && (
                  <StyledError role='alertError'>
                    The password must contain at least 8 characters
                  </StyledError>
                )}
                {errors.current_password?.type === "required" && (
                  <StyledError role='alertError'>
                    Password is required
                  </StyledError>
                )}
              </StyledInputGroup>
              <StyledInputGroup>
                <StyledInput
                  type='password'
                  placeholder='New password'
                  {...register("new_password", {
                    required: true,
                    pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
                    validate: (val) => {
                      return (
                        watch("current_password") === "" ||
                        watch("current_password") !== val
                      );
                    },
                  })}
                />
                {errors.new_password?.type === "pattern" && (
                  <StyledError role='alertError'>
                    The password must contain at least 8 characters, one
                    uppercase, lowercase and number
                  </StyledError>
                )}
                {errors.new_password?.type === "minLength" && (
                  <StyledError role='alertError'>
                    The password must contain at least 8 characters
                  </StyledError>
                )}
                {errors.new_password?.type === "required" && (
                  <StyledError role='alertError'>
                    New password is required
                  </StyledError>
                )}
                {errors.new_password?.type === "validate" && (
                  <StyledError role='alertError'>
                    Passwords are the same
                  </StyledError>
                )}
              </StyledInputGroup>
              <StyledButton type='submit'>Submit</StyledButton>
              <StyledButton onClick={() => setChangePasswordOn(false)}>
                Cancel
              </StyledButton>
            </form>
          </div>
        )}
        {!changePasswordOn && (
          <StyledButton onClick={() => setChangePasswordOn(true)}>
            Change password
          </StyledButton>
        )}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Profile;
