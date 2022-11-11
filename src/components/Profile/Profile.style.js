import styled, {createGlobalStyle} from "styled-components";

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
  margin: 4px;
  &:hover {
    background-color: #009595;
  }
`;

export const StyledEntryCard = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  padding: 50px;
  margin-bottom: 40px;
  background-color: #252c32;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
  display: grid;
  /* flex-direction: column; */

  align-items: center;
  /* grid-template-columns: 1fr 2fr; */
  grid-gap: 20px;

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
  /* margin-bottom: 15px; */
  margin: 10px;
  text-align: left;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: #fff;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  padding: 8px 16px;
  border: 1px solid #00c8c8;
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

export const StyledError = styled.p`
  font-size: 12px;
  padding: 3px;
  color: #be0000;
`;

export const StyledSuccess = styled.p`
  font-size: 12px;
  padding: 3px;
  color: green;
`;

export const EntryPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0f1519;
`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        text-decoration: none;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #333;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;
    }
`;
