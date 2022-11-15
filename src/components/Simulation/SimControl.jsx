import React from "react";
import {StyledButton, StyledEntryCard} from "./Board.style";

const SimControl = ({handlers}) => {
  return (
    <StyledEntryCard>
      <StyledButton onClick={handlers.play} data-testid='play'>
        Play
      </StyledButton>
      <StyledButton onClick={handlers.stop} data-testid='stop'>
        Stop
      </StyledButton>
      <StyledButton onClick={handlers.forward} data-testid='forward'>
        Forward
      </StyledButton>
      <StyledButton onClick={handlers.backward} data-testid='backward'>
        Backward
      </StyledButton>
      <StyledButton onClick={handlers.reset} data-testid='reset'>
        Reset
      </StyledButton>
    </StyledEntryCard>
  );
};

export default SimControl;
