import {WelcomeImg, StyledButton, StyledEntryCard} from "./Welcome.styled";
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <WelcomeImg
      style={{
        backgroundImage: `url("https://imgs.search.brave.com/VeYbVrPVN-lcUrB1ADmGaK2TGhepR0WIA8xKEIUav9E/rs:fit:1200:1200:1/g:ce/aHR0cDovL3dhbGxw/YXBlcmNhdmUuY29t/L3dwL2xXUzlyOGMu/anBn")`,
        gap: "0",
      }}>
      <div>
        <img
          src='https://imgs.search.brave.com/yqn9FkhmMTk1HLhuO32J-X8vSy-8DzeF_5pqWDhUZ5A/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvcm9ib3QtY2Fy/dG9vbi1wYXJ0LTMv/NTEyLzMyLTEwMjQu/cG5n'
          width={150}
          height={150}
          alt={""}
          data-testid='img'
        />
      </div>

      <StyledEntryCard>
        <h2>PyRobots</h2>
        {/* <StyledButton type='button'> */}
        <Link to='/login' data-testid='linkToLogin'>
          <StyledButton>Login</StyledButton>
        </Link>
        {/* </StyledButton> */}
        {/* <StyledButton type='button'> */}
        <Link to='/register' data-testid='linkToReg'>
          <StyledButton>Register</StyledButton>
        </Link>
        {/* </StyledButton> */}
      </StyledEntryCard>
    </WelcomeImg>
  );
};

export default Welcome;
