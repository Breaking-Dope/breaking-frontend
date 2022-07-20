import { getProfileDetailData } from 'api/profileEdit';
import { useQuery } from 'react-query';

const useProfileDetailData = () =>
  useQuery(['getProfileDetailData'], getProfileDetailData, {
    refetchOnWindowFocus: false,

    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {},
  });

export default useProfileDetailData;
