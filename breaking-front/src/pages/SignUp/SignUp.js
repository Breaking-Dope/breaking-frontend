import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import ProfileSettingForm from 'components/ProfileSettingForm/ProfileSettingForm';
import MESSAGE from 'constants/message';
import useSignUp from 'pages/SignUp/hooks/mutations/useSignUp';
import { UserInformationContext } from 'providers/UserInformationProvider';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogin } = useContext(UserInformationContext);

  const { mutate: SignUpMutate, isLoading: isSignUpLoading } = useSignUp();

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
          pageType="signUp"
          username={location.state.username}
          isProfileMutateLoading={isSignUpLoading}
          mutate={SignUpMutate}
        />
      )}
    </>
  );
};

export default SignUp;
