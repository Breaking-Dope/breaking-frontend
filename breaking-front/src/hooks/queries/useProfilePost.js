import {
  getProfileBookmarked,
  getProfileBought,
  getProfileWrriten,
} from 'api/profile';
import { useQuery } from 'react-query';

const useProfilePost = (userId, isMyPage, target, option) => {
  const { data: writtenData, isLoading: isWrittenLoading } = useQuery(
    ['written', { userId, option }],
    getProfileWrriten
  );

  const { data: boughtData, isLoading: isBoughtLoading } = useQuery(
    ['bought', { userId, option }],
    getProfileBought,
    { enabled: isMyPage && target === 'bought' }
  );

  const { data: bookmarkedData, isLoading: isBookmarkedLoading } = useQuery(
    ['bookmarked', { userId, option }],
    getProfileBookmarked,
    { enabled: isMyPage && target === 'bookmarked' }
  );

  if (target === 'written') {
    return {
      data: writtenData,
      isLoading: isWrittenLoading,
    };
  } else if (target === 'bought') {
    return {
      data: boughtData,
      isLoading: isBoughtLoading,
    };
  } else if (target === 'bookmarked') {
    return {
      data: bookmarkedData,
      isLoading: isBookmarkedLoading,
    };
  } else {
    return {
      data: null,
      isLoading: null,
    };
  }
};

export default useProfilePost;
