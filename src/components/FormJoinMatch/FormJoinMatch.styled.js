import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #252c32;
`;

export const Select = styled.select`
  border: none;
  outline: none;
`;

export const Option = styled.option``;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  outline: none;
  border: 1px solid #00c8c8;
  border-radius: 5px;
  color: #fff;
  &:focus {
    border: 1px solid #00c8c8;
  }
  background-color: #252c32;
`;

export const Error = styled.p`
  font-size: 12px;
  color: red;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 10px;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  outline: none;
  background-color: #00c8c8;
  cursor: pointer;
`;
