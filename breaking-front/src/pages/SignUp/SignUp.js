import { postSignUp } from 'api/signUp';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import MESSAGE from 'constants/message';
import { PATH } from 'constants/path';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userDefaultData = {
    profileImgURL: '',
    realName: '',
    nickname: '주기',
    phoneNumber: '01012345678',
    email: 'kangju2000@naver.com',
    statusMsg: '',
    role: 'PRESS',
  };

  const SignUpMutation = useMutation(postSignUp, {
    onSuccess: (res) => {
      const jwtToken = res.headers.authorization;
      localStorage.setItem('access_token', jwtToken);
      alert('환영합니다.');
      navigate(PATH.HOME);
    },
    onError: () => {
      //에러 페이지 이동
    },
  });

  useEffect(() => {
    //유저가 sns 로그인하지않고 회원가입 페이지로 들어왔을 때 처리
    if (!location.state) {
      alert(MESSAGE.SIGNUP.WRONG_ACCESS);
      navigate(PATH.LOGIN);
    }
  }, []);

  return (
    <>
      <SignUpForm
        username={location.state?.username}
        userDefaultData={userDefaultData}
        mutation={SignUpMutation}
      />
    </>
  );
};

export default SignUp;
