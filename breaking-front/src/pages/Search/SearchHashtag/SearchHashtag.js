import React, { useContext } from 'react';
import * as Style from 'pages/Search/SearchHashtag/SearchHashtag.styles';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import Feed from 'components/Feed/Feed';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useSearchHashtag from 'pages/Search/hooks/queries/useSearchHashtag';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import { FeedSkeleton } from 'components/Skeleton/Skeleton';
import ConvertCurrentURLQuery from 'pages/Search/utils/ConvertCurrentURLQuery';

const SearchHashtag = () => {
  const { userId } = useContext(UserInformationContext);
  const currentQuery = ConvertCurrentURLQuery();

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
      <Style.PostResultList>
        {searchHashtagLoading ? (
          <>
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
          </>
        ) : (
          searchHashtagResult.pages.map((page) =>
            page.result.map((feed) => (
              <Feed feedData={feed} key={feed.postId} userId={userId} />
            ))
          )
        )}
      </Style.PostResultList>
      <InfiniteTargetDiv
        targetRef={targetRef}
        isFetching={isFetchSearchHashtag}
      />
    </>
  );
};

export default SearchHashtag;
