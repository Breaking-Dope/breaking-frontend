import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useMainFeedOption from 'hooks/queries/useMainFeedOption';
import { PAGE_PATH } from 'constants/path';
import Feed from 'components/Feed/Feed';
import * as Style from 'pages/MainFeed/MainFeed.styles';
import { ReactComponent as PenIcon } from 'assets/svg/pen.svg';
import { FeedSkeleton } from 'components/Skeleton/Skeleton';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import SearchFilter from 'components/SearchFilter/SearchFilter';

const MainFeed = () => {
  const navigate = useNavigate();
  const { userId } = useContext(UserInformationContext);

  const [sort, setSort] = useState('chronological');
  const [option, setOption] = useState('all');

  const {
    data: mainFeedData,
    isLoading: isMainFeedLoading,
    isFetching: isMainFeedFetching,
    fetchNextPage: FetchNextMainFeed,
  } = useMainFeedOption(sort, option);

  const { targetRef } = useInfiniteScroll(mainFeedData, FetchNextMainFeed);

  const handleUploadClick = () => {
    navigate(PAGE_PATH.POST_WRITE);
  };

  return (
    <Style.MainFeed>
      <ScrollToTop />
      <Style.NavBar>
        <SearchFilter
          setSort={setSort}
          option={option}
          setOption={setOption}
          queryKey="mainFeedOption"
        />
        <Style.FeedUploadButton onClick={handleUploadClick}>
          <PenIcon />
          작성하기
        </Style.FeedUploadButton>
      </Style.NavBar>
      <Style.Feeds>
        {mainFeedData?.pages.map((page) =>
          page.result.map((feed) => (
            <Feed feedData={feed} key={feed.postId} userId={userId} />
          ))
        )}
        {isMainFeedLoading && (
          <>
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
          </>
        )}
      </Style.Feeds>
      <InfiniteTargetDiv
        targetRef={targetRef}
        isFetching={isMainFeedFetching}
      />
    </Style.MainFeed>
  );
};

export default MainFeed;
