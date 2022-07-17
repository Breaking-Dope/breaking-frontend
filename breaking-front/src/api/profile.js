import { API_PATH } from 'constants/path';
import api from './api';

export const getProfile = ({ queryKey }) => {
  const [, userId] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.PROFILE_DATA(userId),
  });
};
