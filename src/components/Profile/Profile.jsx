import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
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
  const [userInfo, setUserInfo] = useState({});
  const [avatarError, setAvatarError] = useState("");
  const [avatarSuccess, setAvatarSuccess] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [userInfoError, setUserInfoError] = useState("");

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [newAvatar, setNewAvatar] = useState(localStorage.getItem("avatar"));

  const getUserInfo = async (token) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_KEY}user-profile`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  };

  const callGetUserInfo = async () => {
    try {
      const response = await getUserInfo(localStorage.getItem(`user`));
      if (response.data != "") {
        setUserInfo(response.data);
      }
    } catch (error) {
      setUserInfoError(error);
    }
  };

  const changeAvatar = async (avatar) => {
    const data = {avatar: avatar};
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
        body: JSON.stringify(data),
      }
    )
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201 || response.status === 200) {
          setChangeAvatarOn(false);
          localStorage.setItem("avatar", newAvatar);
          setAvatarError("Avatar was changed successfully");
          setAvatarSuccess(true);
        } else {
          setAvatarError(data.detail);
        }
      })
      .catch((error) => {
        setAvatarError(error);
      });
  };

  const changePassword = async (data) => {
    const token = localStorage.getItem("user");
    await fetch(
      `${process.env.REACT_APP_API_KEY}change-password`, // Probablemente haya que poner el usuario o algo en la url
      {
        method: "PATCH",
        headers: {
          authorization: `${token}`,
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify(data),
      }
    )
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201 || response.status === 200) {
          setChangePasswordOn(false);
          setPasswordMessage("Password was changed successfully");
        } else {
          setPasswordMessage(data.detail);
        }
      })
      .catch((error) => {
        setPasswordMessage(error);
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

  useEffect(() => {
    callGetUserInfo();
  }, []);

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
              data-testid='avatarImage'
              type='file'
              hidden
              accept='image/*'
              multiple
              onChange={(newPic) => {
                if (newPic.target.files[0].size <= 40000) {
                  setChangeAvatarOn(true);
                  onChangePicture(newPic);
                  onUploadFileChange(newPic);
                  setAvatarError("");
                } else {
                  setChangeAvatarOn(false);
                  setAvatarError("Insert image under 40 KB");
                }
              }}
            />
          </Button>
          {changeAvatarOn && (
            <a>
              <StyledButton
                role='apply'
                onClick={() => {
                  changeAvatar(newAvatar);
                }}>
                Apply
              </StyledButton>
              <StyledButton
                role='undo'
                style={{backgroundColor: "red"}}
                onClick={() => {
                  setNewAvatar(localStorage.getItem("avatar"));
                  setChangeAvatarOn(false);
                  setAvatarError("");
                }}>
                Undo
              </StyledButton>
              <StyledError style={{marginLeft: `50%`}}>
                {avatarError}
              </StyledError>
            </a>
          )}
          <div data-testid='username'>{userInfo.username}</div>
          <div data-testid='email'>{userInfo.email}</div>
        </div>
        {!changeAvatarOn && avatarSuccess && (
          <StyledError style={{fontSize: 15, color: "green"}}>
            {avatarError}
          </StyledError>
        )}
        {!changeAvatarOn && !avatarSuccess && (
          <StyledError style={{fontSize: 15}}>{avatarError}</StyledError>
        )}
        {changePasswordOn && (
          <div>
            <form onSubmit={handleSubmit(changePassword)}>
              <StyledInputGroup>
                <StyledInput
                  data-testid='currentPassword'
                  type='password'
                  placeholder='Current password'
                  {...register("current_password", {
                    required: true,
                    pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
                  })}
                />
                {errors.current_password?.type === "pattern" && (
                  <StyledError
                    role='alertError'
                    data-testid='invalidPatternCurrent'>
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
                  data-testid='newPassword'
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
                  <StyledError
                    role='alertError'
                    data-testid='invalidPatternNew'>
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
                    Current and new password are the same
                  </StyledError>
                )}
              </StyledInputGroup>
              <StyledInputGroup>
                <StyledInput
                  data-testid='newPasswordConfirmation'
                  type='password'
                  placeholder='Confirm new password'
                  {...register("new_password_confirmation", {
                    required: true,
                    pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
                    validate: (val) => {
                      return (
                        watch("new_password") === "" ||
                        watch("new_password") === val
                      );
                    },
                  })}
                />
                {errors.new_password_confirmation?.type === "pattern" && (
                  <StyledError
                    role='alertError'
                    data-testid='invalidPatternConfirmation'>
                    The password must contain at least 8 characters, one
                    uppercase, lowercase and number
                  </StyledError>
                )}
                {errors.new_password_confirmation?.type === "minLength" && (
                  <StyledError role='alertError'>
                    The password must contain at least 8 characters
                  </StyledError>
                )}
                {errors.new_password_confirmation?.type === "required" && (
                  <StyledError role='alertError'>
                    Confirm your new password
                  </StyledError>
                )}
                {errors.new_password_confirmation?.type === "validate" && (
                  <StyledError role='alertError'>
                    Passwords do not match
                  </StyledError>
                )}
              </StyledInputGroup>
              <StyledButton role='submit' type='submit'>
                Submit
              </StyledButton>
              <StyledButton
                role='cancel'
                type='button'
                onClick={() => {
                  setChangePasswordOn(false);
                  setPasswordMessage("");
                }}>
                Cancel
              </StyledButton>
              <StyledError role='alertSuccess'>{passwordMessage}</StyledError>
            </form>
          </div>
        )}
        {!changePasswordOn && (
          <div>
            <StyledButton
              role='changePassword'
              onClick={() => {
                setChangePasswordOn(true);
                setPasswordMessage("");
              }}>
              Change password
            </StyledButton>
            <StyledError style={{color: "green"}}>
              {passwordMessage}
            </StyledError>
          </div>
        )}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Profile;
