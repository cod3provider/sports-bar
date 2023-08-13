import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Varela Round', sans-serif;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }


  a {
    text-decoration: none;
    color: currentColor;
    display: block;
  }

  button {
    cursor: pointer;
  }
`
