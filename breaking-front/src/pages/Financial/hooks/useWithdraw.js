import { useMutation, useQueryClient } from 'react-query';
import { postWithdraw } from 'api/financial';

const useWithdraw = () => {
  const queryClient = useQueryClient();

  return useMutation(postWithdraw, {
    onSuccess: () => {
      queryClient.invalidateQueries('transaction');
      queryClient.invalidateQueries('jwtValidate');
    },
    onError: (error) => {
      if (error.response.data.code === 'BSE601') alert('잔액이 부족합니다.');
    },
  });
};

export default useWithdraw;
