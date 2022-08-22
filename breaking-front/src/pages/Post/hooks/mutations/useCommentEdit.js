import { useMutation, useQueryClient } from 'react-query';
import { putPostCommentEdit } from 'api/post';

const useCommentEdit = () => {
  const queryClient = useQueryClient();

  return useMutation(putPostCommentEdit, {
    onSuccess: () => {
      queryClient.invalidateQueries('postComment');
      queryClient.invalidateQueries('postReply');
    },
  });
};

export default useCommentEdit;
