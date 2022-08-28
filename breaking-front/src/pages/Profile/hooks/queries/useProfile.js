import { getProfile } from 'api/profile';
import { PAGE_PATH } from 'constants/path';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useProfile = (userId) => {
  const navigate = useNavigate();

  return useQuery(['profile', userId], getProfile, {
    onError: (error) => {
      navigate(PAGE_PATH.ERROR);
    },
  });
};

export default useProfile;
