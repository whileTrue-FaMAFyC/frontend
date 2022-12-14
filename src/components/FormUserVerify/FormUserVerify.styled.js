import styled from "styled-components";

export const Form = styled.form`
  width: 350px;
  padding: 50px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #252c32;
  /*   background-color: #0f1519; */
  /*   box-shadow: 0px 0px 7px 1px rgb(39, 147, 198); */
  gap: 10px;
`;

export const Title = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  font-weight: 500;
  margin-top: 10px;
  outline: none;
  border: none;
  /*   background-color: rgb(0, 100, 100); */
  border-radius: 5px;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #009595;
  }

  /*   background: rgb(39, 147, 198);
  background: linear-gradient(
    90deg,
    rgba(39, 147, 198, 1) 25%,
    rgba(24, 172, 212, 1) 76%,
    rgba(15, 188, 222, 1) 100%
  ); */
  background-color: #00c8c8;
`;

export const FeedBack = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({color}) => color};
  margin-bottom: 10px;
`;
