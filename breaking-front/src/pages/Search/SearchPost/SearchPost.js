import React, { useContext } from 'react';
import * as Style from 'pages/Search/SearchPost/SearchPost.styles';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import Feed from 'components/Feed/Feed';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useSearch from '../hooks/queries/useSearch';
import { useSearchParams } from 'react-router-dom';
import { FeedSkeleton } from 'components/Skeleton/Skeleton';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

const SearchPost = () => {
  const { userId } = useContext(UserInformationContext);
  const [searchParams] = useSearchParams();

  const {
    data: searchPostResult,
    isLoading: searchPostLoading,
    fetchNextPage: FetchNextSearchPost,
    isFetching: isFetchSearchPost,
  } = useSearch(searchParams, 10);

  const { targetRef } = useInfiniteScroll(
    searchPostResult,
    FetchNextSearchPost
  );

  return (
    <>
      <SearchHeader focusTab={1} />
      <Style.PostResultList>
        {searchPostLoading ? (
          <>
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
          </>
        ) : (
          searchPostResult.pages.map((page) =>
            page.result.map((feed) => (
              <Feed feedData={feed} key={feed.postId} userId={userId} />
            ))
          )
        )}
      </Style.PostResultList>
      <InfiniteTargetDiv
        targetRef={targetRef}
        isFetching={isFetchSearchPost}
        height="80px"
      />
    </>
  );
};

export default SearchPost;
