import { getPostBoughtList } from 'api/post';
import { useInfiniteQuery } from 'react-query';

const usePostBoughtList = (postId) => {
  return useInfiniteQuery(['postBoughtList', postId], getPostBoughtList, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
};

export default usePostBoughtList;
