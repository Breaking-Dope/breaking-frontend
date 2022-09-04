import { postPostDeactivatePurchase } from 'api/post';
import { useMutation, useQueryClient } from 'react-query';

const usePostDeactivatePurchase = () => {
  const queryClient = useQueryClient();

  return useMutation(postPostDeactivatePurchase, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
  });
};

export default usePostDeactivatePurchase;
