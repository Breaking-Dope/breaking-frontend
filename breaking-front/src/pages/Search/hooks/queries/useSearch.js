import { getSearch } from 'api/search';
import { useInfiniteQuery } from 'react-query';

const useSearch = (content, size) =>
  useInfiniteQuery(['search', content, size], getSearch, {
    cacheTime: 0,
    staleTime: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
export default useSearch;
