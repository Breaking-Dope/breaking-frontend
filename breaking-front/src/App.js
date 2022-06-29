import { GlobalStyle } from 'styles/GlobalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { BrouserRoute, Routes, Route } from 'react-router-dom';
import SocialLogin from 'Pages/SocialLogin/SocialLogin';
import KakaoRedirect from 'Pages/SocialLogin/KakaoRedirect';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrouserRoute>
        <Routes>
          <Route path="/login" element={SocialLogin}>
            <Route path="/kakao" element={KakaoRedirect}></Route>
          </Route>
        </Routes>
      </BrouserRoute>
    </ThemeProvider>
  );
}

export default App;
