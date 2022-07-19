import {
  getProfileBookmarked,
  getProfileBought,
  getProfileWrriten,
} from 'api/profile';
import { useQuery } from 'react-query';

const useProfilePost = (userId, isMyPage, target, option) => {
  let targetApi = null;
  let enabled = isMyPage;
  switch (target) {
    case 'written':
      targetApi = getProfileWrriten;
      enabled = true;
      break;
    case 'bought':
      targetApi = getProfileBought;
      break;
    case 'bookmarked':
      targetApi = getProfileBookmarked;
      break;
    default:
      targetApi = null;
  }

  const { data, isLoading } = useQuery(
    [target, { userId, option }],
    targetApi,
    { enabled: enabled }
  );

  return {
    data,
    isLoading,
  };
};

export default useProfilePost;
