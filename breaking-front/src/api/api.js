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

export default api;
