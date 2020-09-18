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
        font-weight: 500;
    }

    p {
        margin: 0;
        margin-top: 2rem;
        margin-bottom: 1rem;
        line-height: 2;
        color: rgba(0,0,0,0.5);
        color: #5f7a8b;
    }
`;
