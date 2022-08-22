import { useMutation } from 'react-query';
import { deletePostCommentLike } from 'api/post';

const useDeleteCommentLike = () => {
  useMutation(deletePostCommentLike);
};

export default useDeleteCommentLike;
