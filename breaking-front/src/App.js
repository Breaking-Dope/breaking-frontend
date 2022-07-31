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
import UserInformationProvider from 'providers/UserInformationProvider';
import ProfileEdit from 'pages/ProfileEdit/ProfileEdit';
import Post from 'pages/Post/Post';
import MainFeed from 'pages/MainFeed/MainFeed';
import PostWrite from 'pages/PostWrite/PostWrite';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_KEY}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <UserInformationProvider>
              <Layout>
                <Routes>
                  <Route path={PAGE_PATH.HOME} element={<MainFeed />} />
                  <Route path={PAGE_PATH.LOGIN} element={<SocialLogin />} />
                  <Route
                    path={PAGE_PATH.KAKAO_LOGIN}
                    element={<KakaoRedirect />}
                  />
                  <Route
                    path={PAGE_PATH.GOOGLE_LOGIN}
                    element={<GoogleRedirect />}
                  />
                  <Route path={PAGE_PATH.SIGNUP} element={<SignUp />} />
                  <Route
                    path={PAGE_PATH.PROFILE(':id')}
                    element={<Profile />}
                  />
                  <Route
                    path={PAGE_PATH.PROFILE_EDIT}
                    element={<ProfileEdit />}
                  />
                  <Route path={PAGE_PATH.POST(':id')} element={<Post />} />
                  <Route path={PAGE_PATH.POST_WRITE} element={<PostWrite />} />
                </Routes>
              </Layout>
            </UserInformationProvider>
          </BrowserRouter>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
