import {
  EntryPage,
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  StyledError,
} from "../Login/Login.styled";
import {CircularProgress} from "@mui/material";

const EnterEmail = ({
  register,
  handleSubmit,
  submit,
  failureData,
  loading,
  errors,
}) => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <form onSubmit={handleSubmit(submit)}>
          <StyledInputGroup>
            <label>Email</label>
            <StyledInput
              type='text'
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <StyledError role='alertError'>
                The email format is incorrect
              </StyledError>
            )}
            {errors.email?.type === "required" && (
              <StyledError role='alertError'>Email is required</StyledError>
            )}
          </StyledInputGroup>
          {loading ? (
            <div>
              <CircularProgress data-testid='loader' />
            </div>
          ) : (
            <StyledButton role='button' data-testid='loginButton' type='submit'>
              Send Email
            </StyledButton>
          )}
        </form>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default EnterEmail;
