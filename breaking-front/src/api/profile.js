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

export const getFollowers = ({ queryKey }) => {
  const [, userId] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.PROFILE_FOLLOWERS(userId),
  });
};

export const getFollowings = ({ queryKey }) => {
  const [, userId] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.PROFILE_FOLLOWINGS(userId),
  });
};

export const postFollow = (userId) => {
  console.log(userId);
  return api({
    method: 'post',
    url: API_PATH.FOLLOW(userId),
  });
};

export const postUnFollow = (userId) => {
  return api({
    method: 'post',
    url: API_PATH.UNFOLLOW(userId),
  });
};
