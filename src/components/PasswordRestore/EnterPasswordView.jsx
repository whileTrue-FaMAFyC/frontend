import {
  EntryPage,
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  StyledError,
} from "../Login/Login.styled";

const EnterPassword = ({
  register,
  handleSubmit,
  submit,
  failureData,
  loading,
  errors,
  watch,
}) => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <form onSubmit={handleSubmit(submit)}>
          <StyledInputGroup>
            <label>Code</label>
            <StyledInput
              type='text'
              {...register("code", {
                required: true,
              })}
            />
          </StyledInputGroup>
          <StyledInputGroup>
            <label>New password</label>
            <StyledInput
              type='password'
              {...register("password", {
                required: true,
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/,
              })}
            />
            {errors.password?.type === "pattern" && (
              <StyledError role='alertError'>
                The password must contain at least 8 characters, one uppercase,
                lowercase and number
              </StyledError>
            )}
            {errors.password?.type === "minLength" && (
              <StyledError role='alertError'>
                The password must contain at least 8 characters
              </StyledError>
            )}
            {errors.password?.type === "required" && (
              <StyledError role='alertError'>Password is required</StyledError>
            )}
          </StyledInputGroup>
          <StyledInputGroup>
            <label>Confirm new password</label>
            <StyledInput
              autoComplete='off'
              type='password'
              id='inputConfirmPassword'
              data-testid='Confirm password'
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  return watch("password") === "" || watch("password") === val;
                },
              })}
            />
            {errors.confirmPassword?.type === "validate" && (
              <StyledError role='alertError'>
                Passwords do not match
              </StyledError>
            )}
            {errors.confirmPassword?.type === "required" &&
              watch("password") && (
                <StyledError role='alertError'>
                  Enter your password again
                </StyledError>
              )}
          </StyledInputGroup>
          <StyledButton role='button'>Send</StyledButton>
        </form>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default EnterPassword;
