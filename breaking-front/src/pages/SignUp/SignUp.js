import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import ProfileSettingForm from 'components/ProfileSettingForm/ProfileSettingForm';
import MESSAGE from 'constants/message';
import useSignUp from 'pages/SignUp/hooks/mutations/useSignUp';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: SignUpMutate, isLoading: isSignUpLoading } = useSignUp();

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
        pageType="signUp"
        username={location.state?.username}
        isProfileMutateLoading={isSignUpLoading}
        mutate={SignUpMutate}
      />
    </>
  );
};

export default SignUp;
