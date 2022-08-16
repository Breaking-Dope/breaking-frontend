import axios from 'axios';
import {
  DEVELOPMENT_BASE_URL,
  PRODUCTION_BASE_URL,
  API_PATH,
  PAGE_PATH,
} from 'constants/path';
import { useNavigate } from 'react-router-dom';

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
      authorization: `Bearer ${accessToken}`,
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
      try {
        const originalRequest = error.config;
        const token = await axios({
          method: 'get',
          url: API_PATH.REISSUE,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        });
        if (token) {
          localStorage.setItem('access_token', token.headers.authorization);
          return api.request(originalRequest);
        }
      } catch (error) {
        const navigate = useNavigate();
        alert('세션이 만료되었습니다 다시 로그인해 주시기 바랍니다.');
        navigate(PAGE_PATH.LOGIN);
      }
    }

    return Promise.reject(error);
  }
);
export default api;
