import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 30px;
  font-family: "Colfax";
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0f1519;
`;

export const Thead = styled.thead`
  width: 100%;
  min-height: 60px;
  display: flex;
  background-color: #000;

  tr {
    &:hover {
      background-color: #000;
      cursor: auto;
    }
  }
`;

export const Column = styled.td`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Colfax";
`;

export const Tbody = styled.tbody`
  width: 100%;
  height: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border: 1px;
  padding: 0 5px;

  &::-webkit-scrollbar {
    appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #252c32;
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
  border-bottom: 1px solid #252c32;
  color: #fff;
  &:hover {
    background-color: #ff4655;
    background-color: #0a0e13;
  }
  cursor: pointer;
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

export const Refresh = styled.button`
  width: 300px;
  height: 25px;
`;
