import {
  EntryPage,
  StyledButton,
  StyledEntryCard,
  StyledInputGroup,
} from "../Login/Login.styled";

const EnterEmail = ({handleSubmit, submit}) => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <form onSubmit={handleSubmit(submit)}>
          <StyledInputGroup>
            <label>Email</label>
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
