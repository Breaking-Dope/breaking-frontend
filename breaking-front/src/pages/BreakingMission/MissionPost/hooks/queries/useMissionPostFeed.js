import { getMissionPostFeeds } from 'api/breakingMission';
import { useInfiniteQuery } from 'react-query';

const useMissionPostFeed = (missionId) => {
  return useInfiniteQuery(['missionPostFeed', missionId], getMissionPostFeeds, {
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
  });
};

export default useMissionPostFeed;
