import React, { useContext } from 'react';
import * as Style from 'pages/Search/SearchPost/SearchPost.styles';
import SearchHeader from 'pages/Search/components/SearchHeader/SearchHeader';
import Feed from 'components/Feed/Feed';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { NORMAL_USER } from 'mocks/dummyData/users';

const SearchPost = () => {
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
