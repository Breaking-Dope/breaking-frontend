import axios from 'axios';
import { KAKAO_PATH } from 'constants/path';

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
