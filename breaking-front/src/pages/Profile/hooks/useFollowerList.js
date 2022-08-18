import { getFollowers } from 'api/profile';
import { useQuery } from 'react-query';

const useFollowerList = (userId) =>
  useQuery(['followerList', userId], getFollowers);
export default useFollowerList;
