import { getPostData } from 'api/post';
import { PAGE_PATH } from 'constants/path';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const usePost = (postId) => {
  const navigate = useNavigate();

  return useQuery(['post', postId], getPostData, {
    onError: (error) => {
      navigate(PAGE_PATH.ERROR);
    },
  });
};

export default usePost;
