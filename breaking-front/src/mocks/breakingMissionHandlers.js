import { API_PATH } from 'constants/path';
import { rest } from 'msw';
import {
  CLOSED_MISSION_FEED,
  MISSION_POST,
  NOT_OPEN_MISSION_FEED,
  OPEN_MISSION_FEED,
} from 'mocks/dummyData/mission';
import {
  EMPTY_PICTURE_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
} from 'mocks/dummyData/contents';

export const breakingMissionHandlers = [
  rest.get(API_PATH.BREAKING_MISSION_FEEDS('*', '*'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json([NOT_OPEN_MISSION_FEED, OPEN_MISSION_FEED, CLOSED_MISSION_FEED])
    );
  }),

  rest.get(
    API_PATH.BREAKING_MISSION_RELATION_FEEDS(':missionId', '*', '*'),
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json([
          NORMAL_CONTENT,
          EXCLUSIVE_CONTENT,
          EMPTY_PICTURE_CONTENT,
          SOLDOUT_CONTENT,
        ])
      );
    }
  ),

  rest.get(API_PATH.BREAKING_MISSION_POST(':missionId'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MISSION_POST));
  }),
];
