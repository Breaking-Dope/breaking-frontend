import { API_PATH } from 'constants/path';
import api from 'api/api';

export const getProfile = ({ queryKey }) => {
  const [, userId] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.PROFILE_DATA(userId),
  });
};

export const getProfileWritten = async ({ queryKey, pageParam = 0 }) => {
  const [, { userId, option }] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.PROFILE_WRITTEN(userId, pageParam, option),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.postId,
  };
};

export const getProfileBought = async ({ queryKey, pageParam = 0 }) => {
  const [, { userId, option }] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.PROFILE_BOUGHT(userId, pageParam, option),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.postId,
  };
};

export const getProfileBookmarked = async ({ queryKey, pageParam = 0 }) => {
  const [, { userId, option }] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.PROFILE_BOOKMARKED(userId, pageParam, option),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.postId,
  };
};

export const getFollowers = async ({ queryKey, pageParam = 0 }) => {
  const [, userId] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.PROFILE_FOLLOWERS(userId, pageParam),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.cursorId,
  };
};

export const getFollowings = async ({ queryKey, pageParam = 0 }) => {
  const [, userId] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.PROFILE_FOLLOWINGS(userId, pageParam),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.cursorId,
  };
};

export const postFollow = (userId) => {
  return api({
    method: 'post',
    url: API_PATH.PROFILE_FOLLOW(userId),
  });
};

export const deleteUnFollow = (userId) => {
  return api({
    method: 'delete',
    url: API_PATH.PROFILE_UNFOLLOW(userId),
  });
};

export const deleteProfileWithdrawal = (userId) => {
  return api({
    method: 'delete',
    url: API_PATH.PROFILE_WITHDRAWAL(userId),
  });
};
