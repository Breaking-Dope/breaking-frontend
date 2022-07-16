export const PAGE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  KAKAO_LOGIN: 'login/kakao',
  GOOGLE_LOGIN: 'login/google',
  SIGNUP: '/signup',
  PROFILE: '/profile',
  TRANSACTION: '/transaction',
  PROFILE_EDIT: '/profile/edit',
};

export const API_PATH = {
  OAUTH2_SIGNUP: '/oauth2/sign-up',
  OAUTH2_SIGNUP_VALIDATE: (validType, profileData) =>
    `/oauth2/sign-up/validate-${validType}/${profileData}`,
  OAUTH2_SIGNIN_KAKAO: '/oauth2/sign-in/kakao',
  OAUTH2_SIGNIN_GOOGLE: '/oauth2/sign-in/google',
  OAUTH2_SIGNOUT: '/oauth2/sign-out',
  OAUTH2_VALIDATE_JWT: '/oauth2/validate-jwt',
  PROFILE_EDIT: '/profile',
  FOLLOW: (userId) => `/follow/${userId}`,
  UNFOLLOW: (userId) => `/follow/${userId}`,
  PROFILE_DATA: (userId) => `/profile/${userId}`,
  PROFILE_WRITE_POST: (userId) => `/profile/${userId}/write`,
  PROFILE_BUY_POST: (userId) => `/profile/${userId}/buy`,
  PROFILE_BOOKMARK_POST: (userId) => `/profile/${userId}/bookmark`,
  PROFILE_FOLLOWINGS: (userId) => `/follow/following/${userId}`,
  PROFILE_FOLLOWERS: (userId) => `/follow/follower/${userId}`,
  PROFILE_TRANSACTION: (userId) => `/profile/${userId}/transaction`,
  PROFILE_WITHDRAWAL: (userId) => `/profile/${userId}`,
  FILTER_PROFILE_POST_ALL: (userId) =>
    `/profile/${userId}?my-page-sold-option=all`,
  FILTER_PROFILE_POST_SOLD: (userId) =>
    `/profile/${userId}?my-page-sold-option=sold`,
  FILTER_PROFILE_POST_UNSOLD: (userId) =>
    `/profile/${userId}?my-page-sold-option=unsold`,
  FEEDS: (page, size) => `/feeds?page=${page}&size=${size}`,
  FEEDS_SEARCH: (page, size, search) =>
    `/feeds?page=${page}&size=${size}&search=${search}`,
  FEEDS_HASHTAG: (page, size, hashtag) =>
    `/feeds?page=${page}&size=${size}&hashtag=${hashtag}`,
  ADD_POST: '/post',
  EDIT_POST: (postId) => `/post/${postId}`,
  DELETE_POST: (postId) => `/post/${postId}`,
  POST_LIKE: (postId) => `/post/like/${postId}`,
  POST_BOOKMARK: (postId) => `/post/${postId}/bookmark`,
  POST_LIKE_LIST: (postId) => `/post/likelist/${postId}`,
  POST_BUY_LIST: (postId) => `/post/buylist/${postId}`,
  POST_BUY: (postId, userId) => `/post/${postId}/purchase/${userId}`,
  POST_COMMENT: (postId, userId) => `/post/${postId}/comment/${userId}`,
  POST_COMMENT_LIKE: (commentId) => `/post/comment/${commentId}/like`,
  POST_COMMENT_LIKE_LIST: (commentId) => `/post/comment/likelist/${commentId}`,
  POST_COMMENT_EDIT: (commentId) => `/post/comment/${commentId}`,
  POST_COMMENT_DELETE: (commentId) => `/post/comment/${commentId}`,
  GET_PROFILE_IMAGE: (userId) => `/resource/profile-img/${userId}`,
  GET_POST_THUMBNAIL: (postId) => `/resource/thumbnail/${postId}`,
  GET_POST_MEDIA: (postId) => `/resource/post/media/${postId}`,
  BREAKING_MISSION: '/breaking-mission',
  BREAKING_SPOT: '/breaking-spot',
};

export const KAKAO_PATH = {
  REDIRECT_URL: 'http://localhost:3000/login/kakao',
  OAUTH_TOKEN: 'https://kauth.kakao.com/oauth/token',
};

export const GOOGLE_PATH = {
  REDIRECT_URL: 'http://localhost:3000/login/google',
  OAUTH_TOKEN: 'https://oauth2.googleapis.com/token',
};

export const DEVELOPMENT_BASE_URL = 'http://localhost:3000/';

export const PRODUCTION_BASE_URL = 'https://team-dope.link:8443/';
