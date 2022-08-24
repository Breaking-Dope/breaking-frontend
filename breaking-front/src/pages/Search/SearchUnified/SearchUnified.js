import React from 'react';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import * as Style from 'pages/Search/SearchUnified/SearchUnified.styles';
import Feed from 'components/Feed/Feed';
import { useContext } from 'react';
import { UserInformationContext } from 'providers/UserInformationProvider';
import UserCard from 'pages/Search/SearchUnified/components/UserCard/UserCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import useSearch from 'pages/Search/hooks/queries/useSearch';
import useSearchUser from 'pages/Search/hooks/queries/useSearchUser';
import { FeedSkeleton } from 'components/Skeleton/Skeleton';
import UserCardSkeleton from 'pages/Search/SearchUnified/components/UserCardSkeleton/UserCardSkeleton';

const SearchUnified = () => {
  const { userId } = useContext(UserInformationContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data: searchPostResult, isLoading: searchPostLoading } = useSearch(
    searchParams.get('query'),
    4
  );
  const { data: searchUserResult, isLoading: searchUserLoading } =
    useSearchUser(searchParams.get('query'), 5);
  const viewAllUserClick = () => {
    navigate(PAGE_PATH.SEARCH_USER + `?query=${searchParams.get('query')}`);
  };
  const viewAllPostClick = () => {
    navigate(PAGE_PATH.SEARCH_POST + `?query=${searchParams.get('query')}`);
  };
  console.log(searchUserResult);
  return (
    <>
      <SearchHeader focusTab={0} />
      <Style.UserResultLayout>
        <Style.UserResultTitle>사람</Style.UserResultTitle>
        <Style.UserInformationList>
          {searchPostLoading ? (
            <>
              <UserCardSkeleton />
              <UserCardSkeleton />
              <UserCardSkeleton />
              <UserCardSkeleton />
              <UserCardSkeleton />
            </>
          ) : (
            searchUserResult?.pages.map((page) =>
              page.result.map((user) => (
                <UserCard user={user} key={user.userId} />
              ))
            )
          )}
        </Style.UserInformationList>
        <Style.ViewAllButton onClick={viewAllUserClick}>
          모두 보기
        </Style.ViewAllButton>
      </Style.UserResultLayout>
      <Style.PostResultLayout>
        <Style.PostResultTitle>게시글</Style.PostResultTitle>
        <Style.PostResultList>
          {searchUserLoading ? (
            <>
              <FeedSkeleton />
              <FeedSkeleton />
              <FeedSkeleton />
              <FeedSkeleton />
            </>
          ) : (
            searchPostResult?.pages.map((page) =>
              page.result.map((feed) => (
                <Feed feedData={feed} key={feed.postId} userId={userId} />
              ))
            )
          )}
        </Style.PostResultList>
        <Style.ViewAllButton onClick={viewAllPostClick}>
          모두 보기
        </Style.ViewAllButton>
      </Style.PostResultLayout>
    </>
  );
};

export default SearchUnified;
