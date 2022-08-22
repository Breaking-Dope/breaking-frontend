import { postPostBookmark } from 'api/post';
import { useMutation } from 'react-query';

const usePostBookmark = () => {
  useMutation(postPostBookmark);
};

export default usePostBookmark;
