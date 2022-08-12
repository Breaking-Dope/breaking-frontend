import { postPostWrite } from 'api/postWrite';
import { PAGE_PATH } from 'constants/path';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const usePostWriteMutation = () => {
  const navigate = useNavigate();
  return useMutation(postPostWrite, {
    onSuccess: () => {
      alert('작성되었습니다.');
      navigate(PAGE_PATH.HOME);
    },
    onError: (error) => {
      console.log(error);
      //에러처리
    },
  });
};

export default usePostWriteMutation;
