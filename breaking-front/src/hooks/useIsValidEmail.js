import { postEmailValidation } from 'api/signUp';
import MESSAGE from 'constants/message';
import { useMutation } from 'react-query';

const useIsValidEmail = (setIsValidMessage) =>
  useMutation(postEmailValidation, {
    onSuccess: (res) => {
      console.log('사용가능한 이메일입니다.');
      setIsValidMessage((prevState) => ({ ...prevState, email: '' }));
    },
    onError: (error) => {
      console.log('사용 중인 이메일입니다.');
      setIsValidMessage((prevState) => ({
        ...prevState,
        email: MESSAGE.SIGNUP.USED_EMAIL,
      }));
    },
  });

export default useIsValidEmail;
