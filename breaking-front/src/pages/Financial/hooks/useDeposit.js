import { useMutation, useQueryClient } from 'react-query';
import { postDeposit } from 'api/financial';

const useDeposit = () => {
  const queryClient = useQueryClient();

  return useMutation(postDeposit, {
    onSuccess: () => {
      queryClient.invalidateQueries('transaction');
      queryClient.invalidateQueries('jwtValidate');
    },
    onError: (error) => {
      if (error.response.data.code === 'BSE600')
        alert('결제에 실패하였습니다.');
    },
  });
};

export default useDeposit;
