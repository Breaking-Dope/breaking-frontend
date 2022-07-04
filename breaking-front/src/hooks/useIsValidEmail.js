import { postEmailValidation } from 'api/signUp';
import { useMutation } from 'react-query';

const useIsValidEmail = (setIsValid) =>
  useMutation(postEmailValidation, {
    onSuccess: (res) => {
      console.log('사용가능한 이메일입니다.');
      setIsValid((prevState) => ({ ...prevState, email: true }));
    },
    onError: (error) => {
      const { message } = error.response.data;
      console.log(message);

      if (message) console.log('사용가능한 이메일이 아닙니다.');
      else console.log('이메일 형식이 아닙니다.');
      setIsValid((prevState) => ({ ...prevState, email: false }));
    },
  });

export default useIsValidEmail;
