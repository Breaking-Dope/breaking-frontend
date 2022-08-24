import { getPostCommentData } from 'api/post';
import { useInfiniteQuery } from 'react-query';

const usePostComment = (postId) => {
  return useInfiniteQuery(['postComment', postId], getPostCommentData, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
};

export default usePostComment;
