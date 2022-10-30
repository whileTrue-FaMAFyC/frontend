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
  width: 100%;
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

  background: rgb(39, 147, 198);
  background: linear-gradient(
    90deg,
    rgba(39, 147, 198, 1) 25%,
    rgba(24, 172, 212, 1) 76%,
    rgba(15, 188, 222, 1) 100%
  );
`;

export const FeedBack = styled.p`
  color: ${({color}) => color};
`;
