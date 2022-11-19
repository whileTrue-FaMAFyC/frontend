import styled from "styled-components";

export const Container = styled.div`
  width: min(90%, 1000px);
  display: flex;
  overflow-x: auto;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

export const Thead = styled.thead`
  width: 100%;
  min-height: 60px;
  display: flex;
  background-color: #000;
`;

export const Column = styled.td`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tbody = styled.tbody`
  width: 100%;
  height: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 5px;
  background-color: #252c32;

  &::-webkit-scrollbar {
    appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    width: 10px;
    margin: 3px 0px;
  }

  &::-webkit-scrollbar:vertical {
    width: 8px;
  }
`;

export const Row = styled.tr`
  width: 100%;
  min-height: 60px;
  display: flex;
  border-bottom: 1px solid #0f1519;
  //background-color: #0f1519;
  color: #fff;
  &:hover {
    background-color: #ff4655;
    background-color: #0a0e13;
  }
`;

export const RowHead = styled.tr`
  width: 100%;
  min-height: 60px;
  display: flex;
  background-color: #0a0e13;
  color: #fff;
  background-color: #000;
`;

export const Feedback = styled.tr`
  width: 100%;
  min-height: 100%;
  display: flex;
  color: #fff;
`;

export const Ellipsis = styled.p`
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  padding: 6px 10px;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: #00c8c8;
  cursor: pointer;
  color: #111;
  &:hover {
    color: #fff;
  }

  /*   background: linear-gradient(
    90deg,
    rgba(39, 147, 198, 1) 25%,
    rgba(24, 172, 212, 1) 76%,
    rgba(15, 188, 222, 1) 100%
  ); */
`;
