import styled from "styled-components";

export const EntryPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
`;

export const StyledButton = styled.button`
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
`;

export const StyledEntryCard = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  padding: 50px;

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

export const StyledInputGroup = styled.div`
  margin-bottom: 24px;
  text-align: left;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: #fff;
    margin-right: 10px;
    width: 70px;
  };
  select {
    width: 150px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  padding: 8px 16px;
  border: 1px solid #00c8c8;
  border-radius: 4px;
  font-size: 1rem;
  caret-color: #ffffff;
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

export const StyledError = styled.p`
  font-size: 12px;
  padding: 3px;
  color: red;
`;

export const StyledSuccess = styled.p`
  font-size: 12px;
  padding: 3px;
  color: turquoise;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  background-color: #252c32;
  margin: 15px;
  flex-direction: column;
`;
