import { API_PATH } from 'constants/path';
import { rest } from 'msw';

export const handlers = [
  rest.get('https://test.api.com/test', (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.post(API_PATH.OAUTH2_SIGNUP, (req, res, ctx) => {
    console.log(req.body);
    return res(ctx.status(200));
  }),

  rest.get(
    API_PATH.OAUTH2_SIGNUP_VALIDATE_NICKNAME + '/:id',
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
    API_PATH.OAUTH2_SIGNUP_VALIDATE_PHONE_NUMBER + '/:id',
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

  rest.get(API_PATH.OAUTH2_SIGNUP_VALIDATE_EMAIL + '/:id', (req, res, ctx) => {
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
      ctx.set('Authorization', 'Bearer abcdefghijklmnop'),
      ctx.json({
        profileImgURL: 'URL',
        nickname: '만두피',
      })
    );
  }),
];
