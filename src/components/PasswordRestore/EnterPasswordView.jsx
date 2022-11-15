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
        <form onSubmit={handleSubmit(submit)} data-testid='formPassword'>
          <StyledInputGroup data-testid='codeInputGroup'>
            <label data-testid='codeLabel'>
              We've sent you a code to your email
            </label>
            <StyledInput
              data-testid='codeInput'
              autoComplete='off'
              type='text'
              {...register("code", {
                required: true,
              })}
            />
          </StyledInputGroup>
          <StyledInputGroup data-testid='PasswordGroup'>
            <label data-testid='labelPassword'>New password</label>
            <StyledInput
              data-testid='inputPassword'
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
          <StyledInputGroup data-testid='confirmPasswordGroup'>
            <label data-testid='labelConfirmPassword'>
              Confirm new password
            </label>
            <StyledInput
              data-testid='inputConfirmPassword'
              autoComplete='off'
              type='password'
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
          {failureData !== "" && (
            <StyledError role='alert' data-testid='error'>
              {failureData}
            </StyledError>
          )}
          <StyledButton role='button' data-testid='submitPassword'>
            Send
          </StyledButton>
        </form>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default EnterPassword;
