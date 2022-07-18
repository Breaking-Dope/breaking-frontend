import { getFollowers, getFollowings } from 'api/profile';
import { useQuery } from 'react-query';

const useFollow = (target, userId) => {
  let targetApi = null;
  if (target === '팔로잉') {
    targetApi = getFollowings;
  } else if (target === '팔로워') {
    targetApi = getFollowers;
  }
  const { data, isLoading } = useQuery([target, userId], targetApi, {});
  return { data, isLoading };
};

export default useFollow;