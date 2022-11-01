import styled from "styled-components";

export const WelcomeImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  h2 {
    color: #e6c568;
  }
`;

export const StyledEntryCard = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-bottom: 40px;
  background-color: #252c32;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
  display: block;
  h2 {
    font-weight: 500;
    font-size: 3em;
    margin-bottom: 50px;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 5px;

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
`;
