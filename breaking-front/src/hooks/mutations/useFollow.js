import { postFollow } from 'api/profile';
import { useMutation } from 'react-query';

const useFollow = (option) => {
  return useMutation(postFollow, option);
};

export default useFollow;
