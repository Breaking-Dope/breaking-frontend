import { API_PATH } from 'constants/path';
import api from 'api/api';

export const postProfileData = () => {
  return api({
    method: 'post',
    url: API_PATH.OAUTH2_VALIDATE_JWT,
  });
};

export const putProfileEdit = (userData) => {
  return api({
    method: 'put',
    url: API_PATH.PROFILE_EDIT,
    'Content-Type': 'multipart/form-data',
    data: userData,
  });
};

export const getProfileDetailData = () => {
  return api({
    method: 'get',
    url: API_PATH.PROFILE_DETAIL_DATA,
  });
};
