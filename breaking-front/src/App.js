import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialLogin from 'pages/SocialLogin/SocialLogin';
import KakaoRedirect from 'pages/SocialLogin/Redirect/KakaoRedirect';
import SignUp from 'pages/SignUp/SignUp';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PAGE_PATH } from 'constants/path';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Layout from 'components/Layout/Layout';
import GoogleRedirect from 'pages/SocialLogin/Redirect/GoogleRedirect';
import Profile from 'pages/Profile/Profile';

function App() {
  const queryClient = new QueryClient();
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_KEY}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path={PAGE_PATH.LOGIN} element={<SocialLogin />} />
                <Route
                  path={PAGE_PATH.KAKAO_LOGIN}
                  element={<KakaoRedirect />}
                ></Route>
                <Route
                  path={PAGE_PATH.GOOGLE_LOGIN}
                  element={<GoogleRedirect />}
                ></Route>
                <Route path={PAGE_PATH.SIGNUP} element={<SignUp />} />
                <Route path={PAGE_PATH.PROFILE} element={<Profile />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
