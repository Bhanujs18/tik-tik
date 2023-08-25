
import { createGlobalStyle } from "styled-components";
export const GlobalSTyle = createGlobalStyle`



*{  margin:0;
    padding:0;
    box-sizing: border-box;
    background: "fff";
    font-family: 'Kanit', sans-serif;
    color: ${({theme})=>theme.colors.text};
}

.loading{
    width: 100vh;
    height: 100vh;
}
.mybutton{
  padding: 0.7rem 1.5rem;
  border: none;
  background-color: black;
  color: white;
  margin: 1rem;
}


`