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
import UserCard from '../components/UserCard/UserCard';
const SearchUnified = () => {
  const FeedList = [
    {
      user: {
        profileImgURL: NORMAL_USER.profileImgURL,
        nickname: NORMAL_USER.nickname,
        userId: NORMAL_USER.userId,
      },
      location: {
        address: '서울 중구 장충동 2가 산 14-102',
        latitude: 37.55453653562958,
        longitude: 126.99981609553,
        region_1depth_name: '서울',
        region_2depth_name: '중구',
      },
      price: 123456,
      postType: 'CHARGED',
      createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
      isLiked: false,
      isBookmarked: false,
      isPurchasable: true,
      isAnonymous: true,
      isSold: false,
      isMyPost: false,
      viewCount: 1000000,
      soldCount: 5,
      likeCount: 1004,
    },
    {
      user: {
        profileImgURL: NORMAL_USER.profileImgURL,
        nickname: NORMAL_USER.nickname,
        userId: NORMAL_USER.userId,
      },
      location: {
        address: '서울 중구 장충동 2가 산 14-102',
        latitude: 37.55453653562958,
        longitude: 126.99981609553,
        region_1depth_name: '서울',
        region_2depth_name: '중구',
      },
      price: 123456,
      postType: 'CHARGED',
      createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
      isLiked: false,
      isBookmarked: false,
      isPurchasable: true,
      isAnonymous: true,
      isSold: false,
      isMyPost: false,
      viewCount: 1000000,
      soldCount: 5,
      likeCount: 1004,
    },
    {
      user: {
        profileImgURL: NORMAL_USER.profileImgURL,
        nickname: NORMAL_USER.nickname,
        userId: NORMAL_USER.userId,
      },
      location: {
        address: '서울 중구 장충동 2가 산 14-102',
        latitude: 37.55453653562958,
        longitude: 126.99981609553,
        region_1depth_name: '서울',
        region_2depth_name: '중구',
      },
      price: 123456,
      postType: 'CHARGED',
      createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
      isLiked: false,
      isBookmarked: false,
      isPurchasable: true,
      isAnonymous: true,
      isSold: false,
      isMyPost: false,
      viewCount: 1000000,
      soldCount: 5,
      likeCount: 1004,
    },
    {
      user: {
        profileImgURL: NORMAL_USER.profileImgURL,
        nickname: NORMAL_USER.nickname,
        userId: NORMAL_USER.userId,
      },
      location: {
        address: '서울 중구 장충동 2가 산 14-102',
        latitude: 37.55453653562958,
        longitude: 126.99981609553,
        region_1depth_name: '서울',
        region_2depth_name: '중구',
      },
      price: 123456,
      postType: 'CHARGED',
      createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
      isLiked: false,
      isBookmarked: false,
      isPurchasable: true,
      isAnonymous: true,
      isSold: false,
      isMyPost: false,
      viewCount: 1000000,
      soldCount: 5,
      likeCount: 1004,
    },
  ];

  const users = [
    NORMAL_USER,
    NO_PROFILEIMGURL_USER,
    FOLLOWING_USER,
    NO_PROFILEIMGURL_USER,
    NO_FOLLOW_USER,
  ];
  const { userId } = useContext(UserInformationContext);
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
        <Style.ViewAllButton>모두 보기</Style.ViewAllButton>
      </Style.UserResultLayout>
      <Style.PostResultLayout>
        <Style.PostResultTitle>게시글</Style.PostResultTitle>
        <Style.PostResultList>
          {FeedList.map((feed) => (
            <Feed feedData={feed} key={feed.postId} userId={userId} />
          ))}
        </Style.PostResultList>
        <Style.ViewAllButton>모두 보기</Style.ViewAllButton>
      </Style.PostResultLayout>
    </>
  );
};

export default SearchUnified;
