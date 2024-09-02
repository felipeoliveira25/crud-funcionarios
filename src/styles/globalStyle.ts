import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        font-family: 'Quicksand', sans-serif;
    }
`

export default GlobalStyle;