export const PAGE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  KAKAO_LOGIN: 'login/kakao',
  GOOGLE_LOGIN: 'login/google',
  SIGNUP: '/signup',
  PROFILE: (userId) => `/profile/${userId}`,
  TRANSACTION: '/transaction',
  PROFILE_EDIT: '/profile/edit',
  POST: (postId) => `/post/${postId}`,
};

export const API_PATH = {
  OAUTH2_SIGNUP: '/oauth2/sign-up',
  OAUTH2_SIGNUP_VALIDATE: (validType, profileData) =>
    `/oauth2/sign-up/validate-${validType}/${profileData}`,
  OAUTH2_SIGNIN_KAKAO: '/oauth2/sign-in/kakao',
  OAUTH2_SIGNIN_GOOGLE: '/oauth2/sign-in/google',
  OAUTH2_SIGNOUT: '/oauth2/sign-out',
  OAUTH2_VALIDATE_JWT: '/oauth2/validate-jwt',
  PROFILE_DETAIL_DATA: '/profile/detail',
  PROFILE_EDIT: '/profile',
  PROFILE_DATA: (userId) => `/profile/${userId}`,
  PROFILE_FOLLOW: (userId) => `/follow/${userId}`,
  PROFILE_UNFOLLOW: (userId) => `/follow/${userId}`,
  PROFILE_WRITTEN: (userId, option = 'all') =>
    `/feed/user/${userId}/write?sold-option=${option}`,
  PROFILE_BOUGHT: (userId, option = 'all') =>
    `/feed/user/${userId}/buy?sold-option=${option}`,
  PROFILE_BOOKMARKED: (userId, option = 'all') =>
    `/feed/user/${userId}/bookmark?sold-option=${option}`,
  PROFILE_FOLLOWINGS: (userId) => `/follow/following/${userId}`,
  PROFILE_FOLLOWERS: (userId) => `/follow/follower/${userId}`,
  PROFILE_TRANSACTION: (userId) => `/profile/${userId}/transaction`,
  PROFILE_WITHDRAWAL: (userId) => `/profile/${userId}`,
  FEEDS: (page, size, sort = 'chronological', option = 'all') =>
    `/feeds?page=${page}&size=${size}&sort=${sort}&sold-option=${option}`,
  FEEDS_SEARCH: (page, size, search, sort = 'chronological', option = 'all') =>
    `/feeds?page=${page}&size=${size}&search=${search}&sort=${sort}&sold-option=${option}`,
  FEEDS_HASHTAG: (
    page,
    size,
    hashtag,
    sort = 'chronological',
    option = 'all'
  ) =>
    `/feeds?page=${page}&size=${size}&hashtag=${hashtag}&sort=${sort}&sold-option=${option}`,
  POST_WRITE: '/post',
  POST_DATA: (postId) => `/post/${postId}`,
  POST_EDIT: (postId) => `/post/${postId}`,
  POST_DELETE: (postId) => `/post/${postId}`,
  POST_LIKE: (postId) => `/post/${postId}/like`,
  POST_LIKE_DELETE: (postId) => `/post/${postId}/like`,
  POST_BOOKMARK: (postId) => `/post/${postId}/bookmark`,
  POST_BOOKMARK_DELETE: (postId) => `/post/${postId}/bookmark`,
  POST_LIKE_LIST: (postId) => `/post/${postId}/like-list`,
  POST_BOUGHT_LIST: (postId) => `/post/${postId}/buy-list`,
  POST_BUY: (postId, userId) => `/post/${postId}/purchase/${userId}`,
  POST_COMMENT_DATA: (postId, cursorId, size) =>
    `/post/${postId}/comment?cursor=${cursorId}&size=${size}`,
  POST_REPLY_DATA: (commentId, cursorId, size) =>
    `/post/reply/${commentId}?cursor=${cursorId}&size=${size}`,
  POST_COMMENT_WRITE: (postId) => `/post/${postId}/comment`,
  POST_REPLY_WRITE: (commentId) => `/post/comment/${commentId}/reply`,
  POST_COMMENT_EDIT: (commentId) => `/post/comment/${commentId}`,
  POST_COMMENT_DELETE: (commentId) => `/post/comment/${commentId}`,
  POST_COMMENT_LIKE: (commentId) => `/post/comment/${commentId}/like`,
  POST_COMMENT_LIKE_DELETE: (commentId) => `/post/comment/${commentId}/like`,
  POST_COMMENT_LIKED_LIST: (commentId) => `/post/comment/${commentId}like-list`,
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

export const DEVELOPMENT_BASE_URL = 'http://localhost:3000';

export const PRODUCTION_BASE_URL = 'https://team-dope.link:8443';
