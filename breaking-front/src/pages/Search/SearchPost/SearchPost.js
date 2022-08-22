import React, { useContext } from 'react';
import * as Style from 'pages/Search/SearchPost/SearchPost.styles';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import Feed from 'components/Feed/Feed';
import { UserInformationContext } from 'providers/UserInformationProvider';
import {
  EMPTY_PICTURE_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
} from 'mocks/dummyData/contents';

const SearchPost = () => {
  const FeedList = [
    NORMAL_CONTENT,
    EXCLUSIVE_CONTENT,
    EMPTY_PICTURE_CONTENT,
    SOLDOUT_CONTENT,
  ];
  const { userId } = useContext(UserInformationContext);
  return (
    <>
      <SearchHeader focusTab={1} />
      <Style.PostResultList>
        {FeedList.map((feed) => (
          <Feed feedData={feed} key={feed.postId} userId={userId} />
        ))}
      </Style.PostResultList>
    </>
  );
};

export default SearchPost;
