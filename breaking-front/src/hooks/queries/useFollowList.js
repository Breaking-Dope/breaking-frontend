import { getFollowers, getFollowings } from 'api/profile';
import { useQuery } from 'react-query';

const useFollowList = (target, userId) => {
  const { data: followers, isLoading: follwersLoading } = useQuery(
    [target, userId],
    getFollowings,
    {
      enabled: target === '팔로잉',
    }
  );

  const { data: followings, isLoading: followingsLoading } = useQuery(
    [target, userId],
    getFollowers,
    {
      enabled: target === '팔로워',
    }
  );

  if (target === '팔로잉') {
    return { data: followings, isLoading: followingsLoading };
  } else if (target === '팔로워') {
    return { data: followers, isLoading: follwersLoading };
  } else {
    return { data: null, isLoading: null };
  }
};

export default useFollowList;
