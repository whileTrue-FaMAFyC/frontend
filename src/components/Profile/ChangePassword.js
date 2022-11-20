import {useState, useEffect} from "react";
import {
  StyledButton,
  StyledInput,
  StyledInputGroup,
  StyledError,
  Div,
} from "./Profile.style";
import {useForm} from "react-hook-form";
import {CircularProgress} from "@mui/material";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
    reset,
  } = useForm();

  const [changePasswordOn, setChangePasswordOn] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const changePassword = async (data) => {
    setLoading(true);
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
        setLoading(false);
        const data = await response.json();
        if (response.status === 201 || response.status === 200) {
          resetFields();
          setChangePasswordOn(false);
          setPasswordMessage("Password was changed successfully");
        } else {
          setPasswordMessage(data.detail);
        }
      })
      .catch((error) => {
        setPasswordMessage(error);
        setLoading(false);
      });
  };

  const resetFields = () => {
    reset({
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    });
  };

  return (
    <div>
      {changePasswordOn ? (
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
                <StyledError role='alertError' data-testid='invalidPatternNew'>
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
            {loading ? (
              <Div>
                <CircularProgress size={40} data-testid='loader' />
              </Div>
            ) : (
              <div>
                <StyledButton role='submit' type='submit'>
                  Submit
                </StyledButton>

                <StyledButton
                  role='cancel'
                  type='button'
                  onClick={() => {
                    setChangePasswordOn(false);
                    setPasswordMessage("");
                    resetFields();
                  }}>
                  Cancel
                </StyledButton>
              </div>
            )}
            <StyledError data-testid='alert'>{passwordMessage}</StyledError>
          </form>
        </div>
      ) : null}
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
          <StyledError style={{color: "green"}} data-testid='alertSuccess'>
            {passwordMessage}
          </StyledError>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
