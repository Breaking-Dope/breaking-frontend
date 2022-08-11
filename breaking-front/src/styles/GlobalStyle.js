import PretendardLight from 'styles/fonts/Pretendard-Light.woff';
import PretendardMedium from 'styles/fonts/Pretendard-Medium.woff';
import PretendardBold from 'styles/fonts/Pretendard-SemiBold.woff';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src: url(${PretendardLight}) format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url(${PretendardMedium}) format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: url(${PretendardBold}) format('woff');
  }

  body {
    overflow-y: scroll;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-feature-settings: "tnum";
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-feature-settings: "tnum";
  }
`;

export default GlobalStyle;
