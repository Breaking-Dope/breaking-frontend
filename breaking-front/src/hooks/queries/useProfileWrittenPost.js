import { getProfileWritten } from 'api/profile';
import { useInfiniteQuery } from 'react-query';

const useProfileWrittenPost = (userId, option) => {
  return useInfiniteQuery(['written', { userId, option }], getProfileWritten, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
};

export default useProfileWrittenPost;
