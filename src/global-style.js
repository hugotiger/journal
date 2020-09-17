import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html,body {
        font-family: 'Poppins', 'Helvetica', 'Arial', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-smoothing: antialiased;
        overflow-x: hidden;
    }
    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        line-height: normal;
    }
`;
