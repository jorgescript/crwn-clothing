import { createGlobalStyle } from "styled-components";

export const GloblaStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: "Open Sans Condensed", sans-serif;
  padding: 20px 60px;
  @media screen and (max-width:800px){
    padding: 20px 10px;
  }
}

a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  text-decoration: underline;
}
`;
