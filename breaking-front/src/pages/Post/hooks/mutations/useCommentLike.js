import { postPostCommentLike } from 'api/post';
import { useMutation } from 'react-query';

const useCommentLike = () => {
  useMutation(postPostCommentLike);
};

export default useCommentLike;
