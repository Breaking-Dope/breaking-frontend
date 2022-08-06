import { getTransaction } from 'api/financial';
import { useQuery } from 'react-query';

const useTransaction = () => {
  return useQuery(['transaction'], getTransaction);
};

export default useTransaction;
