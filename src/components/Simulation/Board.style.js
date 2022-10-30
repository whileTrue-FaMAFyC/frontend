import styled from "styled-components";
import {Robot} from "@styled-icons/remix-fill";
import {Stars} from "@styled-icons/bootstrap";

export const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(100, auto);
  grid-template-rows: repeat(100, auto);
  justify-content: center;
  position: relative;
  align-items: flex-start;
  display: center;
  justify-content: stretch;
  margin: auto;
  width: 750px;
  height: 750px;
  padding: 30px;
  color: #bf7636;
  background-color: #f2be5c;
  border: 5px inset #bb7032;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const StyledRobot = styled.div`
  position: absolute;
  /* justify-content: flex-start; */
  left: ${(props) => (props.x > 96.66 ? "96.66%" : `${props.x}%`)};
  bottom: ${(props) => (props.y > 96.66 ? "96.66%" : `${props.y}%`)};
  display: ${(props) => (props.hidden ? `hidden` : `flex`)};
  color: ${(props) => `${props.color}`};
  align-items: center;
  flex-direction: column;
  transition: 0.1s linear;
`;

export const Bot = styled(Robot)`
  width: 24px;
  height: 24px;
  justify-content: center;
`;

export const Harm = styled(Stars)`
  width: 24px;
  height: 24px;
  color: black;
`;

export const StyledHarm = styled.div`
  position: absolute;
  top: 10%;
  transition-delay: 250ms;
  transition-property: inherit;
`;

export const EntryPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0f1519;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  color: black;
  gap: 0px;
`;

export const Missiles = styled.div`
  height: 10%;
  position: absolute;
  height: ${(props) => (props.exploded ? `150px` : `15px`)}; //12px;
  width: ${(props) => (props.exploded ? `150px` : `15px`)}; //12px;
  opacity: ${(props) => (props.exploded ? `15%` : `100%`)};
  /* background-color: ${(props) => (true ? `# + ${props.idr}` : "#9aaa")}; */
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  left: ${(props) => (props.exploded ? `${props.x - 8}%` : `${props.x}%`)};
  bottom: ${(props) => (props.exploded ? `${props.y - 8}%` : `${props.y}%`)};
  /* border-radius: inherit; */
  transition: ${(props) =>
    props.new ? `null` : `0.25s ease-in`}; //0.5s ease-in;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  color: black;
`;
