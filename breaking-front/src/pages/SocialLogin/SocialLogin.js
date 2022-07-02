import { KAKAO_PATH } from 'constants/path';
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Header from 'components/Header/Header';
import SocialLoginButton from 'components/SocialLoginButton/SocialLoginButton';

const SocialLogin = () => {
  const googleLoginClick = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    },
    onError: () => {},
  });
  const { Kakao } = window;
  if (!Kakao.isInitialized()) {
    Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
  }
  const KakaoLoginOnClick = () => {
    Kakao.Auth.authorize({
      redirectUri: KAKAO_PATH.REDIRECT_URL,
    });
  };

  return (
    <>
      <Header />
      <div>
        <SocialLoginButton social="kakao" onClick={KakaoLoginOnClick} />
        <SocialLoginButton social="google" onClick={googleLoginClick} />
      </div>
    </>
  );
};

export default SocialLogin;
