import { API_PATH } from 'constants/path';
import api from 'api/api';

export const getMissionFeeds = async ({ pageParam = 0 }) => {
  const { data } = await api({
    method: 'get',
    url: API_PATH.BREAKING_MISSION_FEEDS(pageParam),
  });
  return {
    result: data,
    cursor: data[data.length - 1]?.missionId,
  };
};
