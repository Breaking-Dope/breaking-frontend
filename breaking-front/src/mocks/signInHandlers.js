import { API_PATH } from 'constants/path';
import { rest } from 'msw';
import { NORMAL_USER } from 'mocks/dummyData/users';

export const signInHandlers = [
  rest.get(API_PATH.OAUTH2_VALIDATE_JWT, (req, res, ctx) => {
    return res.once(
      ctx.json({ code: 'BSE002', message: 'Access Token이 만료되었습니다.' }),
      ctx.status(401)
    );
  }),

  rest.get(API_PATH.OAUTH2_VALIDATE_JWT, (req, res, ctx) => {
    return res(ctx.json(NORMAL_USER), ctx.status(200));
  }),

  rest.get(API_PATH.REISSUE, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.cookie('authorization-refresh', '12312312312312312312e'),
      ctx.set({ Authorization: '1231901238102381209' })
    );
  }),

  rest.post(API_PATH.OAUTH2_SIGNIN_KAKAO, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        fullname: '만두피', //기존 사용자의 닉네임 혹은 이름

        username: '더미1', //각 서비스의 회원 정보 코드 -> 고유한 유저 정보

        email: 'email@email.com', //이메일

        profileImgURL: 'URL',
      })
    );
  }),

  rest.post(API_PATH.OAUTH2_SIGNIN_GOOGLE, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set('authorization', 'a2bcd412ed1!n32op'),
      ctx.cookie(
        'authorization-refresh',
        'asidjf98u2398ejsoijfd923hersacoiqwh98e'
      ),
      ctx.json(NORMAL_USER)
    );
  }),

  rest.get(API_PATH.OAUTH2_SIGNOUT, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
