import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from 'styled-components';
import UserInformationProvider from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import Layout from 'components/Layout/Layout';
import SignIn from 'pages/Authentication/SignIn/SignIn';
import KakaoRedirect from 'pages/Authentication/SignIn/Redirect/KakaoRedirect';
import GoogleRedirect from 'pages/Authentication/SignIn/Redirect/GoogleRedirect';
import SignUp from 'pages/Authentication/SignUp/SignUp';
import Profile from 'pages/Profile/Profile/Profile';
import ProfileEdit from 'pages/Profile/ProfileEdit/ProfileEdit';
import MainFeed from 'pages/MainFeed/MainFeed';
import Post from 'pages/Post/Post/Post';
import PostWrite from 'pages/Post/PostWrite/PostWrite';
import Financial from 'pages/Financial/Financial';
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import PostEdit from 'pages/Post/PostEdit/PostEdit';
import SearchUnified from 'pages/Search/SearchUnified/SearchUnified';
import SearchPost from 'pages/Search/SearchPost/SearchPost';
import SearchHashtag from 'pages/Search/SearchHashtag/SearchHashtag';
import SearchUser from 'pages/Search/SearchUser/SearchUser';
import NotFound from 'pages/NotFound/NotFound';
import PrivateRoute from 'PrivateRoute';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, retry: 2 },
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
                  <Route
                    path={PAGE_PATH.LOGIN}
                    element={
                      <PrivateRoute redirectPath={PAGE_PATH.HOME} restricted>
                        <SignIn />
                      </PrivateRoute>
                    }
                  />
                  <Route path={PAGE_PATH.SIGNUP} element={<SignUp />} />
                  <Route
                    path={PAGE_PATH.KAKAO_LOGIN}
                    element={<KakaoRedirect />}
                  />
                  <Route
                    path={PAGE_PATH.GOOGLE_LOGIN}
                    element={<GoogleRedirect />}
                  />
                  <Route path={PAGE_PATH.SEARCH} element={<SearchUnified />} />
                  <Route
                    path={PAGE_PATH.SEARCH_POST}
                    element={<SearchPost />}
                  />
                  <Route
                    path={PAGE_PATH.SEARCH_HASHTAG}
                    element={<SearchHashtag />}
                  />
                  <Route
                    path={PAGE_PATH.SEARCH_USER}
                    element={<SearchUser />}
                  />
                  <Route path={PAGE_PATH.POST(':id')} element={<Post />} />
                  <Route
                    path={PAGE_PATH.PROFILE(':id')}
                    element={<Profile />}
                  />

                  <Route element={<PrivateRoute />}>
                    <Route
                      path={PAGE_PATH.PROFILE_EDIT}
                      element={<ProfileEdit />}
                    />
                    <Route
                      path={PAGE_PATH.POST_WRITE}
                      element={<PostWrite />}
                    />
                    <Route
                      path={PAGE_PATH.POST_EDIT(':id')}
                      element={<PostEdit />}
                    />
                    <Route path={PAGE_PATH.FINANCIAL} element={<Financial />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
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
