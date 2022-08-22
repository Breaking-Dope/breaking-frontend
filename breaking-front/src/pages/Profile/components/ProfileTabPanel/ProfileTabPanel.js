import React from 'react';
import Filter from 'components/Filter/Filter';
import * as Style from 'pages/Profile/components/ProfileTabPanel/ProfileTabPanel.styles';
import Feed from 'components/Feed/Feed';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { useQueryClient } from 'react-query';
import { FeedSkeleton } from 'components/Skeleton/Skeleton';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import InfiniteTargetDiv from '../../../../components/InfiniteTargetDiv/InfiniteTargetDiv';

const ProfileTabPanel = ({
  type,
  data,
  isFetching,
  isLoading,
  nextFetch,
  setOption,
}) => {
  const { userId } = useContext(UserInformationContext);
  const queryClient = useQueryClient();

  const { targetRef } = useInfiniteScroll(data, nextFetch);

  return (
    <>
      <Style.PanelContainer>
        <Style.FilterContainer>
          <Filter width="180px">
            <Filter.FilterDetail
              onClick={() => {
                queryClient.resetQueries([type]);
                setOption('all');
              }}
            >
              모든 제보글
            </Filter.FilterDetail>
            <Filter.FilterDetail
              onClick={() => {
                queryClient.resetQueries([type]);
                setOption('unsold');
              }}
            >
              판매되지 않은 제보글
            </Filter.FilterDetail>
            <Filter.FilterDetail
              onClick={() => {
                queryClient.resetQueries([type]);
                setOption('sold');
              }}
            >
              판매된 제보글
            </Filter.FilterDetail>
          </Filter>
        </Style.FilterContainer>
        <Style.FeedContainer>
          {isLoading && (
            <>
              <FeedSkeleton />
              <FeedSkeleton />
              <FeedSkeleton />
              <FeedSkeleton />
            </>
          )}
          {data?.pages.map((page) =>
            page.result.map((feed) => (
              <Feed feedData={feed} key={feed.postId} userId={userId} />
            ))
          )}
        </Style.FeedContainer>
        <InfiniteTargetDiv targetRef={targetRef} isFetching={isFetching} />
      </Style.PanelContainer>
    </>
  );
};

ProfileTabPanel.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
  isFetching: PropTypes.bool,
  isLoading: PropTypes.bool,
  nextFetch: PropTypes.func,
  setOption: PropTypes.func,
};

export default ProfileTabPanel;
