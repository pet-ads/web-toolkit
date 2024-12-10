import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --background-color: #F4F3EF;
    --primary-text-color: #FFFFFF;
    --secundary-text-color: #000000;
    --primary-color: #1A800A;
  }

 * {
    margin: 0;
    padding: 0;
    
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--background-color);
    color: var(--primary-text-color);

    font-family: sans-serif;

    height: 100vh;
  }


`;

export default GlobalStyles;
