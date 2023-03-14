import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,500&display=swap');
    *{
        box-sizing: border-box;
        font-family: 'poppins', sans-serif;
        margin: 0;
        padding: 0;
    }

    :root {
        --cor-primary: #FFCB46;
        --cor-secondary: #313131;
        --cor-light: #efefef;
        --cor-evidence: #ffc504;
    }

    body{
        background-color: #000;
        color: #fff;
    }
`

export default Global;