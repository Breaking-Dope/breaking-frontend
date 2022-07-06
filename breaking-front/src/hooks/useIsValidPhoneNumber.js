import { postPhoneNumberValidation } from 'api/signUp';
import { useMutation } from 'react-query';

const useIsValidPhoneNumber = () => {
  const Mutation = useMutation(postPhoneNumberValidation, {
    onSuccess: () => {
      console.log('사용가능한 전화번호입니다.');
    },
    onError: (error) => {
      console.log('사용 중인 전화번호입니다.');
    },
  });

  return Mutation;
};

export default useIsValidPhoneNumber;
