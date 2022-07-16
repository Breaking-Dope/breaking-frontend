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
  OAUTH2_SIGNUP_VALIDATE_PHONE_NUMBER: '/oauth2/sign-up/validate-phone-number',
  OAUTH2_SIGNUP_VALIDATE_NICKNAME: '/oauth2/sign-up/validate-nickname',
  OAUTH2_SIGNUP_VALIDATE_EMAIL: '/oauth2/sign-up/validate-email',
  OAUTH2_SIGNIN_KAKAO: '/oauth2/sign-in/kakao',
  OAUTH2_SIGNIN_GOOGLE: '/oauth2/sign-in/google',
  OAUTH2_SIGNOUT: '/oauth2/sign-out',
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
