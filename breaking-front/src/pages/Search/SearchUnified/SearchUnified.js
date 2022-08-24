import React from 'react';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import * as Style from 'pages/Search/SearchUnified/SearchUnified.styles';
import Feed from 'components/Feed/Feed';
import { useContext } from 'react';
import { UserInformationContext } from 'providers/UserInformationProvider';
import {
  FOLLOWING_USER,
  NORMAL_USER,
  NO_FOLLOW_USER,
  NO_PROFILEIMGURL_USER,
} from 'mocks/dummyData/users';
import UserCard from 'pages/Search/SearchUnified/components/UserCard/UserCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import {
  EMPTY_PICTURE_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
} from 'mocks/dummyData/contents';

const SearchUnified = () => {
  const { userId } = useContext(UserInformationContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const FeedList = [
    NORMAL_CONTENT,
    EXCLUSIVE_CONTENT,
    EMPTY_PICTURE_CONTENT,
    SOLDOUT_CONTENT,
  ];

  const users = [
    NORMAL_USER,
    NO_PROFILEIMGURL_USER,
    FOLLOWING_USER,
    NO_PROFILEIMGURL_USER,
    NO_FOLLOW_USER,
  ];

  const viewAllUserClick = () => {
    navigate(PAGE_PATH.SEARCH_USER + `?query=${searchParams.get('query')}`);
  };
  const viewAllPostClick = () => {
    navigate(PAGE_PATH.SEARCH_POST + `?query=${searchParams.get('query')}`);
  };
  return (
    <>
      <SearchHeader focusTab={0} />
      <Style.UserResultLayout>
        <Style.UserResultTitle>사람</Style.UserResultTitle>
        <Style.UserInformationList>
          {users.map((user) => (
            <UserCard user={user} key={user.userId} />
          ))}
        </Style.UserInformationList>
        <Style.ViewAllButton onClick={viewAllUserClick}>
          모두 보기
        </Style.ViewAllButton>
      </Style.UserResultLayout>
      <Style.PostResultLayout>
        <Style.PostResultTitle>게시글</Style.PostResultTitle>
        <Style.PostResultList>
          {FeedList.map((feed) => (
            <Feed feedData={feed} key={feed.postId} userId={userId} />
          ))}
        </Style.PostResultList>
        <Style.ViewAllButton onClick={viewAllPostClick}>
          모두 보기
        </Style.ViewAllButton>
      </Style.PostResultLayout>
    </>
  );
};

export default SearchUnified;
