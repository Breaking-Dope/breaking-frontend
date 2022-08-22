import { postFollow } from 'api/profile';
import { useMutation, useQueryClient } from 'react-query';

const useFollow = () => {
  const queryClient = useQueryClient();
  return useMutation(postFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
      queryClient.invalidateQueries('followerList');
    },
    onError: () => {
      //에러처리
    },
  });
};

export default useFollow;
