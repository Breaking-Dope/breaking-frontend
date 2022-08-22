import React from 'react';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import SearchUserResultCard from './components/SearchUserResultCard';
import * as Style from 'pages/Search/SearchUser//SearchUser.styles';
import {
  FOLLOWING_USER,
  NORMAL_USER,
  NO_FOLLOW_USER,
  NO_POSTCOUNT_USER,
  NO_PROFILEIMGURL_USER,
} from 'mocks/dummyData/users';

const SearchUser = () => {
  const userList = [
    NO_PROFILEIMGURL_USER,
    NORMAL_USER,
    NO_POSTCOUNT_USER,
    NO_FOLLOW_USER,
    FOLLOWING_USER,
  ];
  return (
    <>
      <SearchHeader focusTab={3} />
      <Style.SearchUserLayout>
        {userList.map((user) => (
          <SearchUserResultCard user={user} key={user.userId} />
        ))}
      </Style.SearchUserLayout>
    </>
  );
};

export default SearchUser;
