import { useSearchParams } from 'react-router-dom';

const ConvertCurrentURLQuery = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get('query').replaceAll(' ', '+');
};

export default ConvertCurrentURLQuery;
