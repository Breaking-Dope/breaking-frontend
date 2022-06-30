import { postAccessCode } from 'api/login';
import { KAKAO_PATH } from 'constants/path';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';

const KakaoRedirect = () => {
  const accessCode = new URL(window.location.href).searchParams.get('code');
  const getKakaoToken = useMutation(postAccessCode, {
    onSuccess: (res) => {
      console.log(res.data);
      // 백엔드에 토큰을 던져주는 API를 실행
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
