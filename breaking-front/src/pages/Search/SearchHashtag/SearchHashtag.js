import React, { useContext } from 'react';
import * as Style from 'pages/Search/SearchHashtag/SearchHashtag.styles';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import Feed from 'components/Feed/Feed';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useSearchHashtag from 'pages/Search/hooks/queries/useSearchHashtag';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import { FeedSkeleton } from 'components/Skeleton/Skeleton';
import useConvertURLQuery from 'pages/Search/hooks/useConvertURLQuery';
import NoData from 'components/NoData/NoData';

const SearchHashtag = () => {
  const { userId } = useContext(UserInformationContext);
  const currentQuery = useConvertURLQuery();

  const {
    data: searchHashtagResult,
    isLoading: searchHashtagLoading,
    fetchNextPage: FetchNextSearchHashtag,
    isFetching: isFetchSearchHashtag,
  } = useSearchHashtag(currentQuery, 10);

  const { targetRef } = useInfiniteScroll(
    searchHashtagResult,
    FetchNextSearchHashtag
  );
  return (
    <>
      <SearchHeader focusTab={2} />

      {searchHashtagLoading && (
        <Style.PostResultList>
          <FeedSkeleton />
          <FeedSkeleton />
          <FeedSkeleton />
          <FeedSkeleton />
        </Style.PostResultList>
      )}
      {searchHashtagResult?.pages[0].result.length === 0 ? (
        <Style.NoDataContainer>
          <NoData message="검색결과 없음" />
        </Style.NoDataContainer>
      ) : (
        <>
          <Style.PostResultList>
            {searchHashtagResult?.pages.map((page) =>
              page.result.map((feed) => (
                <Feed feedData={feed} key={feed.postId} userId={userId} />
              ))
            )}
          </Style.PostResultList>
          <InfiniteTargetDiv
            targetRef={targetRef}
            isFetching={isFetchSearchHashtag}
            height="80px"
          />
        </>
      )}
    </>
  );
};

export default SearchHashtag;
