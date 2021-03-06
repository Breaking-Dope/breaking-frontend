import { API_PATH } from 'constants/path';
import { rest } from 'msw';
import {
  EMPTY_PICTURE_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
} from 'mocks/dummyData/contents';
import {
  FOLLOWING_USER,
  NORMAL_USER,
  NO_FOLLOW_USER,
  NO_POSTCOUNT_USER,
  NO_PROFILEIMGURL_USER,
  NO_STATUSMSG_USER,
} from 'mocks/dummyData/users';

const writtenContents = [
  NORMAL_CONTENT,
  EXCLUSIVE_CONTENT,
  NORMAL_CONTENT,
  EMPTY_PICTURE_CONTENT,
  NORMAL_CONTENT,
  SOLDOUT_CONTENT,
  SOLDOUT_CONTENT,
];

const boughtContents = [
  EXCLUSIVE_CONTENT,
  SOLDOUT_CONTENT,
  SOLDOUT_CONTENT,
  SOLDOUT_CONTENT,
  SOLDOUT_CONTENT,
];

const bookmarkedContents = [
  NORMAL_CONTENT,
  NORMAL_CONTENT,
  EMPTY_PICTURE_CONTENT,
  NORMAL_CONTENT,
  NORMAL_CONTENT,
  NORMAL_CONTENT,
];

const followerList = [
  NORMAL_USER,
  NO_STATUSMSG_USER,
  NO_PROFILEIMGURL_USER,
  NO_POSTCOUNT_USER,
  NO_FOLLOW_USER,
  FOLLOWING_USER,
];

const followingList = [
  NORMAL_USER,
  NO_STATUSMSG_USER,
  NO_PROFILEIMGURL_USER,
  NO_POSTCOUNT_USER,
  NO_FOLLOW_USER,
  FOLLOWING_USER,
  NORMAL_USER,
  NORMAL_USER,
  NORMAL_USER,
  NORMAL_USER,
  NORMAL_USER,
  NORMAL_USER,
  NORMAL_USER,
  NORMAL_USER,
  NORMAL_USER,
  NORMAL_USER,
];

const userList = [
  NORMAL_USER,
  NO_STATUSMSG_USER,
  NO_PROFILEIMGURL_USER,
  NO_POSTCOUNT_USER,
  NO_FOLLOW_USER,
  FOLLOWING_USER,
];

export const profileHandlers = [
  rest.get(
    API_PATH.PROFILE_WRITTEN(':userId', '*', '*', '*'),
    (req, res, ctx) => {
      const soldOption = req.url.searchParams.get('sold-option');
      const data = writtenContents.filter((item) => {
        if (soldOption === 'unsold') return !item.isSold;
        else if (soldOption === 'sold') return item.isSold;
        else return item;
      });
      return res(ctx.status(200), ctx.json(data));
    }
  ),

  rest.get(
    API_PATH.PROFILE_BOUGHT(':userId', '*', '*', '*'),
    (req, res, ctx) => {
      const soldOption = req.url.searchParams.get('sold-option');
      const data = boughtContents.filter((item) => {
        if (soldOption === 'unsold') return !item.isSold;
        else if (soldOption === 'sold') return item.isSold;
        else return item;
      });
      return res(ctx.status(200), ctx.json(data));
    }
  ),

  rest.get(
    API_PATH.PROFILE_BOOKMARKED(':userId', '*', '*', '*'),
    (req, res, ctx) => {
      const soldOption = req.url.searchParams.get('sold-option');
      const data = bookmarkedContents.filter((item) => {
        if (soldOption === 'unsold') return !item.isSold;
        else if (soldOption === 'sold') return item.isSold;
        else return item;
      });
      return res(ctx.status(200), ctx.json(data));
    }
  ),

  rest.get(API_PATH.PROFILE_DATA(0), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(NORMAL_USER));
  }),

  rest.get(API_PATH.PROFILE_FOLLOWERS('*'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(followerList));
  }),
  rest.get(API_PATH.PROFILE_FOLLOWINGS('*'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(followingList));
  }),

  rest.get(API_PATH.PROFILE_DATA(':userId'), (req, res, ctx) => {
    const { userId } = req.params;
    const user = userList.filter((item) => item.userId === Number(userId));
    return res(ctx.status(200), ctx.json(...user));
  }),

  rest.post(API_PATH.PROFILE_FOLLOW(1), (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(API_PATH.PROFILE_UNFOLLOW(1), (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
