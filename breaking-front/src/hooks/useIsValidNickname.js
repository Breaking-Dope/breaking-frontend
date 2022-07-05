import { postNicknameValidation } from 'api/signUp';
import MESSAGE from 'constants/message';
import { useMutation } from 'react-query';

const useIsValidNickname = (setIsValidMessage) =>
  useMutation(postNicknameValidation, {
    onSuccess: () => {
      console.log('사용가능한 닉네임입니다.');
      setIsValidMessage((prevState) => ({ ...prevState, nickname: '' }));
    },
    onError: (error) => {
      console.log('사용 중인 전화번호입니다.');
      setIsValidMessage((prevState) => ({
        ...prevState,
        nickname: MESSAGE.SIGNUP.USED_NICKNAME,
      }));
    },
  });

export default useIsValidNickname;
