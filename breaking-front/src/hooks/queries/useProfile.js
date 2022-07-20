import { getProfile } from 'api/profile';
import { useQuery } from 'react-query';

const useProfile = (userId) => {
  const { data: profileData, isLoading } = useQuery(
    ['profile', userId],
    getProfile
  );

  return { profileData, isLoading };
};

export default useProfile;
