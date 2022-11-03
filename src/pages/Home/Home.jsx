import {EntryPage, StyledButton, StyledEntryCard} from "./Home.styled";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <h2>PyRobots</h2>
        <Link to='/gameconfig' data-testid='linkToCreateMatch'>
          <StyledButton>Create Match</StyledButton>
        </Link>
        <Link to='/avtarSubmit' data-testid='linkToCreateSim'>
          <StyledButton>Create Simulation</StyledButton>
        </Link>
        <Link to='/botsubmit' data-testid='linkToCreateBot'>
          <StyledButton>Create Bot</StyledButton>
        </Link>
        <Link to='/listgames' data-testid='linkToListMatch'>
          <StyledButton>List Matches</StyledButton>
        </Link>
        <Link to='/library' data-testid='robotLibrary'>
          <StyledButton>Robots library</StyledButton>
        </Link>
      </StyledEntryCard>
    </EntryPage>
  );
};
export default Home;
