import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};


  html{
    height:100%;
  }

  body{
    min-height:100%;
  }

  #root{
    width:100%;
    position:absolute;
    min-height:100%;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
