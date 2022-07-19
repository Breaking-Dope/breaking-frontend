import { getProfileDetailData } from 'api/profileEdit';
import { useQuery } from 'react-query';

const useProfileDetailData = () =>
  useQuery(['getProfileDetailData'], getProfileDetailData, {
    refetchOnWindowFocus: false,
    retry: 2,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {},
  });

export default useProfileDetailData;
