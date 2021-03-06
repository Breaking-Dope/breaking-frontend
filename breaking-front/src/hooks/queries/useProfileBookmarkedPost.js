import { getProfileBookmarked } from 'api/profile';
import { useInfiniteQuery } from 'react-query';

const useProfileBookmarkedPost = (userId, isMyPage, option) => {
  return useInfiniteQuery(
    ['bookmarked', { userId, option }],
    getProfileBookmarked,
    {
      getNextPageParam: (lastPage) => {
        return lastPage.cursor;
      },
      enabled: isMyPage,
    }
  );
};

export default useProfileBookmarkedPost;
