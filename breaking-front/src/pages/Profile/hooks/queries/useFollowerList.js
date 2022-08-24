import { getFollowers } from 'api/profile';
import { useInfiniteQuery } from 'react-query';

const useFollowerList = (userId) =>
  useInfiniteQuery(['followerList', userId], getFollowers, {
    cacheTime: 0,
    staleTime: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
export default useFollowerList;
