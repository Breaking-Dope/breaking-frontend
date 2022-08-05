import { API_PATH } from 'constants/path';
import api from 'api/api';

export const postPostWrite = (data) => {
  return api({
    method: 'post',
    url: API_PATH.POST_WRITE,
    'Content-Type': 'multipart/form-data',
    data: data,
  });
};
