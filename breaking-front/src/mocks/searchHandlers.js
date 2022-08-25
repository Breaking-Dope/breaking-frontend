import { API_PATH } from 'constants/path';
import { rest } from 'msw';
import {
  EMPTY_PICTURE_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
} from 'mocks/dummyData/contents';
import {
  FOLLOWING_USER,
  NORMAL_USER,
  NO_FOLLOW_USER,
  NO_POSTCOUNT_USER,
  NO_PROFILEIMGURL_USER,
  USER6,
} from 'mocks/dummyData/users';

const searchPostResult = [
  NORMAL_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  EMPTY_PICTURE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
  SOLDOUT_CONTENT,
  NORMAL_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  EMPTY_PICTURE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
  SOLDOUT_CONTENT,
  NORMAL_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  EMPTY_PICTURE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
  SOLDOUT_CONTENT,
];

const searchUserResult = [
  NORMAL_USER,
  USER6,
  FOLLOWING_USER,
  NO_FOLLOW_USER,
  NO_FOLLOW_USER,
  NO_POSTCOUNT_USER,
  NO_FOLLOW_USER,
  NO_FOLLOW_USER,
  NO_PROFILEIMGURL_USER,
  NO_FOLLOW_USER,
  NO_FOLLOW_USER,
];

export const searchHandlers = [
  rest.get(API_PATH.SEARCH(':content', '*', '*'), (req, res, ctx) => {
    const size = req.url.searchParams.get('size');
    return res(
      ctx.delay(2000),
      ctx.json(searchPostResult.slice(0, size)),
      ctx.status(200)
    );
  }),
  rest.get(API_PATH.SEARCH_HASHTAG(':content', '*', '*'), (req, res, ctx) => {
    const size = req.url.searchParams.get('size');
    return res(
      ctx.delay(2000),
      ctx.json(searchPostResult.slice(0, size)),
      ctx.status(200)
    );
  }),
  rest.get(API_PATH.SEARCH_USER(':content', '*', '*'), (req, res, ctx) => {
    const size = req.url.searchParams.get('size');
    return res(
      ctx.delay(2000),
      ctx.json(searchUserResult.slice(0, size)),
      ctx.status(200)
    );
  }),
];
