const { default: axios } = require('axios');
const { DEVELOPMENT_BASE_URL, PRODUCTION_BASE_URL } = require('constants/path');

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

export default api;
