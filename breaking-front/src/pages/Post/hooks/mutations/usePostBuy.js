import { postPostBuy } from 'api/post';
import { useMutation, useQueryClient } from 'react-query';

const usePostBuy = () => {
  const queryClient = useQueryClient();

  return useMutation(postPostBuy, {
    onSuccess: () => {
      alert('게시글을 구매하였습니다.');
      queryClient.invalidateQueries('post');
    },
    onError: (error) => {
      if (error.response.data.code === 'BSE601') alert('금액이 부족합니다.');
    },
  });
};

export default usePostBuy;
