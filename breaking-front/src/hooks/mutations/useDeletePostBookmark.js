import { deletePostBookmark } from 'api/post';
import { useMutation } from 'react-query';

const useDeletePostBookmark = () => {
  return useMutation(deletePostBookmark);
};

export default useDeletePostBookmark;
