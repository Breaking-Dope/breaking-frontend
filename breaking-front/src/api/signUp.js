import { API_PATH } from 'constants/path';
import api from 'api/api';

export const postSignUp = (userData) => {
  return api({
    method: 'post',
    url: API_PATH.OAUTH2_SIGNUP,
    'Content-Type': 'multipart/form-data',
    data: userData,
  });
};

export const getProfileValidation = ({ queryKey }) => {
  const [, { validType, profileData }] = queryKey;

  return api({
    method: 'get',
    url: API_PATH.OAUTH2_SIGNUP_VALIDATE(validType, profileData),
  });
};

export const getJWTvalidation = () => {
  return api({
    method: 'get',
    url: API_PATH.OAUTH2_VALIDATE_JWT,
  });
};
