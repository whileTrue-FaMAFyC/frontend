import {
  EntryPage,
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
} from "../Login/Login.styled";

const EnterPassword = ({
  register,
  handleSubmit,
  submit,
  failureData,
  loading,
}) => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <form onSubmit={handleSubmit(submit)}>
          <StyledInputGroup>
            <label>Code</label>
            <StyledInput
              type='text'
              {...register("password", {
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
              })}
            />
          </StyledInputGroup>
          <StyledInputGroup>
            <label>Confirm new password</label>
            <StyledInput
              type='password'
              {...register("password", {
                required: true,
              })}
            />
          </StyledInputGroup>
          <StyledButton role='button'>Send</StyledButton>
        </form>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default EnterPassword;
