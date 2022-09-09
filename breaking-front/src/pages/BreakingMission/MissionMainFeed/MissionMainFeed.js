import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop.styles';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import useMissionFeed from 'pages/BreakingMission/MissionMainFeed/hooks/queries/useMissionFeed';
import MissionFeed from 'components/MissionFeed/MissionFeed';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import { MissionFeedSkeleton } from 'components/Skeleton/Skeleton';
import * as Style from 'pages/BreakingMission/MissionMainFeed/MissionMainFeed.styles';
import { ReactComponent as PenIcon } from 'assets/svg/pen.svg';

const MissionMainFeed = () => {
  const navigate = useNavigate();

  const {
    data: MissionFeedData,
    isLoading: isMissionFeedLoading,
    isFetching: isMissionFeedFetching,
    fetchNextPage: FetchNextMissionFeed,
  } = useMissionFeed();

  const { targetRef } = useInfiniteScroll(
    MissionFeedData,
    FetchNextMissionFeed
  );

  const handleUploadClick = () => {
    navigate(''); // 미션글 작성 페이지로 이동
  };

  return (
    <Style.MissionMainFeed>
      <ScrollToTop />
      <Style.NavBar>
        {/* MissionFilter 컴포넌트 추후 구현 */}
        <div />
        <Style.MissionFeedUploadButton onClick={handleUploadClick}>
          <PenIcon />
          작성하기
        </Style.MissionFeedUploadButton>
      </Style.NavBar>
      <Style.MissionFeeds>
        {MissionFeedData?.pages.map((page) =>
          page.result.map((feed) => (
            <MissionFeed feedData={feed} key={feed.missionId} />
          ))
        )}
        {isMissionFeedLoading && (
          <>
            <MissionFeedSkeleton />
            <MissionFeedSkeleton />
            <MissionFeedSkeleton />
            <MissionFeedSkeleton />
          </>
        )}
      </Style.MissionFeeds>
      <InfiniteTargetDiv
        targetRef={targetRef}
        isFetching={isMissionFeedFetching}
      />
    </Style.MissionMainFeed>
  );
};

export default MissionMainFeed;
