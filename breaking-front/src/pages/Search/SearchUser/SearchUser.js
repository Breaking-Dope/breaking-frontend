import React from 'react';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import SearchUserResultCard from 'pages/Search/SearchUser/components/SearchUserResultCard/SearchUserResultCard';
import * as Style from 'pages/Search/SearchUser//SearchUser.styles';
import SearchUserResultCardSkeleton from 'pages/Search/SearchUser/components/SearchUserResultCardSkeleton/SearchUserResultCardSkeleton';
import { useSearchParams } from 'react-router-dom';
import useSearchUser from 'pages/Search/hooks/queries/useSearchUser';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

const SearchUser = () => {
  const [searchParams] = useSearchParams();
  const {
    data: searchUserResult,
    isLoading: isSearchUserLoading,
    isFetching: isSearchUserFetching,
    fetchNextPage: FetchNextSearchUser,
  } = useSearchUser(searchParams.get('query'), 10);
  const { targetRef } = useInfiniteScroll(
    searchUserResult,
    FetchNextSearchUser
  );
  return (
    <>
      <SearchHeader focusTab={3} />
      <Style.SearchUserLayout>
        {isSearchUserLoading ? (
          <>
            <SearchUserResultCardSkeleton />
            <SearchUserResultCardSkeleton />
            <SearchUserResultCardSkeleton />
            <SearchUserResultCardSkeleton />
            <SearchUserResultCardSkeleton />
            <SearchUserResultCardSkeleton />
          </>
        ) : (
          searchUserResult.pages.map((page) =>
            page.result.map((user) => (
              <SearchUserResultCard user={user} key={user.userId} />
            ))
          )
        )}
      </Style.SearchUserLayout>
      <InfiniteTargetDiv
        targetRef={targetRef}
        isFetching={isSearchUserFetching}
      />
    </>
  );
};

export default SearchUser;
