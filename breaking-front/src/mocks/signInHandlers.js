import { API_PATH } from 'constants/path';
import { rest } from 'msw';
import { NORMAL_USER } from 'mocks/dummyData/users';

export const signInHandlers = [
  rest.get(API_PATH.OAUTH2_VALIDATE_JWT, (req, res, ctx) => {
    return res(ctx.json(NORMAL_USER), ctx.status(200));
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
      ctx.set('Authorization', 'a2bcd412ed1!n32op'),
      ctx.json(NORMAL_USER)
    );
  }),

  rest.get(API_PATH.OAUTH2_SIGNOUT, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
