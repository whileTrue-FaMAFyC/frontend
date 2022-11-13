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
            <label className='form-label' htmlFor='inputUsername'>
              Username
            </label>
            <StyledInput
              autoComplete='off'
              type='text'
              id='inputUsername'
              data-testid='Username'
              {...register("username", {
                required: true,
                maxLength: 16,
                minLength: 3,
              })}
            />
            {errors.username?.type === "required" && (
              <StyledError role='alertError'>Username is required</StyledError>
            )}
            {errors.username?.type === "maxLength" && (
              <StyledError role='alertError'>
                Username must be at most 16 characters long.
              </StyledError>
            )}
            {errors.username?.type === "minLength" && (
              <StyledError role='alertError'>
                Username must be at least 3 characters long.
              </StyledError>
            )}
          </StyledInputGroup>
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
