import { GOOGLE_PATH, KAKAO_PATH } from 'constants/path';
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import SocialLoginButton from 'components/SocialLoginButton/SocialLoginButton';
import * as Style from 'pages/SocialLogin/SocialLogin.style';
import Line from 'components/Line/Line';
import MobileDownloadButton from 'components/MobileDownloadButton/MobileDownloadButton';

const SocialLogin = () => {
  const googleLoginClick = useGoogleLogin({
    flow: 'auth-code',
    redirect_uri: GOOGLE_PATH.REDIRECT_URL,
    ux_mode: 'redirect',
    onError: () => {},
  });

  const { Kakao } = window;

  if (!Kakao.isInitialized()) {
    Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
  }

  const kakaoLoginClick = () => {
    Kakao.Auth.authorize({
      redirectUri: KAKAO_PATH.REDIRECT_URL,
    });
  };

  return (
    <Style.Body>
      <Style.BreakingLogo />
      <Style.LoginContent>
        <Style.LoginTitle>
          Breaking을 통해
          <br />
          지금 바로 제보하세요
        </Style.LoginTitle>
        <SocialLoginButton social="kakao" onClick={kakaoLoginClick} />
        <SocialLoginButton social="google" onClick={googleLoginClick} />
        <Line />
        <div>
          <MobileDownloadButton social="appstore" />
          <MobileDownloadButton social="playstore" />
        </div>
      </Style.LoginContent>
    </Style.Body>
  );
};

export default SocialLogin;
