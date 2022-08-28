import { getJWTvalidation } from 'api/signUp';
import { useQuery } from 'react-query';

const useJWTValidate = (isEnabled) =>
  useQuery(['jwtValidate'], getJWTvalidation, {
    enabled: !!isEnabled,
    retry: 0,
  });

export default useJWTValidate;
