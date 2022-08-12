import { putPostEdit } from 'api/postEdit';
import { PAGE_PATH } from 'constants/path';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const usePostEditMutation = () => {
  const navigate = useNavigate();
  return useMutation(putPostEdit, {
    onSuccess: () => {
      alert('수정 되었습니다.');
      navigate(PAGE_PATH.HOME);
      //redirect 위치 생각해보기
    },
    onError: (error) => {
      console.log(error);
      //에러처리
    },
  });
};

export default usePostEditMutation;
