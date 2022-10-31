import {EntryPage, StyledButton, StyledEntryCard} from "./Home.styled";
import {Link, useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <EntryPage>
      <StyledEntryCard>
        <h2>PyRobots</h2>
        <Link to='/gameconfig' data-testid='linkToReg'>
          <StyledButton>Create Match</StyledButton>
        </Link>
        <Link to='/avtarSubmit' data-testid='linkToReg'>
          <StyledButton>Create Simulation</StyledButton>
        </Link>
        <Link to='/botsubmit' data-testid='linkToReg'>
          <StyledButton>Create Bot</StyledButton>
        </Link>
        <Link to='/listgames' data-testid='linkToReg'>
          <StyledButton>List Matches</StyledButton>
        </Link>
      </StyledEntryCard>
    </EntryPage>
  );
};
export default Home;
