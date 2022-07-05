import axios from 'axios';
import { KAKAO_PATH, PATH } from 'constants/path';
import api from './api';

export const postAccessCode = (data) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const queryStringBody = Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURI(data[k]))
    .join('&');
  return axios({
    method: 'post',
    url: KAKAO_PATH.OAUTH_TOKEN,
    headers: headers,
    data: queryStringBody,
  });
};

export const postSignInWithKakao = (token) => {
  return api({
    method: 'post',
    url: PATH.OAUTH2_SIGNIN_KAKAO,
    data: token,
  });
};

export const postSignInWithGoogle = (token) => {
  return api({
    method: 'post',
    url: PATH.OAUTH2_SIGNIN_GOOGLE,
    data: token,
  });
};
