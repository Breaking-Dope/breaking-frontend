import { putProfileEdit } from 'api/profileEdit';
import { PAGE_PATH } from 'constants/path';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useProfileEdit = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(putProfileEdit, {
    onSuccess: (res) => {
      alert('변경사항을 저장하였습니다.');
      queryClient.invalidateQueries('jwtValidate');
      navigate(PAGE_PATH.HOME);
    },
    onError: () => {
      //에러 페이지 이동
    },
  });
};

export default useProfileEdit;
