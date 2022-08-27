import { getSearchHashtag } from 'api/search';
import { useInfiniteQuery } from 'react-query';

const useSearchHashtag = (content, size, sort, option) =>
  useInfiniteQuery(
    ['searchHashtag', { content, size, sort, option }],
    getSearchHashtag,
    {
      getNextPageParam: (lastPage) => {
        return lastPage.cursor;
      },
    }
  );
export default useSearchHashtag;
