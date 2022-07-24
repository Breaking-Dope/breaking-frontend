import {
  NORMAL_USER,
  NO_PROFILEIMGURL_USER,
  NO_POSTCOUNT_USER,
  NO_FOLLOW_USER,
  NO_STATUSMSG_USER,
} from 'mocks/dummyData/users';

export const NORMAL_CONTENT = {
  postId: 1,
  title: '사진이 아주 이뻐요',
  region: '게더타운',
  thumbnailImgURL:
    'https://cdn.pixabay.com/photo/2022/04/19/09/08/flowers-7142409_960_720.jpg',
  likeCount: 3,
  postType: 'charged',
  isSold: false,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NO_FOLLOW_USER.profileImgURL,
  nickname: NO_FOLLOW_USER.nickname,
  isLiked: true,
  isBookmarked: false,
  createdTime: new Date(),
};

export const EXCLUSIVE_CONTENT = {
  postId: 2,
  title: '사진이 아주 이뻐요',
  region: '남극',
  thumbnailImgURL:
    'https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179_960_720.jpg',
  likeCount: 10,
  postType: 'exclusive',
  isSold: false,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NORMAL_USER.profileImgURL,
  nickname: NORMAL_USER.nickname,
  isLiked: true,
  isBookmarked: false,
  createdTime: new Date(),
};

export const EMPTY_PICTURE_CONTENT = {
  postId: 3,
  title: '빈 이미지',
  region: '서울시',
  thumbnailImgURL: '',
  likeCount: 0,
  postType: 'charged',
  isSold: false,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NO_POSTCOUNT_USER.profileImgURL,
  nickname: NO_POSTCOUNT_USER.nickname,
  isLiked: false,
  isBookmarked: true,
  createdTime: new Date(),
};

export const SOLDOUT_CONTENT = {
  postId: 4,
  title: '팔린글',
  region: '서울시',
  thumbnailImgURL: '',
  likeCount: 0,
  postType: 'exclusive',
  isSold: true,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NO_PROFILEIMGURL_USER.profileImgURL,
  nickname: NO_PROFILEIMGURL_USER.nickname,
  isLiked: false,
  isBookmarked: true,
  createdTime: new Date(),
};

export const FREE_CONTNET = {
  postId: 5,
  title: '공짜글',
  region: '경기도',
  thumbnailImgURL:
    'https://cdn.pixabay.com/photo/2022/06/02/00/04/dog-7236774_960_720.jpg',
  likeCount: 0,
  postType: 'free',
  isSold: true,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NO_STATUSMSG_USER.profileImgURL,
  nickname: NO_STATUSMSG_USER.nickname,
  isLiked: false,
  isBookmarked: true,
  createdTime: new Date(),
};
