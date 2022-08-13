import { API_PATH } from 'constants/path';
import { rest } from 'msw';

export const postEditHandlers = [
  rest.post(API_PATH.POST_EDIT('*'), (req, res, ctx) => {
    console.log(req.body);
    return res(ctx.delay(2000), ctx.status(200));
  }),
];
