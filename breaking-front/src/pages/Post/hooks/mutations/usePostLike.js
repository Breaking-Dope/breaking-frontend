import { postPostLike } from 'api/post';
import { useMutation } from 'react-query';

const usePostLike = () => {
  return useMutation(postPostLike);
};

export default usePostLike;
