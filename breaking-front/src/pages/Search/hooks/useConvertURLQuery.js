import { useSearchParams } from 'react-router-dom';

const useConvertURLQuery = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get('query').replaceAll(' ', '+');
};

export default useConvertURLQuery;
