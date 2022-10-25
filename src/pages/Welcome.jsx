import {WelcomeImg, StyledButton, StyledEntryCard} from "./Welcome.styled";
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <WelcomeImg
      style={{
        backgroundImage: `url("https://robocraftgame.com/images/devblog/robocraftgen_banner.jpg")`,
        color: "#E1B338",
      }}
      data-testid='home'>
      <StyledEntryCard>
        <h2>PyRobots</h2>
        <StyledButton>
          <Link to='/register' data-testid='linkToReg'>
            Register
          </Link>
        </StyledButton>
        <StyledButton>
          <Link to='/login' data-testid='linkToLogin'>
            Login
          </Link>
        </StyledButton>
      </StyledEntryCard>
    </WelcomeImg>
  );
};

export default Welcome;
