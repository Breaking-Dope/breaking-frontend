import { getMissionPostFeeds } from 'api/breakingMission';
import { useInfiniteQuery } from 'react-query';

const useMissionPostFeed = () => {
  return useInfiniteQuery('missionPostFeed', getMissionPostFeeds, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
};

export default useMissionPostFeed;
