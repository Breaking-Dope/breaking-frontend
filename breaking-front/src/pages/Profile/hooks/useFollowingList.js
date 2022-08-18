import { getFollowings } from 'api/profile';
import { useInfiniteQuery } from 'react-query';

const useFollowingList = (userId) =>
  useInfiniteQuery(['followingList', userId], getFollowings, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
export default useFollowingList;
