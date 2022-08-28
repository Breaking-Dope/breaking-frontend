import React from 'react';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import * as Style from 'pages/Search/SearchUnified/SearchUnified.styles';
import Feed from 'components/Feed/Feed';
import { useContext } from 'react';
import { UserInformationContext } from 'providers/UserInformationProvider';
import UserCard from 'pages/Search/SearchUnified/components/UserCard/UserCard';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import useSearch from 'pages/Search/hooks/queries/useSearch';
import useSearchUser from 'pages/Search/hooks/queries/useSearchUser';
import { FeedSkeleton } from 'components/Skeleton/Skeleton';
import UserCardSkeleton from 'pages/Search/SearchUnified/components/UserCardSkeleton/UserCardSkeleton';
import useConvertURLQuery from 'pages/Search/hooks/useConvertURLQuery';
import NoData from 'components/NoData/NoData';

const SearchUnified = () => {
  const { userId, isLogin } = useContext(UserInformationContext);
  const navigate = useNavigate();

  const currentQuery = useConvertURLQuery();

  const { data: searchPostResult, isLoading: searchPostLoading } = useSearch(
    currentQuery,
    4
  );
  const { data: searchUserResult, isLoading: searchUserLoading } =
    useSearchUser(currentQuery, 5);

  const viewAllUserClick = () => {
    navigate(PAGE_PATH.SEARCH_USER + `?query=${currentQuery}`);
  };
  const viewAllPostClick = () => {
    navigate(PAGE_PATH.SEARCH_POST + `?query=${currentQuery}`);
  };

  return (
    <>
      <SearchHeader focusTab={0} />
      <Style.UserResultLayout>
        <Style.UserResultTitle>사람</Style.UserResultTitle>
        {searchPostLoading && (
          <Style.UserInformationList>
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
          </Style.UserInformationList>
        )}
        {searchUserResult?.pages[0].result.length === 0 ? (
          <Style.NoDataContainer>
            <NoData message="검색결과 없음" />
          </Style.NoDataContainer>
        ) : (
          <>
            <Style.UserInformationList>
              {searchUserResult?.pages.map((page) =>
                page.result.map((user) => (
                  <UserCard user={user} key={user.userId} isLogin={isLogin} />
                ))
              )}
            </Style.UserInformationList>
            <Style.ViewAllButton onClick={viewAllUserClick}>
              모두 보기
            </Style.ViewAllButton>
          </>
        )}
      </Style.UserResultLayout>
      <Style.PostResultLayout>
        <Style.PostResultTitle>게시글</Style.PostResultTitle>
        {searchUserLoading && (
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
            <Style.ViewAllButton onClick={viewAllPostClick}>
              모두 보기
            </Style.ViewAllButton>
          </>
        )}
      </Style.PostResultLayout>
    </>
  );
};

export default SearchUnified;
