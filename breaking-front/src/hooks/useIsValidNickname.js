import { postNicknameValidation } from 'api/signUp';
import { useMutation } from 'react-query';

const useIsValidNickname = (setIsValid) =>
  useMutation(postNicknameValidation, {
    onSuccess: () => {
      console.log('사용가능한 닉네임입니다.');
      setIsValid((prevState) => ({ ...prevState, nickname: true }));
    },
    onError: (error) => {
      console.log('이미 사용하고 있는 닉네임입니다.');
      setIsValid((prevState) => ({ ...prevState, nickname: false }));
    },
  });

export default useIsValidNickname;
