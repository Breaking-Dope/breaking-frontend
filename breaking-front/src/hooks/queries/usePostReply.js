import { getPostReplyData } from 'api/post';
import { useQuery } from 'react-query';

const usePostReply = (commentId, cursorId, size) => {
  return useQuery(
    ['postReply', { commentId, cursorId, size }],
    getPostReplyData,
    {
      enabled: false,
    }
  );
};

export default usePostReply;
