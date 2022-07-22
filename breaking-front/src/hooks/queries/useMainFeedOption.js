import { getFeeds } from 'api/mainFeed';
import { useQuery } from 'react-query';

const useMainFeedOption = (page, size, sort, option, setFeedList) => {
  return useQuery(['mainFeedOption', { page, size, sort, option }], getFeeds, {
    onSuccess: (data) => {
      setFeedList((pre) => pre.concat(data.data));
    },
  });
};

export default useMainFeedOption;
