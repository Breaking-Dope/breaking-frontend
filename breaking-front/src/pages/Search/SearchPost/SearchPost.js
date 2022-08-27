import React, { useContext } from 'react';
import * as Style from 'pages/Search/SearchPost/SearchPost.styles';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import Feed from 'components/Feed/Feed';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useSearch from 'pages/Search/hooks/queries/useSearch';
import { FeedSkeleton } from 'components/Skeleton/Skeleton';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import useConvertURLQuery from 'pages/Search/hooks/useConvertURLQuery';
import NoData from 'components/NoData/NoData';

const SearchPost = () => {
  const { userId } = useContext(UserInformationContext);
  const currentQuery = useConvertURLQuery();

  const {
    data: searchPostResult,
    isLoading: searchPostLoading,
    fetchNextPage: FetchNextSearchPost,
    isFetching: isFetchSearchPost,
  } = useSearch(currentQuery, 10);

  const { targetRef } = useInfiniteScroll(
    searchPostResult,
    FetchNextSearchPost
  );

  return (
    <>
      <SearchHeader focusTab={1} />
      {searchPostLoading && (
        <Style.PostResultList>
          <FeedSkeleton />
          <FeedSkeleton />
          <FeedSkeleton />
          <FeedSkeleton />
        </Style.PostResultList>
      )}

      {searchPostResult?.pages[0].result.length === 0 ? (
        <Style.NoDataContainer>
          <NoData message="검색결과 없음" />
        </Style.NoDataContainer>
      ) : (
        <>
          <Style.PostResultList>
            {searchPostResult?.pages.map((page) =>
              page.result.map((feed) => (
                <Feed feedData={feed} key={feed.postId} userId={userId} />
              ))
            )}
          </Style.PostResultList>
          <InfiniteTargetDiv
            targetRef={targetRef}
            isFetching={isFetchSearchPost}
            height="80px"
          />
        </>
      )}
    </>
  );
};

export default SearchPost;
