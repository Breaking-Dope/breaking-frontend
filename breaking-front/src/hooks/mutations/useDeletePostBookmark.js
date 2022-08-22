import { deletePostBookmark } from 'api/post';
import { useMutation } from 'react-query';

const useDeletePostBookmark = () => {
  useMutation(deletePostBookmark);
};

export default useDeletePostBookmark;
