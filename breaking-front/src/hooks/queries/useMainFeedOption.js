import { getFeeds } from 'api/mainFeed';
import { useQuery } from 'react-query';

const useMainFeedOption = (page, size, sort, option) => {
  return useQuery(['mainFeedOption', { page, size, sort, option }], getFeeds, {
    cacheTime: 0,
  });
};

export default useMainFeedOption;
