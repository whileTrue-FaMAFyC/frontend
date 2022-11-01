import styled from "styled-components";
import {Robot} from "@styled-icons/remix-fill";
import {Stars} from "@styled-icons/bootstrap";

export const StyledBoard = styled.div`
  position: relative;
  margin-top: 100px;
  width: 750px;
  height: 750px;
  color: #bf7636;
  background-color: #f2be5c;
  border: 5px inset #bb7032;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const StyledRobot = styled.div`
  position: absolute;
  left: ${(props) => (props.x > 96.66 ? "96.66%" : `${props.x}%`)};
  top: ${(props) => (props.y > 96.66 ? "96.66%" : `${props.y}%`)};
  color: ${(props) => `${props.color}`};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: inherit;
  transition: 1s ease-in-out;
`;

export const Bot = styled(Robot)`
  width: 25px;
  height: 25px;
  justify-content: center;
`;

export const Harm = styled(Stars)`
  width: 20px;
  height: 20px;
  color: black;
`;

export const StyledHarm = styled.div`
  position: absolute;
  top: 10%;
  transition-delay: 250ms;
  transition-property: inherit;
`;

export const EntryPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fbfbfb;
`;

// export const StyledLabel = styled.label`
//   font-size: 12px;
//   color: black;
//   gap: 0px;
// `;
