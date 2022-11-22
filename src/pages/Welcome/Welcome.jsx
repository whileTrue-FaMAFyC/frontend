import {WelcomeImg, StyledButton, StyledEntryCard} from "./Welcome.styled";
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <WelcomeImg
      style={{
        backgroundImage: `url(welcomeBackground.webp)`,
      }}>
      <div>
        <img
          src='welcomeRobot.webp'
          width={150}
          height={150}
          alt={""}
          data-testid='img'
        />
      </div>

      <StyledEntryCard>
        <h2>PyRobots</h2>
        <Link to='/login' data-testid='linkToLogin'>
          <StyledButton>Login</StyledButton>
        </Link>
        <Link to='/register' data-testid='linkToReg'>
          <StyledButton>Register</StyledButton>
        </Link>
      </StyledEntryCard>
    </WelcomeImg>
  );
};

export default Welcome;
