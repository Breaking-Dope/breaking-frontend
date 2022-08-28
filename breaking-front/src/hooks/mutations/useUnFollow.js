import { deleteUnFollow } from 'api/profile';
import { useMutation } from 'react-query';

const useUnFollow = (option) => {
  return useMutation(deleteUnFollow, option);
};

export default useUnFollow;
