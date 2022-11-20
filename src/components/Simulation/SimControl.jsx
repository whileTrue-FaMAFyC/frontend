import React from "react";
import {StyledButton, StyledControlButtons} from "./Board.style";
import {Play, Backward, Forward} from "@styled-icons/fa-solid";
import {ControllerPaus} from "@styled-icons/entypo";
import {Reset} from "@styled-icons/boxicons-regular";

const SimControl = ({handlers}) => {
  return (
    <StyledControlButtons>
      <StyledButton onClick={handlers.play} data-testid='play'>
        <Play />
      </StyledButton>
      <StyledButton onClick={handlers.stop} data-testid='stop'>
        <ControllerPaus />
      </StyledButton>
      <StyledButton onClick={handlers.forward} data-testid='forward'>
        <Forward />
      </StyledButton>
      <StyledButton onClick={handlers.backward} data-testid='backward'>
        <Backward />
      </StyledButton>
      <StyledButton onClick={handlers.reset} data-testid='reset'>
        <Reset />
      </StyledButton>
    </StyledControlButtons>
  );
};

export default SimControl;
