import styled from "styled-components";

export const StyledInputGroup = styled.div`
  margin-bottom: 20px;
  margin-left: 5px;
  text-align: left;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: #fff;
  }
`;

export const StyledButton = styled.button`
  width: ${(props) => (props.full ? "100%" : null)};
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #00c8c8;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  margin-left: 85.4%;
  &:hover {
    background-color: #009595;
  }
`;

export const StyledInput = styled.input`
  width: 40%;
  outline: none;
  padding: 8px 16px;
  border: 1px solid #00c8c8;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 4px;
  font-size: 1rem;
  -webkit-text-fill-color: #dedede;
  transition: box-shadow 0.2s;
  background-color: #252c32;
  &::placeholder {
    color: blue;
    -webkit-text-fill-color: #b8b8b8;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(0, 200, 200, 0.5);
    color: #0f1519;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
`;

export const Table = styled.table`
  border: 1px solid #00c8c8;
  border-radius: 4px;
  margin: 5px;
  width: 100%;
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
  color: #fff;
`;

export const Feedback = styled.tr`
  width: 100%;
  min-height: 100%;
  display: flex;
  color: #fff;
`;

export const Button = styled.button`
  width: ${(props) => (props.full ? "100%" : null)};
  margin: 5px;
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #00c8c8;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #009595;
  }
`;

export const StyledEntryCard = styled.div`
  width: 100%;
  max-width: 1000px;
  border-radius: 5px;
  padding: 50px;
  margin-bottom: 40px;
  background-color: #252c32;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
  h2 {
    font-weight: 500;
    margin-bottom: 50px;
  }
  span {
    display: block;
    margin-top: 40px;
    color: #888888;
    font-size: 14px;
  }
  a {
    margin-left: 4px;
    color: #fff;
  }
`;

export const PadreContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f1519;
`;
