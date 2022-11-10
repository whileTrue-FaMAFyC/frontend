import {
  EntryPage,
  StyledButton,
  StyledEntryCard,
  StyledInputGroup,
} from "../Login/Login.styled";

const EnterPassword = ({handleSubmit, submit}) => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <form onSubmit={handleSubmit(submit)}>
          <StyledInputGroup>
            <label>Password</label>
          </StyledInputGroup>
          <StyledButton type='login' role='button'>
            Enviar
          </StyledButton>
        </form>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default EnterPassword;
