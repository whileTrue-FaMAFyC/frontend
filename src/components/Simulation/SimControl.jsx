import React from "react";
import {StyledButton, StyledEntryCard} from "./Board.style";

const SimControl = ({handlers}) => {
  return (
    <StyledEntryCard>
      <StyledButton onClick={handlers.play}>Play</StyledButton>
      <StyledButton onClick={handlers.stop}>Stop</StyledButton>
      <StyledButton onClick={handlers.forward}>Forward</StyledButton>
      <StyledButton onClick={handlers.backward}>Backward</StyledButton>
      <StyledButton onClick={handlers.reset}>Reset</StyledButton>
    </StyledEntryCard>
  );
};

export default SimControl;
