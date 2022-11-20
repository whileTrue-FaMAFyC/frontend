import React from "react";
import {StyledButton, StyledControlButtons} from "./Board.style";
import {
  Play,
  BackwardStep,
  ForwardStep,
  Pause,
  Stop,
} from "@styled-icons/fa-solid";

const SimControl = ({handlers}) => {
  return (
    <StyledControlButtons>
      <StyledButton onClick={handlers.play} data-testid='play'>
        <Play />
      </StyledButton>
      <StyledButton onClick={handlers.stop} data-testid='stop'>
        <Pause />
      </StyledButton>
      <StyledButton onClick={handlers.forward} data-testid='forward'>
        <ForwardStep />
      </StyledButton>
      <StyledButton onClick={handlers.backward} data-testid='backward'>
        <BackwardStep />
      </StyledButton>
      <StyledButton onClick={handlers.reset} data-testid='reset'>
        <Stop />
      </StyledButton>
    </StyledControlButtons>
  );
};

export default SimControl;
