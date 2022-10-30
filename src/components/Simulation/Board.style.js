import styled from "styled-components";

export const StyledBoard = styled.div`
  /* display: grid;
  grid-template-columns: repeat(100, 4px);
  grid-template-rows: repeat(100, 4px); */
  justify-content: center;
  position: relative;
  margin-top: 200px;
  width: 500px;
  height: 500px;
  color: #bf7636;
  background-color: #f2be5c;
  border: 5px inset #bb7032;
  border-radius: 5px;
  //box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const Robot = styled.div`
  position: absolute;
  left: ${(props) => `${props.x}%`};
  top: ${(props) => `${props.y}%`};
  border-radius: inherit;
  transition: 1s ease-in-out;
  transition-delay: 200ms;
  ${({died}) => died && `hidden={true};`}
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
`;
