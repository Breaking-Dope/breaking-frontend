import { putPostEdit } from 'api/postEdit';
import { PAGE_PATH } from 'constants/path';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const usePostEditMutation = () => {
  const navigate = useNavigate();
  return useMutation(putPostEdit, {
    onSuccess: (res) => {
      alert('수정 되었습니다.');
      navigate(PAGE_PATH.POST(res.data.postId));
    },
  });
};

export default usePostEditMutation;
