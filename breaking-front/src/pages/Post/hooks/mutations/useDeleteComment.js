import { useMutation } from 'react-query';
import { deletePostComment } from 'api/post';

const useDeleteComment = () => {
  useMutation(deletePostComment, {
    onSuccess: () => {
      alert('댓글을 삭제하였습니다.');
    },
  });
};

export default useDeleteComment;
