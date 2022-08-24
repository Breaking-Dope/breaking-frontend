import { API_PATH } from 'constants/path';
import api from 'api/api';

export const getSearch = async ({ queryKey, pageParam = 0 }) => {
  const [, content, size = 10] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.SEARCH(content, size, pageParam),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.cursorId,
  };
};

export const getSearchHashtag = async ({ queryKey, pageParam = 0 }) => {
  const [, content, size = 10] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.SEARCH_HASHTAG(content, size, pageParam),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.cursorId,
  };
};

export const getSearchUser = async ({ queryKey, pageParam = 0 }) => {
  const [, content, size = 10] = queryKey;
  const { data } = await api({
    method: 'get',
    url: API_PATH.SEARCH_USER(content, size, pageParam),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.cursorId,
  };
};
