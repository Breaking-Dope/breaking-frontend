import { PATH } from 'constants/path';
import { rest } from 'msw';

export const handlers = [
  rest.get('https://test.api.com/test', (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.post(PATH.OAUTH2_SIGNUP, (req, res, ctx) => {
    console.log(req.body);
    return res(ctx.status(200));
  }),

  rest.post(PATH.OAUTH2_SIGNUP_VALIDATE_NICKNAME, (req, res, ctx) => {
    //중복체크
    if (req.body.nickname === '주기') return res(ctx.status(400));
    //올바른 형식 체크
    else return res(ctx.status(200));
  }),

  rest.post(PATH.OAUTH2_SIGNUP_VALIDATE_PHONE_NUMBER, (req, res, ctx) => {
    //중복체크
    if (req.body.phoneNumber === '01012345678')
      return res(
        ctx.status(400),
        ctx.json({ message: 'invalid phone number' })
      );
    //올바른 형식 체크
    else if (req.body.phoneNumber === '010') return res(ctx.status(400));
    else return res(ctx.status(200));
  }),

  rest.post(PATH.OAUTH2_SIGNUP_VALIDATE_EMAIL, (req, res, ctx) => {
    //중복체크
    if (req.body.email === 'kangju2000@naver.com')
      return res(ctx.status(400), ctx.json({ message: 'invalid email' }));
    //올바른 형식 체크
    else if (req.body.email === 'kangju2000') return res(ctx.status(400));
    else return res(ctx.status(200));
  }),

  rest.post(PATH.OAUTH2_SIGNIN_KAKAO, (req, res, ctx) => {
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

  rest.post(PATH.OAUTH2_SIGNIN_GOOGLE, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set('Authorization', 'Bearer abcdefghijklmnop'),
      ctx.json({
        profileImgURL: 'URL',
        nickname: '만두피',
      })
    );
  }),
];
