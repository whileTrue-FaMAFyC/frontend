import {
  EntryPage,
  StyledButton,
  StyledEntryCard,
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
            <label>Password</label>
          </StyledInputGroup>
          <StyledButton
            type='login'
            role='button'
            {...register("username_or_email", {
              required: true,
            })}>
            Enviar
          </StyledButton>
        </form>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default EnterPassword;
