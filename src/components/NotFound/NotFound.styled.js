import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: #fff;
  color: #000;
  position: relative;
  text-align: center;
  background-color: #0f1519;
`;
export const Title = styled.h2`
  color: #fff;
  font-size: 50px;
`;

export const Back = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background-color: #40c8c8;
  &:hover {
    background-color: #009595;
  }
`;
