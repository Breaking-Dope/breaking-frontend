import axios from 'axios';
import { API_PATH } from 'constants/path';
import api from 'api/api';

export const postAccessCode = (data) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const queryStringBody = Object.keys(data.data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURI(data.data[k]))
    .join('&');
  return axios({
    method: 'post',
    url: data.url,
    headers: headers,
    data: queryStringBody,
  });
};

export const postSignInWithKakao = (token) => {
  return api({
    method: 'post',
    url: API_PATH.OAUTH2_SIGNIN_KAKAO,
    data: token,
  });
};

export const postSignInWithGoogle = (token) => {
  return api({
    method: 'post',
    url: API_PATH.OAUTH2_SIGNIN_GOOGLE,
    data: token,
  });
};
