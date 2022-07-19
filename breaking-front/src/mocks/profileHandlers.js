import { API_PATH } from 'constants/path';
import { rest } from 'msw';

export const profileHandlers = [
  rest.get(API_PATH.PROFILE_DETAIL_DATA, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        profileImgURL:
          'https://cdn.pixabay.com/photo/2021/09/26/09/55/seal-6656983_960_720.jpg',
        realName: '강주혁',
        nickname: '주기',
        phoneNumber: '01012345678',
        email: 'kangju2000@naver.com',
        statusMsg: '안녕하세요!!',
        role: 'USER',
      })
    );
  }),

  rest.put(API_PATH.PROFILE_EDIT, (req, res, ctx) => {
    console.log(req.body);
    return res(ctx.status(200));
  }),
];
