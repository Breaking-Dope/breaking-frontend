import { getFollowings } from 'api/profile';
import { useQuery } from 'react-query';

const useFollowingList = (userId) =>
  useQuery(['followingList', userId], getFollowings);
export default useFollowingList;
