import { postAccessCode, postSignInWithKakao } from 'api/login';
import { KAKAO_PATH, PAGE_PATH } from 'constants/path';
import useJWTValidate from 'hooks/queries/useJWTValidate';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const { refetch: JWTValidateRefetch } = useJWTValidate();
  const accessCode = new URL(window.location.href).searchParams.get('code');

  const SignInKakao = useMutation(postSignInWithKakao, {
    onSuccess: (res) => {
      console.log(res);
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

  const GetKakaoToken = useMutation(postAccessCode, {
    onSuccess: (res) => {
      console.log(res);
      SignInKakao.mutate({
        accessToken: res.data.access_token,
      });
    },
    onError: () => {
      //에러 페이지 이동
    },
  });

  useEffect(() => {
    GetKakaoToken.mutate({
      url: KAKAO_PATH.OAUTH_TOKEN,
      data: {
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_REST_API_KEY,
        redirect_uri: KAKAO_PATH.REDIRECT_URL,
        code: accessCode,
        client_secret: process.env.REACT_APP_KAKAO_CLIENT_SECRET,
      },
    });
  }, []);

  return <></>;
};

export default KakaoRedirect;
