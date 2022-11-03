import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f1519;
`;

export const SuperWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #252c32;
  border-radius: 10px;
`;

export const Text = styled.p``;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MatchInfo = styled.div`
  margin-left: 50px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #252c32;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  gap: 30px;
`;

export const PlayersInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Buttons = styled.div`
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-self: center;
  gap: 20px;
  margin-bottom: 90px;
  background-color: #252c32;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #00c8c8;
`;
