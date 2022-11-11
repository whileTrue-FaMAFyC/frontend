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
} from "./Profile.style";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [changePasswordOn, setChangePasswordOn] = useState(false);
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(localStorage.getItem("avatar"));

  const changeAvatar = async (data) => {
    console.log("kasdlkasdlk");
  };

  function onChange(event) {
    setAvatar(event.target.value); //update your value here
    console.log("Cambieee");
  }

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

  return (
    <EntryPage>
      <StyledEntryCard>
        <div>
          {/* <form onSubmit={handleSubmit(changeAvatar)}> */}
          <Button variant='string' type='submit'>
            <Avatar
              style={{
                height: 150,
                width: 150,
                verticalAlign: "middle",
                position: "relative",
                justifyContent: "center",
              }}
              spacing={2}
              src={imgData}
            />
            <input
              type='file'
              hidden
              accept='image/*'
              multiple
              onChange={(avatar) => {
                onChangePicture(avatar);
                onUploadFileChange(avatar);
              }}
            />
            {/* <input avatar={avatar} type='file' readOnly /> */}
            {/* <input
                hidden
                accept='image/*'
                multiple
                type='file'
                {...register("match_password")}
              /> */}
          </Button>
          {/* </form> */}

          <div>Username</div>
          <div>aestusemburgo@gmail.com</div>
        </div>
        {changePasswordOn && (
          <div>
            <form onSubmit={handleSubmit()}>
              <StyledInputGroup>
                <StyledInput
                  type='text'
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
                  type='text'
                  placeholder='New password'
                  {...register("new_password", {
                    required: true,
                    pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
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
