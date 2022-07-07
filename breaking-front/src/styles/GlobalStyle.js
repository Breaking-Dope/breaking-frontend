import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
