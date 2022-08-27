import { getSearchUser } from 'api/search';
import { useInfiniteQuery } from 'react-query';

const useSearchUser = (content, size) =>
  useInfiniteQuery(['searchUser', content, size], getSearchUser, {
    staleTime: 0,
    cacheTime: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
export default useSearchUser;
