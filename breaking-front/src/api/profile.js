import { API_PATH } from 'constants/path';
import api from './api';

export const getProfile = ({ queryKey }) => {
  const [, userId] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.PROFILE_DATA(userId),
  });
};

export const getProfileWrriten = ({ queryKey }) => {
  const [, { userId, option = 'all' }] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.PROFILE_WRITTEN(userId, option),
  });
};

export const getProfileBought = ({ queryKey }) => {
  const [, { userId, option = 'all' }] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.PROFILE_BOUGHT(userId, option),
  });
};
export const getProfileBookmarked = ({ queryKey }) => {
  const [, { userId, option = 'all' }] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.PROFILE_BOOKMARKED(userId, option),
  });
};