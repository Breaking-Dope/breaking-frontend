import { deleteUnFollow } from 'api/profile';
import { useMutation, useQueryClient } from 'react-query';

const useUnFollow = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteUnFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
      queryClient.invalidateQueries('followerList');
    },
    onError: () => {
      //에러처리
    },
  });
};

export default useUnFollow;
