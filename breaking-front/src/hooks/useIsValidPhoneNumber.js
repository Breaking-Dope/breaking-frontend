import { postPhoneNumberValidation } from 'api/signUp';
import { useMutation } from 'react-query';

const useIsValidPhoneNumber = (setIsValid) =>
  useMutation(postPhoneNumberValidation, {
    onSuccess: () => {
      console.log('사용가능한 전화번호입니다.');
      setIsValid((prevState) => ({ ...prevState, phoneNumber: true }));
    },
    onError: (error) => {
      const { message } = error.response.data;
      console.log(message);

      if (message) console.log('이미 등록된 전화번호입니다.');
      else console.log('전화번호 형식이 아닙니다.');
      setIsValid((prevState) => ({ ...prevState, phoneNumber: false }));
    },
  });

export default useIsValidPhoneNumber;
