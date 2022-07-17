import {
  getProfileBookmarked,
  getProfileBought,
  getProfileWrriten,
} from 'api/profile';

const { useQuery } = require('react-query');

const useProfilePost = (userId, isMyPage) => {
  const { data: writtenData, isLoading: writtenLoading } = useQuery(
    ['wrriten', { userId, option: 'all' }],
    getProfileWrriten
  );
  const { data: boughtData, isLoading: boughtLoading } = useQuery(
    ['bought', { userId, option: 'all' }],
    getProfileBought,
    {
      enabled: isMyPage,
    }
  );

  const { data: bookmarkedData, isLoading: bookmarkedLoading } = useQuery(
    ['bookmarked', { userId, option: 'all' }],
    getProfileBookmarked,
    {
      enabled: isMyPage,
    }
  );

  return {
    writtenData,
    writtenLoading,
    boughtData,
    boughtLoading,
    bookmarkedData,
    bookmarkedLoading,
  };
};

export default useProfilePost;
