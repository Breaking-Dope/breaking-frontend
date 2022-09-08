import { deletePostDeactivatePurchase } from 'api/post';
import { useMutation, useQueryClient } from 'react-query';

const usePostDeactivatePurchase = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePostDeactivatePurchase, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
  });
};

export default usePostDeactivatePurchase;
