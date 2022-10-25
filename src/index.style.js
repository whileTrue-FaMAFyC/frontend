import {createGlobalStyle} from "styled-components";

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
        color: #fff;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;
    }
`;
