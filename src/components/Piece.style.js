import styled from "styled-components";

export const Piece = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 30px;
  background-color: ${(props) => props.color};
  box-shadow: 0 0 20px -6px #333;
  align-items: center;
`;
