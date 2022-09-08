import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import ProfileSettingForm from 'components/ProfileSettingForm/ProfileSettingForm';
import MESSAGE from 'constants/message';
import useSignUp from 'pages/Authentication/SignUp/hooks/mutations/useSignUp';
import { UserInformationContext } from 'providers/UserInformationProvider';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogin } = useContext(UserInformationContext);

  const { mutate: SignUpMutate, isLoading: isSignUpLoading } = useSignUp();

  const handleSubmit = ({ userData, profileImg }) => {
    const formData = new FormData();
    userData.username = location.state.username;
    formData.append('profileImg', profileImg);
    formData.append('signUpRequest', JSON.stringify(userData));

    SignUpMutate(formData);
  };

  useEffect(() => {
    if (!location.state) {
      if (isLogin) navigate(PAGE_PATH.HOME);
      else {
        alert(MESSAGE.SIGNUP.WRONG_ACCESS);
        navigate(PAGE_PATH.LOGIN);
      }
    }
  }, []);

  return (
    <>
      {location.state && (
        <ProfileSettingForm
          onSubmit={handleSubmit}
          isProfileMutateLoading={isSignUpLoading}
        >
          회원가입
        </ProfileSettingForm>
      )}
    </>
  );
};

export default SignUp;
