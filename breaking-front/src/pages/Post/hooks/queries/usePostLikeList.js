import { getPostLikeList } from 'api/post';
import { useInfiniteQuery } from 'react-query';

const usePostLikeList = (postId, size) => {
  return useInfiniteQuery(['postLikeList', postId, size], getPostLikeList, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
};

export default usePostLikeList;
