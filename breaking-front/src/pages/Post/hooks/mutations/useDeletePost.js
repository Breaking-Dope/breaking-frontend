import { deletePost } from 'api/post';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useDeletePost = () => {
  const navigate = useNavigate();

  return useMutation(deletePost, {
    onSuccess: () => {
      alert('게시글을 삭제하였습니다.');
      navigate(-1);
    },
  });
};

export default useDeletePost;
