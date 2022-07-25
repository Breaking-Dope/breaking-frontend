import { API_PATH } from 'constants/path';
import api from 'api/api';

export const getFeeds = ({ queryKey }) => {
  const [, { page, size, sort, option }] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.FEEDS(page, size, sort, option),
  });
};

export const getFeedsSearch = ({ queryKey }) => {
  const [, { page, size, search, sort, option }] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.FEEDS(page, size, search, sort, option),
  });
};

export const getFeedsHashtag = ({ queryKey }) => {
  const [, { page, size, hashtag, sort, option }] = queryKey;
  return api({
    method: 'get',
    url: API_PATH.FEEDS(page, size, hashtag, sort, option),
  });
};
