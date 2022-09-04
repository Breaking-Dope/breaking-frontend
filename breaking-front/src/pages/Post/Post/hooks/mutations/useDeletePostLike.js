import { deletePostLike } from 'api/post';
import { useMutation } from 'react-query';

const useDeletePostLike = () => {
  return useMutation(deletePostLike);
};

export default useDeletePostLike;
