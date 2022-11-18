import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #00c8c8;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  background-color: ${(props) =>
    props.enabledColor ? "gray" : `#00c8c8`}; //#00c8c8;

  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => (props.enabledColor ? "gray" : `#009595;`)};
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  background-color: inherit;
  margin: 15px;
  flex-direction: column;
`;

export const StyledError = styled.p`
  font-size: 12px;
  padding: 5px;
  color: red;
`;
