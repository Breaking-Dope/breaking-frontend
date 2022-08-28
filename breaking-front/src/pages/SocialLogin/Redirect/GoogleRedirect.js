import { postAccessCode, postSignInWithGoogle } from 'api/login';
import { GOOGLE_PATH, PAGE_PATH } from 'constants/path';
import useJWTValidate from 'hooks/queries/useJWTValidate';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const GoogleRedirect = () => {
  const navigate = useNavigate();
  const { refetch: JWTValidateRefetch } = useJWTValidate();
  const accessCode = new URL(window.location.href).searchParams.get('code');

  const SignInGoogle = useMutation(postSignInWithGoogle, {
    onSuccess: (res) => {
      const jwtToken = res.headers.authorization;
      if (jwtToken) {
        localStorage.setItem('access_token', res.headers.authorization);
        JWTValidateRefetch();
        navigate(PAGE_PATH.HOME);
      } else {
        navigate(PAGE_PATH.SIGNUP, { state: res.data });
      }
    },
  });

  const GetGoogleToken = useMutation(postAccessCode, {
    onSuccess: (res) => {
      SignInGoogle.mutate({
        accessToken: res.data.access_token,
        idToken: res.data.id_token,
      });
    },
    onError: () => {
      //에러 페이지 이동
    },
  });

  useEffect(() => {
    GetGoogleToken.mutate({
      url: GOOGLE_PATH.OAUTH_TOKEN,
      data: {
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_KEY,
        client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
        redirect_uri: GOOGLE_PATH.REDIRECT_URL,
        code: accessCode,
      },
    });
  }, []);

  return <></>;
};
export default GoogleRedirect;
