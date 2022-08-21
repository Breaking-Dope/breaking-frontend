import { getTransaction } from 'api/financial';
import { useInfiniteQuery } from 'react-query';

const useTransaction = () => {
  return useInfiniteQuery(['transaction'], getTransaction, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
};

export default useTransaction;
