import { useMutation, useQueryClient } from 'react-query';
import { postPostActivatePurchase } from 'api/post';

const usePostActivatePurchase = () => {
  const queryClient = useQueryClient();

  return useMutation(postPostActivatePurchase, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
  });
};

export default usePostActivatePurchase;
