import styled from "styled-components";

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
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0f1519;
`;
