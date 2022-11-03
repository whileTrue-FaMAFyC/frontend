// import styled from "styled-components";

// export const Container = styled.div`
//   width: 100%;
//   height: calc(100vh - 70px);
//   background-color: #0a0e13;
// `;

// export const Button = styled.button`
//   width: 100px;
//   height: 20px;
// `;

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

export const ResultsWrapper = styled.div`
  align-items: center;
  display: flex;
  align-self: center;
  margin: 20px;
  border: 1px solid #00c8c8;
  border-radius: 4px;
  padding: 5px;
`;

export const StyledButton = styled.button`
  width: ${(props) => (props.full ? "100%" : null)};
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: ${(props) =>
    props.enabledColor ? "gray" : `#00c8c8`}; //#00c8c8;
  //color: #252c32;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => (props.enabledColor ? "gray" : `#009595;`)};
  }
`;

export const StyledError = styled.p`
  font-size: 12px;
  padding: 3px;
  color: #be0000;
`;

export const StyledSelect = styled.select`
  left: 20px;
  margin: 10px;
  background-color: ${(props) =>
    props.enabledColor ? "gray" : `#00c8c8`}; //#00c8c8;
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  padding: 8px 16px;
  border: 1px solid #00c8c8;
  border-radius: 4px;
  font-size: 1rem;
  max-height: 34px;
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
