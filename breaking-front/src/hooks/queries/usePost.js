import { getPostData } from 'api/post';
import { useQuery } from 'react-query';

const usePost = (postId) => {
  return useQuery(['post', postId], getPostData);
};

export default usePost;
