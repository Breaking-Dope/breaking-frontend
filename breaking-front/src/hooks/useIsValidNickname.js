import { postNicknameValidation } from 'api/signUp';
import { useMutation } from 'react-query';

const useIsValidNickname = () => {
  const Mutation = useMutation(postNicknameValidation, {
    onSuccess: () => {
      console.log('사용가능한 닉네임입니다.');
    },
    onError: (error) => {
      console.log('사용 중인 닉네임입니다.');
    },
  });

  return Mutation;
};

export default useIsValidNickname;
