import { useMutation, useQueryClient } from 'react-query';
import { deletePostComment } from 'api/post';

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePostComment, {
    onSuccess: () => {
      alert('댓글을 삭제하였습니다.');
      queryClient.invalidateQueries('postComment');
      queryClient.invalidateQueries('post');
      queryClient.invalidateQueries('postReply');
    },
  });
};

export default useDeleteComment;
