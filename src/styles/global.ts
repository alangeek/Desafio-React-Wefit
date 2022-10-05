import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 0.875rem
  }

  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.primaryText};
  }

  button {
    cursor: pointer;
  }
`
