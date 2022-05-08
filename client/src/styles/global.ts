import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width:720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;