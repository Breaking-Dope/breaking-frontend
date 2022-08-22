import { getPostBoughtList } from 'api/post';
import { useQuery } from 'react-query';

const usePostBoughtList = (postId) => {
  return useQuery(['boughtUserList', postId], getPostBoughtList, {
    enabled: false,
  });
};

export default usePostBoughtList;
