import { deletePostShow } from 'api/post';
import { useMutation } from 'react-query';

const usePostShow = () => {
  return useMutation(deletePostShow);
};

export default usePostShow;
