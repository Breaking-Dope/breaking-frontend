import { API_PATH } from 'constants/path';
import { rest } from 'msw';

export const signUpHandlers = [
  rest.post(API_PATH.OAUTH2_SIGNUP, (req, res, ctx) => {
    console.log(req.body);
    return res(ctx.set('Authorization', 'abcdefghijklmnop'), ctx.status(200));
  }),

  rest.get(
    API_PATH.OAUTH2_SIGNUP_VALIDATE('nickname', ':id'),
    (req, res, ctx) => {
      //중복체크
      if (req.params.id === '주기')
        return res(
          ctx.status(400),
          ctx.json({ message: '사용중인 닉네임입니다.' })
        );

      //올바른 형식 체크
      if (req.params.id === '주')
        return res(
          ctx.status(400),
          ctx.json({ message: '닉네임 형식이 잘못되었습니다.' })
        );

      return res(ctx.status(200));
    }
  ),

  rest.get(
    API_PATH.OAUTH2_SIGNUP_VALIDATE('phone-number', ':id'),
    (req, res, ctx) => {
      //중복체크
      if (req.params.id === '01012345678')
        return res(
          ctx.status(400),
          ctx.json({ message: '사용중인 휴대폰번호입니다.' })
        );

      //올바른 형식 체크
      if (req.params.id === '010')
        return res(
          ctx.status(400),
          ctx.json({ message: '휴대폰번호 형식이 잘못되었습니다.' })
        );

      return res(ctx.status(200));
    }
  ),

  rest.get(API_PATH.OAUTH2_SIGNUP_VALIDATE('email', ':id'), (req, res, ctx) => {
    //중복체크
    if (req.params.id === 'kangju2000@naver.com')
      return res(
        ctx.status(400),
        ctx.json({ message: '사용중인 이메일입니다.' })
      );
    //올바른 형식 체크
    else if (req.params.id === 'kangju2000')
      return res(
        ctx.status(400),
        ctx.json({ message: '이메일 형식이 잘못되었습니다.' })
      );
    else return res(ctx.status(200));
  }),
];
