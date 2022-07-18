import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postSignUp } from 'api/signUp';
import { PAGE_PATH } from 'constants/path';
import MESSAGE from 'constants/message';
import ProfileSettingForm from 'components/ProfileSettingForm/ProfileSettingForm';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userDefaultData = {
    profileImgURL: '',
    realName: '',
    nickname: '',
    phoneNumber: '',
    email: '',
    statusMsg: '',
    role: 'USER',
  };

  const { mutate } = useMutation(postSignUp, {
    onSuccess: (res) => {
      const jwtToken = res.headers.authorization;
      localStorage.setItem('access_token', jwtToken);
      alert('환영합니다.');
      navigate(PAGE_PATH.HOME);
    },
    onError: () => {
      //에러 페이지 이동
    },
  });

  useEffect(() => {
    //유저가 sns 로그인하지않고 회원가입 페이지로 들어왔을 때 처리
    if (!location.state) {
      alert(MESSAGE.SIGNUP.WRONG_ACCESS);
      navigate(PAGE_PATH.LOGIN);
    }
  }, []);

  return (
    <>
      <ProfileSettingForm
        username={location.state?.username}
        userDefaultData={userDefaultData}
        mutate={mutate}
      />
    </>
  );
};

export default SignUp;
