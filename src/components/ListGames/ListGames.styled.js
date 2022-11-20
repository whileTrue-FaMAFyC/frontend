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
`;

export const Table = styled.table`
  width: 100%;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  background-color: #252c32;
  overflow-x: auto;
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
  width: ${(props) => (props.full ? "100%" : null)};
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #00c8c8;
  //color: #252c32;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #009595;
  }

  /*   background: linear-gradient(
    90deg,
    rgba(39, 147, 198, 1) 25%,
    rgba(24, 172, 212, 1) 76%,
    rgba(15, 188, 222, 1) 100%
  ); */
`;
