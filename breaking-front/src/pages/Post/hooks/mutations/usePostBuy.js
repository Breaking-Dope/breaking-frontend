import { postPostBuy } from 'api/post';
import { useMutation, useQueryClient } from 'react-query';

const usePostBuy = () => {
  const queryClient = useQueryClient();

  return useMutation(postPostBuy, {
    onSuccess: () => {
      alert('게시글을 구매하였습니다.');
      queryClient.invalidateQueries('post');
    },
  });
};

export default usePostBuy;
