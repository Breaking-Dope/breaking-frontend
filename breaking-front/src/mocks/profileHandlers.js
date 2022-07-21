import { API_PATH } from 'constants/path';
import { rest } from 'msw';

export const profileHandlers = [
  rest.get(API_PATH.PROFILE_WRITTEN(0, 'all'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          postId: '1',
          title: '~~~사건',
          region: '중구',
          thumbnailImgURL:
            'https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179_960_720.jpg',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
        {
          postId: '2',
          title: '~~~사건',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
      ])
    );
  }),

  rest.get(API_PATH.PROFILE_BOUGHT(0, 'all'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          postId: '3',
          title: '제목이다',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
        {
          postId: '4',
          title: '~~~다른제목',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
      ])
    );
  }),

  rest.get(API_PATH.PROFILE_BOOKMARKED(0, 'all'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          postId: '6',
          title: '~~~사건',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
        {
          postId: '7',
          title: '~~~사건',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
        {
          postId: '8',
          title: '~~~사건',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
        {
          postId: '9',
          title: '~~~사건',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
      ])
    );
  }),

  rest.get(API_PATH.PROFILE_DATA(0), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 0,
        profileImgURL: '',
        nickname: '만두피',
        email: '',
        realName: '',
        role: '',
        statusMsg: '안녕하세요',
        followerCount: 30,
        followingCount: 30,
        postCount: 5,
        isFollowing: false,
      })
    );
  }),

  rest.get(API_PATH.PROFILE_FOLLOWERS(0), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: '32',
          nickname: '주기',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
        {
          userId: '23',
          nickname: '자기',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
        {
          userId: '65',
          nickname: '저기',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
      ])
    );
  }),
  rest.get(API_PATH.PROFILE_FOLLOWINGS(0), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: '32',
          nickname: '만두피',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
        {
          userId: '23',
          nickname: '천두피',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
        {
          userId: '65',
          nickname: '백두피',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
      ])
    );
  }),

  rest.get(API_PATH.PROFILE_WRITTEN(1, 'all'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          postId: '1',
          title: '~~~사건',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
        {
          postId: '2',
          title: '~~~사건',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
      ])
    );
  }),
  rest.get(API_PATH.PROFILE_WRITTEN(1, 'sold'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          postId: '1',
          title: '팔린글',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
        {
          postId: '2',
          title: '~~~팔렸어요',
          region: '중구',
          thumbnailImgURL: '',
          likeCount: 999,
          postType: 'EXCLUSIVE',
          isSold: false,
          price: 10000,
          viewCount: 1000,
          userId: 123,
          profileImgURL: '',
          realName: '가나다',
          isLiked: false,
          isBookmarked: false,
          createdTime: new Date(),
        },
      ])
    );
  }),

  rest.get(API_PATH.PROFILE_DATA(1), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 0,
        profileImgURL: '',
        nickname: '만두피',
        email: '',
        realName: '',
        role: '',
        statusMsg: '안녕하세요',
        followerCount: 30,
        followingCount: 30,
        postCount: 5,
        isFollowing: false,
      })
    );
  }),

  rest.get(API_PATH.PROFILE_FOLLOWERS(1), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: '32',
          nickname: '주기',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
        {
          userId: '23',
          nickname: '자기',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
        {
          userId: '65',
          nickname: '저기',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
      ])
    );
  }),
  rest.get(API_PATH.PROFILE_FOLLOWINGS(1), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: '32',
          nickname: '만두피',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
        {
          userId: '23',
          nickname: '천두피',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
        {
          userId: '65',
          nickname: '백두피',
          statusMsg: '안녕하세요',
          profileImgURL: '',
        },
      ])
    );
  }),

  rest.post(API_PATH.FOLLOW(1), (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(API_PATH.UNFOLLOW(1), (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
