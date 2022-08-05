import { API_PATH } from 'constants/path';
import api from 'api/api';

export const getFeeds = async ({ queryKey, pageParam = 0 }) => {
  const [, { sort, option }] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.FEEDS(pageParam, sort, option),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.postId,
  };
};

export const getFeedsSearch = async ({ queryKey, pageParam = 0 }) => {
  const [, { search, sort, option }] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.FEEDS_SEARCH(pageParam, search, sort, option),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.postId,
  };
};

export const getFeedsHashtag = async ({ queryKey, pageParam = 0 }) => {
  const [, { hashtag, sort, option }] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.FEEDS_HASHTAG(pageParam, hashtag, sort, option),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.postId,
  };
};
