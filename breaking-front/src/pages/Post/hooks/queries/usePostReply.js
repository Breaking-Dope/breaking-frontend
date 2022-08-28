import { getPostReplyData } from 'api/post';
import { useInfiniteQuery } from 'react-query';

const usePostReply = (commentId) => {
  return useInfiniteQuery(['postReply', commentId], getPostReplyData, {
    enabled: !!commentId,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
};

export default usePostReply;
