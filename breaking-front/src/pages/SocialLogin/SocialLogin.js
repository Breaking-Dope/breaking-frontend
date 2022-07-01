import { KAKAO_PATH } from 'constants/path';
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const SocialLogin = () => {
  const { Kakao } = window;
  if (!Kakao.isInitialized()) {
    Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
  }
  const KakaoLoginOnClick = () => {
    Kakao.Auth.authorize({
      redirectUri: KAKAO_PATH.REDIRECT_URL,
    });
  };
  const googleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // 백엔드에 토큰을 던져주는 API를 실행
  };
  const googleLoginError = () => {
    //에러 페이지 이동
  };

  return (
    <>
      <div onClick={KakaoLoginOnClick}>카카오 로그인</div>
      <GoogleLogin
        onSuccess={googleLoginSuccess}
        onError={googleLoginError}
      ></GoogleLogin>
    </>
  );
};

export default SocialLogin;
