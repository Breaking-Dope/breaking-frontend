import { API_PATH } from 'constants/path';
import { rest } from 'msw';
import { NORMAL_USER, NO_STATUSMSG_USER } from 'mocks/dummyData/users';

export const financialHandlers = [
  rest.get(API_PATH.PROFILE_TRANSACTION, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          cursorId: 1,
          transactionDate: '2022-08-05 05:16:31.342251',
          transactionType: 'sell_post',
          amount: 3000,
          balance: 10000,
          postId: 2,
          postTitle: '폭로합니다.',
          targetUser: NORMAL_USER,
        },
        {
          cursorId: 2,
          transactionDate: '2022-08-05 05:14:31.342251',
          transactionType: 'buy_post',
          amount: 1000,
          balance: 7000,
          postId: 1,
          postTitle: '이 사건을 제보합니다.',
          targetUser: NO_STATUSMSG_USER,
        },
        {
          cursorId: 3,
          transactionDate: '2022-08-05 04:05:03.428062',
          transactionType: 'withdraw',
          amount: 2000,
          balance: 8000,
          postId: null,
          postTitle: null,
          targetUser: null,
        },
        {
          cursorId: 4,
          transactionDate: '2022-08-05 04:00:03.428062',
          transactionType: 'deposit',
          amount: 10000,
          balance: 10000,
          postId: null,
          postTitle: null,
          targetUser: null,
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
