import { KAKAO_PATH, PATH } from 'constants/path';
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import SocialLoginButton from 'components/SocialLoginButton/SocialLoginButton';
import * as Style from 'pages/SocialLogin/SocialLogin.style';
import Line from 'components/Line/Line';
import MobileDownloadButton from 'components/MobileDownloadButton/MobileDownloadButton';
import { useMutation } from 'react-query';
import { postSignInWithGoogle } from 'api/login';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const navigate = useNavigate();
  const SignInWithGoogle = useMutation(postSignInWithGoogle, {
    onSuccess: (res) => {
      console.log(res);
      const jwtToken = res.headers.authorization;
      if (jwtToken) {
        localStorage.setItem('access_token', res.headers.authorization);
        navigate(PATH.HOME);
        //로그인 완료처리
      } else {
        navigate(PATH.SIGNUP, { state: res.data });
      }
    },
    onError: () => {},
  });
  const googleLoginClick = useGoogleLogin({
    onSuccess: (res) => {
      SignInWithGoogle.mutate(res.access_token);
    },
    onError: () => {},
  });
  const { Kakao } = window;
  if (!Kakao.isInitialized()) {
    Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
  }
  const kakaoLoginClick = () => {
    // Kakao.Auth.login();
    // 관리자 권한이 등록이 되면 팝업 방식으로 전환
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
