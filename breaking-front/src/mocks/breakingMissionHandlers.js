import { API_PATH } from 'constants/path';
import { rest } from 'msw';
import {
  CLOSED_MISSION_FEED,
  NOT_OPEN_MISSION_FEED,
  OPEN_MISSION_FEED,
} from 'mocks/dummyData/mission';

export const breakingMissionHandlers = [
  rest.get(API_PATH.BREAKING_MISSION_FEEDS('*', '*'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json([NOT_OPEN_MISSION_FEED, OPEN_MISSION_FEED, CLOSED_MISSION_FEED])
    );
  }),
];
