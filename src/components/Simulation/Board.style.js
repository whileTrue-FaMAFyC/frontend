import styled from "styled-components";
import {Robot} from "@styled-icons/remix-fill";
import {Stars} from "@styled-icons/bootstrap";

export const StyledBoard = styled.div`
  /* display: grid;
  grid-template-columns: repeat(100, 4px);
  grid-template-rows: repeat(100, 4px); */
  position: relative;
  margin-top: 200px;
  width: 500px;
  height: 500px;
  color: #bf7636;
  background-color: #f2be5c;
  border: 5px inset #bb7032;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const StyledRobot = styled.div`
  position: absolute;
  left: ${(props) => (props.x > 90 ? "90%" : `${props.x}%`)};
  top: ${(props) => (props.y > 90 ? "90%" : `${props.y}%`)};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: inherit;
  transition: 1s ease-in-out;
  ${({died}) => died && `hidden={true};`}
`;

export const Bot = styled(Robot)`
  width: 25px;
  height: 25px;
`;

export const Harm = styled(Stars)`
  width: 25px;
  height: 25px;
  color: black;
  ${({harmed}) => !harmed && `hidden={true};`}
`;

export const StyledHarm = styled.div`
  margin: 0%;
`;

export const EntryPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fbfbfb;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  color: black;
  gap: 0px;
`;
