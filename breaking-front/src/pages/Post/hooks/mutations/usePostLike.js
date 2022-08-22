import { postPostLike } from 'api/post';
import { useMutation } from 'react-query';

const usePostLike = () => {
  useMutation(postPostLike);
};

export default usePostLike;
