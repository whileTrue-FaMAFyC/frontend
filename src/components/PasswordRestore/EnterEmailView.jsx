import {
  EntryPage,
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
} from "../Login/Login.styled";

const EnterEmail = ({handleSubmit, submit}) => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <form onSubmit={handleSubmit(submit)}>
          <StyledInputGroup>
            <label>Email</label>
            <StyledInput></StyledInput>
          </StyledInputGroup>
          <StyledButton type='login' role='button'>
            Enviar
          </StyledButton>
        </form>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default EnterEmail;
