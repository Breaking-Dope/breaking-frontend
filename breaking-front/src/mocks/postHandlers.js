import { API_PATH } from 'constants/path';
import { rest } from 'msw';
import { COMMENT_DATA, POST_DATA, REPLY_DATA } from 'mocks/dummyData/contents';
import {
  FOLLOWING_USER,
  NORMAL_USER,
  NO_FOLLOW_USER,
  NO_POSTCOUNT_USER,
  NO_PROFILEIMGURL_USER,
  NO_STATUSMSG_USER,
} from 'mocks/dummyData/users';

const userList = [
  {
    cursorId: 0,
    ...NORMAL_USER,
  },
  {
    cursorId: 1,
    ...NO_STATUSMSG_USER,
  },
  {
    cursorId: 2,
    ...NO_PROFILEIMGURL_USER,
  },
  {
    cursorId: 3,
    ...NO_POSTCOUNT_USER,
  },
  {
    cursorId: 4,
    ...NO_FOLLOW_USER,
  },
  {
    cursorId: 5,
    ...FOLLOWING_USER,
  },
];

export const postHandlers = [
  rest.get(API_PATH.POST_DATA(':postId'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(POST_DATA));
  }),

  rest.get(API_PATH.POST_COMMENT_DATA(':postId', '*'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(COMMENT_DATA));
  }),

  rest.get(API_PATH.POST_REPLY_DATA(':commentId', '*'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(REPLY_DATA));
  }),

  rest.get(API_PATH.POST_BOUGHT_LIST(':postId'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(userList));
  }),

  rest.get(API_PATH.POST_LIKE_LIST(':postId'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userList));
  }),

  rest.get(API_PATH.POST_DOWNLOAD_ALL_MEDIA(':postId'), (req, res, ctx) => {
    console.log('다운로드 완료');
    return res(ctx.status(200));
  }),

  rest.delete(API_PATH.POST_DELETE(':postId'), (req, res, ctx) => {
    console.log('게시글 삭제 성공');
    return res(ctx.status(200));
  }),

  rest.post(API_PATH.POST_BUY(':postId', ':userId'), (req, res, ctx) => {
    console.log('게시글 구매 성공');
    return res(ctx.status(200));
  }),

  rest.post(API_PATH.POST_LIKE(':postId'), (req, res, ctx) => {
    console.log('게시글 좋아요');
    return res(ctx.status(200));
  }),

  rest.delete(API_PATH.POST_LIKE_DELETE(':postId'), (req, res, ctx) => {
    console.log('게시글 좋아요 취소');
    return res(ctx.status(200));
  }),

  rest.post(API_PATH.POST_BOOKMARK(':postId'), (req, res, ctx) => {
    console.log('게시글 북마크');
    return res(ctx.status(200));
  }),

  rest.delete(API_PATH.POST_BOOKMARK_DELETE(':postId'), (req, res, ctx) => {
    console.log('게시글 북마크 취소');
    return res(ctx.status(200));
  }),

  rest.post(API_PATH.POST_ACTIVATE_PURCHASE(':postId'), (req, res, ctx) => {
    console.log('게시글 판매재개');
    return res(ctx.status(200));
  }),

  rest.delete(API_PATH.POST_DEACTIVATE_PURCHASE(':postId'), (req, res, ctx) => {
    console.log('게시글 판매중지');
    return res(ctx.status(200));
  }),

  rest.post(API_PATH.POST_HIDE(':postId'), (req, res, ctx) => {
    console.log('게시글 숨김');
    return res(ctx.status(200));
  }),

  rest.delete(API_PATH.POST_SHOW(':postId'), (req, res, ctx) => {
    console.log('게시글 숨김중지');
    return res(ctx.status(200));
  }),

  rest.post(API_PATH.POST_COMMENT_WRITE(':postId'), (req, res, ctx) => {
    console.log('댓글 등록 성공');
    return res(ctx.status(200));
  }),

  rest.post(API_PATH.POST_COMMENT_LIKE(':commentId'), (req, res, ctx) => {
    console.log('댓글 좋아요');
    return res(ctx.status(200));
  }),

  rest.delete(
    API_PATH.POST_COMMENT_LIKE_DELETE(':commentId'),
    (req, res, ctx) => {
      console.log('댓글 좋아요 취소');
      return res(ctx.status(200));
    }
  ),

  rest.post(API_PATH.POST_REPLY_WRITE(':commentId'), (req, res, ctx) => {
    console.log('대댓글 등록 성공');
    return res(ctx.status(200));
  }),

  rest.put(API_PATH.POST_COMMENT_EDIT(':commentId'), (req, res, ctx) => {
    console.log('댓글 수정 성공');
    return res(ctx.status(200));
  }),

  rest.delete(API_PATH.POST_COMMENT_DELETE(':commentId'), (req, res, ctx) => {
    console.log('댓글 삭제 성공');
    return res(ctx.status(200));
  }),
];
