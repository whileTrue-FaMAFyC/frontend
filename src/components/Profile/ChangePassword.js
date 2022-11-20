import {useState, useEffect} from "react";
import {
  StyledButton,
  StyledInput,
  StyledInputGroup,
  StyledError,
} from "./Profile.style";

const ChangePassword = ({
  register,
  handleSubmit,
  submit,
  failureData,
  loading,
  errors,
  watch,
}) => {
  const [changePasswordOn, setChangePasswordOn] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");

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
          <StyledError style={{color: "green"}}>{passwordMessage}</StyledError>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
