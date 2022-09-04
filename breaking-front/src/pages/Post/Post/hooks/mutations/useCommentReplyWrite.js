import { useMutation, useQueryClient } from 'react-query';
import { postPostReplyWrite } from 'api/post';

const useCommentReplyWrite = () => {
  const queryClient = useQueryClient();

  return useMutation(postPostReplyWrite, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
      queryClient.invalidateQueries('postComment');
      queryClient.invalidateQueries('postReply');
    },
  });
};

export default useCommentReplyWrite;
