import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 5px;
  background-color: #0a0e13;
  outline: none;

  border: 1px solid #2793c6;
  border-radius: 5px;
  color: #fff;

  &::placeholder {
    color: red;
  }
  &:focus {
    border: 1px solid #0fbcde;
  }
  font-size: 16px;
`;

export const InputError = styled.p`
  color: red;
  font-size: 12px;
`;
