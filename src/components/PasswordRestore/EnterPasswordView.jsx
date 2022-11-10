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
            <label>Password</label>
            <StyledInput
              type='test'
              {...register("password", {
                required: true,
              })}></StyledInput>
          </StyledInputGroup>
          <StyledButton role='button'> Enviar</StyledButton>
        </form>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default EnterPassword;
