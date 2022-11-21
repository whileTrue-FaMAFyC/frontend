import React from "react";
import {
  StyledButton,
  StyledControlButtons,
  StyledPlay,
  StyledStop,
  StyledFwdStep,
  StyledBwdStep,
  StyledReset,
} from "./SimControl.styled";

const SimControl = ({handlers}) => {
  return (
    <StyledControlButtons>
      <StyledButton onClick={handlers.play} data-testid='play'>
        <StyledPlay />
      </StyledButton>
      <StyledButton onClick={handlers.stop} data-testid='stop'>
        <StyledStop />
      </StyledButton>
      <StyledButton onClick={handlers.forward} data-testid='forward'>
        <StyledFwdStep />
      </StyledButton>
      <StyledButton onClick={handlers.backward} data-testid='backward'>
        <StyledBwdStep />
      </StyledButton>
      <StyledButton onClick={handlers.reset} data-testid='reset'>
        <StyledReset />
      </StyledButton>
    </StyledControlButtons>
  );
};

export default SimControl;
