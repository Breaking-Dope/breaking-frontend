import { getProfileBought } from 'api/profile';
import { useInfiniteQuery } from 'react-query';

const useProfileBoughtPost = (userId, isMyPage, option) => {
  return useInfiniteQuery(['bought', { userId, option }], getProfileBought, {
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
    enabled: isMyPage,
  });
};

export default useProfileBoughtPost;
