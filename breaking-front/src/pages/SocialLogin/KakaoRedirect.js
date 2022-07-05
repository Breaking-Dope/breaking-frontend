import { postAccessCode } from 'api/login';
import { KAKAO_PATH, PATH } from 'constants/path';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const accessCode = new URL(window.location.href).searchParams.get('code');
  const getKakaoToken = useMutation(postAccessCode, {
    onSuccess: (res) => {
      console.log(res);
      const jwtToken = res.headers.authorization;
      if (jwtToken) {
        localStorage.setItem({
          key: 'access_token',
          value: res.headers.authorization,
        });
        navigate(PATH.HOME);
      } else {
        navigate(PATH.SIGNUP, { state: res.data });
      }
    },
    onError: () => {
      //에러 페이지 이동
    },
  });
  useEffect(() => {
    getKakaoToken.mutate({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_REST_API_KEY,
      redirect_uri: KAKAO_PATH.REDIRECT_URL,
      code: accessCode,
    });
  }, []);

  return <div />;
};

export default KakaoRedirect;
