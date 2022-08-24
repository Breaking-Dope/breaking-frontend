import { getSearchUser } from 'api/search';
import { useInfiniteQuery } from 'react-query';

const useSearchUser = (content, size) =>
  useInfiniteQuery(['searchUser', content, size], getSearchUser, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
export default useSearchUser;
