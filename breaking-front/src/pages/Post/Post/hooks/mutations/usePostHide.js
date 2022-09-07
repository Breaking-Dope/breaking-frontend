import { postPostHide } from 'api/post';
import { useMutation } from 'react-query';

const usePostHide = () => {
  return useMutation(postPostHide);
};

export default usePostHide;
