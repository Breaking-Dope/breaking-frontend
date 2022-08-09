import { axios } from 'axios';
import {
  DEVELOPMENT_BASE_URL,
  PRODUCTION_BASE_URL,
  API_PATH,
} from 'constants/path';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV !== 'production'
      ? DEVELOPMENT_BASE_URL
      : PRODUCTION_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) return config;

    config.headers = {
      'Content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    console.log(error);
    if (
      error?.response?.status === 401 &&
      error?.response?.data?.code === 'BSE002'
    ) {
      const accessToken = localStorage.getItem('access_token');
      const refreshToken = document.cookie.match('refresh_token');
      try {
        const token = await axios({
          method: 'get',
          url: API_PATH.REISSUE,
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Authorization-Refresh': `Bearer ${refreshToken}`,
          },
        });
        console.log(token);
        if (token) {
          localStorage.setItem('access_token', token.headers.authorization);
        }
      } catch (error) {
        console.log(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
