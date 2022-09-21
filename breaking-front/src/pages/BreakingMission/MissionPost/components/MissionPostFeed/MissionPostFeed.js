import React from 'react';
import Feed from 'components/Feed/Feed';
import * as Style from 'pages/BreakingMission/MissionPost/components/MissionPostFeed/MissionPostFeed.styles';
import useMissionPostFeed from '../../hooks/queries/useMissionPostFeed';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import { FeedSkeleton } from 'components/Skeleton/Skeleton';
import PropTypes from 'prop-types';

const MissionPostFeed = ({ missionId }) => {
  const {
    data: MissionPostFeed,
    isLoading: isMissionPostFeedLoading,
    isFetching: isMissionPostFeedFetching,
    fetchNextPage: FetchNextMissionPostFeed,
  } = useMissionPostFeed(missionId);

  const { targetRef } = useInfiniteScroll(
    MissionPostFeed,
    FetchNextMissionPostFeed
  );

  return (
    <Style.FeedContainer>
      <Style.MissionPostFeed>
        {MissionPostFeed?.pages.map((page) =>
          page.result.map((feed) => <Feed feedData={feed} key={feed.postId} />)
        )}
        {isMissionPostFeedLoading && (
          <>
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
          </>
        )}
      </Style.MissionPostFeed>
      <InfiniteTargetDiv
        targetRef={targetRef}
        isFetching={isMissionPostFeedFetching}
      />
    </Style.FeedContainer>
  );
};

MissionPostFeed.propTypes = {
  missionId: PropTypes.number.isRequired,
};

export default MissionPostFeed;
