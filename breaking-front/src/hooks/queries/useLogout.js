import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { getLogout } from 'api/login';
import { PAGE_PATH } from 'constants/path';

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useQuery(['logout'], getLogout, {
    enabled: false,
    onSuccess: () => {
      alert('로그아웃 되었습니다.');
      localStorage.removeItem('access_token');
      //refresh 토큰 또한 제거 예정
      queryClient.invalidateQueries('jwtValidate');
      navigate(PAGE_PATH.LOGIN);
    },
  });
};

export default useLogout;
