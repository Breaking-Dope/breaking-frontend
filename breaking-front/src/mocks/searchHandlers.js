import { API_PATH } from 'constants/path';
import { rest } from 'msw';
import {
  EMPTY_PICTURE_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
} from './dummyData/contents';

const searchResult = [
  NORMAL_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  EMPTY_PICTURE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
  SOLDOUT_CONTENT,
];

export const searchHandlers = [
  rest.get(API_PATH.SEARCH(':content', '*', '*'), (req, res, ctx) => {
    console.log(req.body);
    return res(ctx.delay(2000), ctx.json(searchResult), ctx.status(200));
  }),
  rest.get(API_PATH.SEARCH_HASHTAG(':content', '*', '*'), (req, res, ctx) => {
    console.log(req.body);
    return res(ctx.delay(2000), ctx.json(searchResult), ctx.status(200));
  }),
  rest.get(API_PATH.SEARCH_USER(':content', '*', '*'), (req, res, ctx) => {
    console.log(req.body);
    return res(ctx.delay(2000), ctx.json(searchResult), ctx.status(200));
  }),
];
