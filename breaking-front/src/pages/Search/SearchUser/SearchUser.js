import React from 'react';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import SearchUserResultCard from 'pages/Search/SearchUser/components/SearchUserResultCard/SearchUserResultCard';
import * as Style from 'pages/Search/SearchUser//SearchUser.styles';
import SearchUserResultCardSkeleton from 'pages/Search/SearchUser/components/SearchUserResultCardSkeleton/SearchUserResultCardSkeleton';
import useSearchUser from 'pages/Search/hooks/queries/useSearchUser';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import ConvertCurrentURLQuery from 'pages/Search/utils/ConvertCurrentURLQuery';
import NoData from 'components/NoData/NoData';

const SearchUser = () => {
  const currentQuery = ConvertCurrentURLQuery();

  const {
    data: searchUserResult,
    isLoading: isSearchUserLoading,
    isFetching: isSearchUserFetching,
    fetchNextPage: FetchNextSearchUser,
  } = useSearchUser(currentQuery, 10);

  const { targetRef } = useInfiniteScroll(
    searchUserResult,
    FetchNextSearchUser
  );
  return (
    <>
      <SearchHeader focusTab={3} />
      {isSearchUserLoading && (
        <Style.SearchUserLayout>
          <SearchUserResultCardSkeleton />
          <SearchUserResultCardSkeleton />
          <SearchUserResultCardSkeleton />
          <SearchUserResultCardSkeleton />
          <SearchUserResultCardSkeleton />
          <SearchUserResultCardSkeleton />
        </Style.SearchUserLayout>
      )}
      {searchUserResult?.pages[0].result.length === 0 ? (
        <Style.NoDataContainer>
          <NoData message="검색결과 없음" />
        </Style.NoDataContainer>
      ) : (
        <>
          <Style.SearchUserLayout>
            {searchUserResult?.pages.map((page) =>
              page.result.map((user) => (
                <SearchUserResultCard user={user} key={user.userId} />
              ))
            )}
          </Style.SearchUserLayout>
          <InfiniteTargetDiv
            targetRef={targetRef}
            isFetching={isSearchUserFetching}
          />
        </>
      )}
    </>
  );
};

export default SearchUser;
