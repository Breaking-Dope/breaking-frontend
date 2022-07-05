import { postPhoneNumberValidation } from 'api/signUp';
import MESSAGE from 'constants/message';
import { useMutation } from 'react-query';

const useIsValidPhoneNumber = (setIsValidMessage) =>
  useMutation(postPhoneNumberValidation, {
    onSuccess: () => {
      console.log('사용가능한 전화번호입니다.');
      setIsValidMessage((prevState) => ({ ...prevState, phoneNumber: '' }));
    },
    onError: (error) => {
      console.log('사용 중인 전화번호입니다.');
      setIsValidMessage((prevState) => ({
        ...prevState,
        phoneNumber: MESSAGE.SIGNUP.USED_PHONENUMBER,
      }));
    },
  });

export default useIsValidPhoneNumber;
