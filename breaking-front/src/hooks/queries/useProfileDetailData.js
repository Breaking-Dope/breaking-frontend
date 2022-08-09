import { getProfileDetailData } from 'api/profileEdit';
import { useQuery } from 'react-query';

const useProfileDetailData = () =>
  useQuery(['getProfileDetailData'], getProfileDetailData);

export default useProfileDetailData;
