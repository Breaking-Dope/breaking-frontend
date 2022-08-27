import { getSearch } from 'api/search';
import { useInfiniteQuery } from 'react-query';

const useSearch = (content, size, sort, option) =>
  useInfiniteQuery(['search', { content, size, sort, option }], getSearch, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
export default useSearch;
