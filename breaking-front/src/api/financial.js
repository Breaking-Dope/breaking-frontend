import { API_PATH } from 'constants/path';
import api from 'api/api';

export const getTransaction = async ({ pageParam = 0 }) => {
  const { data } = await api({
    method: 'get',
    url: API_PATH.PROFILE_TRANSACTION(pageParam),
  });

  return {
    result: data,
    cursor: data[data.length - 1]?.cursorId,
  };
};

export const postDeposit = (data) => {
  return api({
    method: 'post',
    url: API_PATH.FINANCIAL_DEPOSIT,
    data: data,
  });
};

export const postWithdraw = (data) => {
  return api({
    method: 'post',
    url: API_PATH.FINANCIAL_WITHDRAW,
    data: data,
  });
};
