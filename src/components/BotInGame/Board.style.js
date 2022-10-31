import styled from "styled-components";
import {Rocket, Cross} from "@styled-icons/entypo";

export const StyledBoard = styled.div`
  position: relative;
  margin-top: 50px;
  width: 500px;
  height: 500px;
  //padding: 30px;
  color: #bf7636;
  background-color: #f2be5c;
  border: 5px inset #bb7032;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const Robot = styled.div`
  position: absolute;
  left: ${(props) => `${props.coordinates.x}%`};
  top: ${(props) => `${props.coordinates.y}%`};
  border-radius: inherit;
  transition: 1s ease-in-out;
`;

export const EntryPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fbfbfb;
`;

export const RedRocket = styled.div`
  height: 10%;
  position: absolute;
  height: ${(props) => (props.coordinates.exploded ? `30px` : `10px`)}; //12px;
  width: ${(props) => (props.coordinates.exploded ? `30px` : `10px`)}; //12px;
  opacity: ${(props) => (props.coordinates.exploded ? `30%` : `100%`)};
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  left: ${(props) =>
    props.coordinates.exploded
      ? `${props.coordinates.x - 2}%`
      : `${props.coordinates.x - 0.5}%`};
  top: ${(props) =>
    props.coordinates.exploded
      ? `${props.coordinates.y - 2}%`
      : `${props.coordinates.y - 0.5}%`};
  /* border-radius: inherit; */
  transition: 1s ease-in-out;
`;

export const RedCross = styled(Cross)`
  color: Red;
  height: 10%;
  position: absolute;
  left: ${(props) => `${props.coordinates.x}%`};
  top: ${(props) => `${props.coordinates.y}%`};
  visibility: ${(props) => `${props.estado}`};
  border-radius: inherit;
  transition: 1s ease-in-out;
`;
