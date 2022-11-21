import {useState} from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import UserInfo from "./UserInfo";
import {StyledButton, StyledError} from "./Profile.style";

const ChangeAvatar = () => {
  const [changeAvatarOn, setChangeAvatarOn] = useState(false);
  const [newAvatar, setNewAvatar] = useState(localStorage.getItem("avatar"));
  const [avatarError, setAvatarError] = useState("");
  const [avatarSuccess, setAvatarSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [picture, setPicture] = useState(null);

  const avatarStyle = {
    height: 150,
    width: 150,
    verticalAlign: "middle",
    position: "relative",
    justifyContent: "center",
  };

  const changeAvatar = async (avatar) => {
    setAvatarError("");
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
          setAvatarSuccess(false);
        }
      })
      .catch((error) => {
        setAvatarError(error);
        setAvatarSuccess(false);
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
    <div>
      <div>
        <Button variant='string' component='label'>
          <Avatar style={avatarStyle} spacing={2} src={newAvatar} />
          <input
            data-testid='avatarImage'
            type='file'
            hidden
            accept='image/*'
            multiple
            onChange={(newPic) => {
              if (
                newPic.target.length !== 0 &&
                newPic.target.files[0].size <= 40000
              ) {
                setChangeAvatarOn(true);
                onChangePicture(newPic);
                onUploadFileChange(newPic);
                setAvatarError("");
              } else {
                setAvatarSuccess(false);
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
              style={{backgroundColor: "#c21807"}}
              onClick={() => {
                setNewAvatar(localStorage.getItem("avatar"));
                setChangeAvatarOn(false);
                setAvatarError("");
              }}>
              Undo
            </StyledButton>
            <StyledError style={{marginLeft: `50%`}}>{avatarError}</StyledError>
          </a>
        )}
        <UserInfo />
      </div>
      {!changeAvatarOn && avatarSuccess && (
        <StyledError
          style={{fontSize: 15, color: "green"}}
          data-testid='alertSuccess'>
          {avatarError}
        </StyledError>
      )}
      {!changeAvatarOn && !avatarSuccess && (
        <StyledError style={{fontSize: 15}}>{avatarError}</StyledError>
      )}
    </div>
  );
};

export default ChangeAvatar;
