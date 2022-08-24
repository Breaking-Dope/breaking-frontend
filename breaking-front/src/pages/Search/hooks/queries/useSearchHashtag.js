import { getSearchHashtag } from 'api/search';
import { useInfiniteQuery } from 'react-query';

const useSearchHashtag = (content, size) =>
  useInfiniteQuery(['searchHashtag', content, size], getSearchHashtag, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
export default useSearchHashtag;
