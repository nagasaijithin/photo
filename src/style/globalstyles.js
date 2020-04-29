import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-weight: 400;
}
html{
    font-size: 62.5%;
    box-sizing: border-box;
    @media ${(props) => props.theme.mediaQuery.mediaLarg1}{
      font-size: 56.5%;
    }
    @media ${(props) => props.theme.mediaQuery.mediaMid2}{
      font-size: 48.5%;
    }
    
}
body {
 
  font-family: "Raleway", sans-serif;
}
`;
