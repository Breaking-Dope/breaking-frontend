import {
  getProfileBookmarked,
  getProfileBought,
  getProfileWrriten,
} from 'api/profile';

const { useQuery } = require('react-query');

const useProfilePost = (
  userId,
  isMyPage,
  writtenOption,
  boughtOption,
  bookmarkedOption
) => {
  const { data: writtenData, isLoading: writtenLoading } = useQuery(
    ['wrriten', { userId, option: writtenOption }],
    getProfileWrriten
  );
  const { data: boughtData, isLoading: boughtLoading } = useQuery(
    ['bought', { userId, option: boughtOption }],
    getProfileBought,
    {
      enabled: isMyPage,
    }
  );

  const { data: bookmarkedData, isLoading: bookmarkedLoading } = useQuery(
    ['bookmarked', { userId, option: bookmarkedOption }],
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
