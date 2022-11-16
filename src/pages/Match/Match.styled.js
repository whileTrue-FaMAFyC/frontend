import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  background-color: #0f1519;
`;

export const Results = styled.div`
  width: 50%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: #252c32;
  position: relative;
  overflow: hidden;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 5px;
  padding: 5px;
  margin: auto;
`;

export const Winner = styled.h2`
  font-weight: 600;
  font-size: 30px;
`;

export const Text = styled.p`
  font-size: 13px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const Aside = styled.div`
  height: 700px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  gap: 30px;
`;

export const MatchInfo = styled.div`
  font-size: 13px;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-content: space-evenly;
  background-color: #252c32;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 13px;
`;

export const PlayersInfo = styled.div`
  width: 100%;
  min-height: 340px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: #252c32;
`;

export const Button = styled.button`
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 16px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #00c8c8;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  width: ${(props) => (props.full ? "100%" : null)};
  min-width: 64px;
  border: 0;
  border-radius: 5px;
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
