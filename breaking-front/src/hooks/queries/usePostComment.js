import { getPostCommentData } from 'api/post';
import { useQuery } from 'react-query';

const usePostComment = (postId, cursorId, size) => {
  return useQuery(
    ['postComment', { postId, cursorId, size }],
    getPostCommentData
  );
};

export default usePostComment;
