import { deleteUnFollow } from 'api/profile';
import { useMutation } from 'react-query';

const useUnFollow = ({ onSuccess }) => {
  return useMutation(deleteUnFollow, {
    onSuccess: () => {
      onSuccess();
    },
    onError: () => {
      //에러처리
    },
  });
};

export default useUnFollow;
