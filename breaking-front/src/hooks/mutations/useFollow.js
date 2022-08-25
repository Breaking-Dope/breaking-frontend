import { postFollow } from 'api/profile';
import { useMutation } from 'react-query';

const useFollow = ({ onSuccess }) => {
  return useMutation(postFollow, {
    onSuccess: () => {
      onSuccess();
    },
    onError: () => {
      //에러처리
    },
  });
};

export default useFollow;
