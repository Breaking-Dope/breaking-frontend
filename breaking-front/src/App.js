import { GlobalStyle } from 'styles/GlobalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialLogin from 'Pages/SocialLogin/SocialLogin';
import KakaoRedirect from 'Pages/SocialLogin/KakaoRedirect';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<SocialLogin />}></Route>
          <Route path="login/kakao" element={<KakaoRedirect />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
