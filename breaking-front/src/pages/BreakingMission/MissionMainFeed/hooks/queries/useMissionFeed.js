import { getMissionFeeds } from 'api/breakingMission';
import { useInfiniteQuery } from 'react-query';

const useMissionFeed = () => {
  return useInfiniteQuery('missionFeed', getMissionFeeds, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
};

export default useMissionFeed;
