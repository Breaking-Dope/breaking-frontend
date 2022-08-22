import { deletePostLike } from 'api/post';
import { useMutation } from 'react-query';

const useDeletePostLike = () => {
  useMutation(deletePostLike);
};

export default useDeletePostLike;
