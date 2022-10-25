import styled from "styled-components";

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /*   background-color: #0f1519; */
  padding: 30px;
  gap: 30px;
`;

export const Title = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 25px;
`;
export const Button = styled.button`
  width: 100px;
  height: 20px;
`;

export const Msg = styled.p``;

export const FeedBack = styled.p`
  color: ${({color}) => color};
`;
