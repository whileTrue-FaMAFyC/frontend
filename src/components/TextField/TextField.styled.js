import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  width: 100%;
  /*   height: 50px; */
  padding: 8px 16px;
  /*   background-color: #0a0e13; */
  background-color: #252c32;
  outline: none;

  border: 1px solid #2793c6;
  border: 1px solid #00c8c8;
  border-radius: 4px;
  color: #fff;

  &::placeholder {
    color: red;
  }
  &:focus {
    /*     border: 1px solid #0fbcde; */
    border: 1px solid #00c8c8;
  }
  font-size: 16px;
`;

export const InputError = styled.p`
  color: red;
  font-size: 12px;
`;
