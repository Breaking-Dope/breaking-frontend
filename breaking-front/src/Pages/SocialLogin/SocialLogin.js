import React from 'react';

const SocialLogin = () => {
  const KAKAO_REDIRECT_URL = 'http://localhost:3000/login/kakao';
  const { Kakao } = window;
  const KakaoLoginOnClick = () => {
    Kakao.Auth.authorize({
      redirectUri: KAKAO_REDIRECT_URL,
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
