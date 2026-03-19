import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
scrollbar-width: 2px;
}

body{
font-family: Arial, sans-serif;
background:${({ theme }) => theme.colors.background};
color:${({ theme }) => theme.colors.text};
transition: all 0.3s ease;
}

`;

export default GlobalStyles;
