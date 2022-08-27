import { getSearchHashtag } from 'api/search';
import { useInfiniteQuery } from 'react-query';

const useSearchHashtag = (content, size) =>
  useInfiniteQuery(['searchHashtag', content, size], getSearchHashtag, {
    cacheTime: 0,
    staleTime: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
export default useSearchHashtag;
