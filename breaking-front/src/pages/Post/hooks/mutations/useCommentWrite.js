import { postPostCommentWrite } from 'api/post';
import { useMutation, useQueryClient } from 'react-query';

const useCommentWrite = () => {
  const queryClient = useQueryClient();

  return useMutation(postPostCommentWrite, {
    onSuccess: () => {
      queryClient.invalidateQueries('postComment');
    },
  });
};

export default useCommentWrite;
