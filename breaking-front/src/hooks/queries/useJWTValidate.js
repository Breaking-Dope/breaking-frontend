import { getJWTvalidation } from 'api/signUp';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { useContext } from 'react';
import { useQuery } from 'react-query';

const useJWTValidate = () => {
  const { setUserInfomation } = useContext(UserInformationContext);
  const { refetch } = useQuery(['jwtvalidate'], getJWTvalidation, {
    enabled: false,
    select: (data) => {
      setUserInfomation({ ...data.data, isLogin: true });
    },
  });
  return { refetch };
};

export default useJWTValidate;
