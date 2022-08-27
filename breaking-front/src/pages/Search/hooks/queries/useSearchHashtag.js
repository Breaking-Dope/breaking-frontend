import { getSearchHashtag } from 'api/search';
import { useInfiniteQuery } from 'react-query';

const useSearchHashtag = (content, size, sort, option) =>
  useInfiniteQuery(
    ['searchHashtag', { content, size, sort, option }],
    getSearchHashtag,
    {
      staleTime: 0,
      cacheTime: 0,
      getNextPageParam: (lastPage) => {
        return lastPage.cursor;
      },
    }
  );
export default useSearchHashtag;
