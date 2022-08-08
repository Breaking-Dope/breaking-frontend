import { getLogout } from 'api/login';
import { PAGE_PATH } from 'constants/path';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useQuery(['logout'], getLogout, {
    enabled: false,
    onSuccess: () => {
      alert('로그아웃 되었습니다.');
      queryClient.resetQueries();
      navigate(PAGE_PATH.LOGIN);
    },
  });
};

export default useLogout;
