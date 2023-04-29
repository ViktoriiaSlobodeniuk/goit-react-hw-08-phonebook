import 'modern-normalize';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  background-color: rgb(255, 103, 164);
  margin-left: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p, ul {
  margin: 0;
  padding: 0;
}



`;

// import styled from 'styled-components';

// export const Container = styled.div`
//   width: 700px;

//   margin-top: 15px;
//   margin-left: auto;
//   margin-right: auto;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   color: white;
//   background-color: rgba(255, 154, 194, 0.5);

//   border-radius: 10px;
//   box-shadow: rgb(255, 103, 164) 0px 30px 60px -12px inset,
//     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
// `;
