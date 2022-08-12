import { API_PATH } from 'constants/path';
import api from 'api/api';

export const putPostEdit = (data) => {
  return api({
    method: 'put',
    url: API_PATH.POST_EDIT,
    data: data,
  });
};
