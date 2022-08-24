import { postPostCommentLike } from 'api/post';
import { useMutation } from 'react-query';

const useCommentLike = () => {
  return useMutation(postPostCommentLike);
};

export default useCommentLike;
