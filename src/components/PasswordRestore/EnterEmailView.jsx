import {
  EntryPage,
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
} from "../Login/Login.styled";
import {CircularProgress} from "@mui/material";

const EnterEmail = ({register, handleSubmit, submit, failureData, loading}) => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <form onSubmit={handleSubmit(submit)}>
          <StyledInputGroup>
            <label>Email</label>
            <StyledInput type='text'></StyledInput>
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
