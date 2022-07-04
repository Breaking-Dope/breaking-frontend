import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};


  html, body, #root{
  height: 100%;
  min-height:100%;
}

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
