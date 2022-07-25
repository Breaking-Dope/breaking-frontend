import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BreakingRoutes } from 'constants/BreakingRoutes';
import { BrowserRouter } from 'react-router-dom';
import UserInformationProvider from 'providers/UserInformationProvider';
import Layout from 'components/Layout/Layout';

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
          <UserInformationProvider>
            <BrowserRouter>
              <Layout>
                <BreakingRoutes />
              </Layout>
            </BrowserRouter>
          </UserInformationProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
