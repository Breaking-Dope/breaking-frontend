import { KAKAO_PATH } from 'constants/path';
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Header from 'components/Header/Header';
import SocialLoginButton from 'components/SocialLoginButton/SocialLoginButton';
import * as Style from 'pages/SocialLogin/SocialLogin.style';
import Line from 'components/Line/Line';
import MobileDownloadButton from 'components/MobileDownloadButton/MobileDownloadButton';

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
      <Style.Body>
        <Style.LeftContent>
          <Style.BreakingLogo />
        </Style.LeftContent>
        <Style.RightContent>
          <Style.LoginTitle>
            Breaking을 통해
            <br />
            지금 바로 제보하세요
          </Style.LoginTitle>
          <div>
            <SocialLoginButton social="kakao" onClick={KakaoLoginOnClick} />
            <SocialLoginButton social="google" onClick={googleLoginClick} />
          </div>
          <Line />
          <div>
            <MobileDownloadButton social="appstore" />
            <MobileDownloadButton social="playstore" />
          </div>
        </Style.RightContent>
      </Style.Body>
    </>
  );
};

export default SocialLogin;
