import { rest } from 'msw';

export const handlers = [
  rest.get('https://test.api.com/test', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
