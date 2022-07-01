import { KAKAO_PATH } from 'constants/path';
import React from 'react';

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
  return (
    <>
      <div onClick={KakaoLoginOnClick}>카카오 로그인</div>
      <div>구글 로그인</div>
    </>
  );
};

export default SocialLogin;
