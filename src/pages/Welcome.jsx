import {WelcomeImg, StyledButton, StyledEntryCard} from "./Welcome.styled";
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <WelcomeImg
      style={{
        backgroundImage: `url("https://imgs.search.brave.com/VeYbVrPVN-lcUrB1ADmGaK2TGhepR0WIA8xKEIUav9E/rs:fit:1200:1200:1/g:ce/aHR0cDovL3dhbGxw/YXBlcmNhdmUuY29t/L3dwL2xXUzlyOGMu/anBn")`,
      }}>
      <img
        src='https://imgs.search.brave.com/d0N5nVGQrq83hlOQGSUv8eOzavubmuFWncmj3cdPYbk/rs:fit:658:747:1/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS90/aHVtYi90ZWNobm9s/b2d5LzcyOTY3LXRo/cmVlLWRpbWVuc2lv/bmFsLXNwYWNlLXJv/Ym90aWNzLXJvYm90/LWNvbXB1dGVyLWdy/YXBoaWNzLWJvcmRl/ci5wbmc'
        width={150}
        height={150}
        style={{position: "absolute", left: "595px"}}
        data-testid='img'
      />
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
