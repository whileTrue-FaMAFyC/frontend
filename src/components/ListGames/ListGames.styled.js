import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p``;

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Thead = styled.thead`
  width: 100%;
  height: 40px;
  display: flex;
`;

export const Column = styled.td`
  width: calc(100% / 2);
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Tbody = styled.tbody`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.tr`
  width: 100%;
  height: 40px;
  display: flex;
`;
