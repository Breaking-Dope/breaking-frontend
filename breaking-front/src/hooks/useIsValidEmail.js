import { postEmailValidation } from 'api/signUp';
import { useMutation } from 'react-query';

const useIsValidEmail = () => {
  const Mutation = useMutation(postEmailValidation, {
    onSuccess: (res) => {
      console.log('사용가능한 이메일입니다.');
    },
    onError: (error) => {
      console.log('사용 중인 이메일입니다.');
    },
  });

  return Mutation;
};

export default useIsValidEmail;
