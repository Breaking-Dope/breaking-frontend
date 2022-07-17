import { getProfile } from 'api/profile';

const { useQuery } = require('react-query');

const useProfile = (userId) => {
  const isMyPage = true;
  // jwt토큰과 비교해봐서 지금 페이지가 내 페이지인지 확인을 해야한다.
  const { data, isLoading } = useQuery(['profile', userId], getProfile, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const profileData = data.data;

  return { profileData, isLoading, isMyPage };
};

export default useProfile;
