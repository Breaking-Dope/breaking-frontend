import { postPostBookmark } from 'api/post';
import { useMutation } from 'react-query';

const usePostBookmark = () => {
  return useMutation(postPostBookmark);
};

export default usePostBookmark;
