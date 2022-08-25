export const PAGE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  KAKAO_LOGIN: 'login/kakao',
  GOOGLE_LOGIN: 'login/google',
  SIGNUP: '/signup',
  PROFILE: (userId) => `/profile/${userId}`,
  FINANCIAL: '/financial',
  PROFILE_EDIT: '/profile/edit',
  POST: (postId) => `/post/${postId}`,
  POST_WRITE: '/post/write',
  POST_EDIT: (postId) => `/post/${postId}/edit`,
  SEARCH: `/search`,
  SEARCH_POST: `/search/post`,
  SEARCH_HASHTAG: `/search/hashtag`,
  SEARCH_USER: `/search/user`,
};

export const API_PATH = {
  REISSUE: '/reissue',
  OAUTH2_SIGNUP: '/oauth2/sign-up',
  OAUTH2_SIGNUP_VALIDATE: (validType, profileData) =>
    `/oauth2/sign-up/validate-${validType}/${profileData}`,
  OAUTH2_SIGNIN_KAKAO: '/oauth2/sign-in/kakao',
  OAUTH2_SIGNIN_GOOGLE: '/oauth2/sign-in/google',
  OAUTH2_SIGNOUT: '/oauth2/sign-out',
  OAUTH2_VALIDATE_JWT: '/oauth2/validate-jwt',
  FINANCIAL_DEPOSIT: '/financial/deposit',
  FINANCIAL_WITHDRAW: '/financial/withdraw',
  PROFILE_TRANSACTION: (cursor, size = 10) =>
    `/profile/transaction?cursor=${cursor}&size=${size}`,
  PROFILE_DETAIL_DATA: '/profile/detail',
  PROFILE_EDIT: '/profile',
  PROFILE_DATA: (userId) => `/profile/${userId}`,
  PROFILE_WRITTEN: (userId, cursor, option = 'all', size = 10) =>
    `/feed/user/${userId}/write?cursor=${cursor}&size=${size}&sold-option=${option}`,
  PROFILE_BOUGHT: (userId, cursor, option = 'all', size = 10) =>
    `/feed/user/${userId}/buy?cursor=${cursor}&size=${size}&sold-option=${option}`,
  PROFILE_BOOKMARKED: (userId, cursor, option = 'all', size = 10) =>
    `/feed/user/${userId}/bookmark?cursor=${cursor}&size=${size}&sold-option=${option}`,
  PROFILE_FOLLOW: (userId) => `/follow/${userId}`,
  PROFILE_UNFOLLOW: (userId) => `/follow/${userId}`,
  PROFILE_FOLLOWINGS: (userId, cursor, size = 10) =>
    `/follow/following/${userId}?cursor=${cursor}&size=${size}`,
  PROFILE_FOLLOWERS: (userId, cursor, size = 10) =>
    `/follow/follower/${userId}?cursor=${cursor}&size=${size}`,
  PROFILE_WITHDRAWAL: (userId) => `/profile/${userId}`,
  FEEDS: (cursor, sort = 'chronological', option = 'all', size = '10') =>
    `/feed?cursor=${cursor}&size=${size}&sort=${sort}&sold-option=${option}`,
  FEEDS_SEARCH: (
    cursor,
    search,
    sort = 'chronological',
    option = 'all',
    size = '10'
  ) =>
    `/feed?cursor=${cursor}&size=${size}&search=${search}&sort=${sort}&sold-option=${option}`,
  FEEDS_HASHTAG: (
    cursor,
    hashtag,
    sort = 'chronological',
    option = 'all',
    size = '10'
  ) =>
    `/feed?cursor=${cursor}&size=${size}&hashtag=${hashtag}&sort=${sort}&sold-option=${option}`,
  POST_WRITE: '/post',
  POST_DATA: (postId) => `/post/${postId}`,
  POST_EDIT: (postId) => `/post/${postId}`,
  POST_DELETE: (postId) => `/post/${postId}`,
  POST_LIKE: (postId) => `/post/${postId}/like`,
  POST_LIKE_DELETE: (postId) => `/post/${postId}/like`,
  POST_BOOKMARK: (postId) => `/post/${postId}/bookmark`,
  POST_BOOKMARK_DELETE: (postId) => `/post/${postId}/bookmark`,
  POST_ACTIVATE_PURCHASE: (postId) => `/post/${postId}/activate-purchase`,
  POST_DEACTIVATE_PURCHASE: (postId) => `/post/${postId}/deactivate-purchase`,
  POST_LIKE_LIST: (postId, cursor, size = '10') =>
    `/post/${postId}/like-list?cursor=${cursor}&size=${size}`,
  POST_BOUGHT_LIST: (postId, cursor, size = '10') =>
    `/post/${postId}/buy-list?cursor=${cursor}&size=${size}`,
  POST_BUY: (postId) => `/post/${postId}/purchase`,
  POST_COMMENT_DATA: (postId, cursor, size = '10') =>
    `/post/${postId}/comment?cursor=${cursor}&size=${size}`,
  POST_REPLY_DATA: (commentId, cursor, size = '11') =>
    `/post/comment/${commentId}/reply?cursor=${cursor}&size=${size}`,
  POST_COMMENT_WRITE: (postId) => `/post/${postId}/comment`,
  POST_REPLY_WRITE: (commentId) => `/post/comment/${commentId}/reply`,
  POST_COMMENT_EDIT: (commentId) => `/post/comment/${commentId}`,
  POST_COMMENT_DELETE: (commentId) => `/post/comment/${commentId}`,
  POST_COMMENT_LIKE: (commentId) => `/post/comment/${commentId}/like`,
  POST_COMMENT_LIKE_DELETE: (commentId) => `/post/comment/${commentId}/like`,
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
