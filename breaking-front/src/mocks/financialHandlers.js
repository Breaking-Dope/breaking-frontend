import { API_PATH } from 'constants/path';
import { rest } from 'msw';

export const financialHandlers = [
  rest.get(API_PATH.PROFILE_TRANSACTION, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          transactionTime: '2022-08-05 05:14:31.342251',
          transactionType: 'withdraw',
          amount: 1000,
          balance: 9000,
        },
        {
          transactionTime: '2022-08-05 04:00:03.428062',
          transactionType: 'deposit',
          amount: 10000,
          balance: 10000,
        },
      ])
    );
  }),
  rest.post(API_PATH.FINANCIAL_DEPOSIT, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(API_PATH.FINANCIAL_WITHDRAW, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
