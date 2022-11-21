import styled from "styled-components";

import {
  Play,
  BackwardStep,
  ForwardStep,
  Pause,
  Stop,
} from "@styled-icons/fa-solid";

export const StyledButton = styled.button`
  width: ${(props) => (props.full ? "100%" : null)};
  min-width: 64px;
  border: 0;
  margin: 50px;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #00c8c8;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #009595;
  }
`;

export const StyledControlButtons = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  padding: 50px;
  margin: auto;
  background-color: #252c32;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.06);
`;

export const StyledPlay = styled(Play)`
  width: 25px;
  height: 25px;
`;

export const StyledStop = styled(Pause)`
  width: 25px;
  height: 25px;
`;

export const StyledFwdStep = styled(ForwardStep)`
  width: 25px;
  height: 25px;
`;

export const StyledBwdStep = styled(BackwardStep)`
  width: 25px;
  height: 25px;
`;

export const StyledReset = styled(Stop)`
  width: 25px;
  height: 25px;
`;
