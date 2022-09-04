import { useMutation } from 'react-query';
import { deletePostCommentLike } from 'api/post';

const useDeleteCommentLike = () => {
  return useMutation(deletePostCommentLike);
};

export default useDeleteCommentLike;
