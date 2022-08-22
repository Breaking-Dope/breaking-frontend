import { getFollowers } from 'api/profile';
import { useInfiniteQuery } from 'react-query';

const useFollowerList = (userId) =>
  useInfiniteQuery(['followerList', userId], getFollowers, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
export default useFollowerList;
