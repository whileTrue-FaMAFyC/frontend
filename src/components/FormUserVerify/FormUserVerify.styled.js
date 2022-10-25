import styled from "styled-components";

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 25px;
`;

export const Button = styled.button`
  width: 50%;
  height: 30px;
  outline: none;
  border: none;
  background-color: rgb(0, 100, 100);
  border-radius: 5px;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #00c8c8;
    color: #fff;
  }
`;

export const FeedBack = styled.p`
  color: ${({color}) => color};
`;
