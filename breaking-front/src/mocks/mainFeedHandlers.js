import { API_PATH } from 'constants/path';
import { rest } from 'msw';

export const mainFeedHandlers = [
  rest.get(API_PATH.FEEDS('*', '*', '*'), (req, res, ctx) => {
    const sort = req.url.searchParams.get('sort');
    const option = req.url.searchParams.get('sold-option');
    if (sort === 'chronological')
      return res(
        ctx.status(200),
        ctx.json([
          {
            postId: '3',
            title: '최신순',
            region: '중구',
            thumbnailImgURL: '',
            likeCount: 999,
            postType: 'EXCLUSIVE',
            isSold: option === 'unsold' ? false : true,
            price: 10000,
            viewCount: 1000,
            userId: 1,
            profileImgURL: '',
            realName: '가나다',
            isLiked: false,
            isBookmarked: false,
            createdTime: new Date(),
          },
        ])
      );
    else if (sort === 'like')
      return res(
        ctx.status(200),
        ctx.json([
          {
            postId: '4',
            title: '좋아요순',
            region: '중구',
            thumbnailImgURL: '',
            likeCount: 99999,
            postType: 'EXCLUSIVE',
            isSold: option === 'unsold' ? false : true,
            price: 10000,
            viewCount: 1000,
            userId: 123,
            profileImgURL: '',
            realName: '가나다',
            isLiked: true,
            isBookmarked: false,
            createdTime: new Date(),
          },
        ])
      );
    else if (sort === 'view')
      return res(
        ctx.status(200),
        ctx.json([
          {
            postId: '3',
            title: '조회순',
            region: '중구',
            thumbnailImgURL: '',
            likeCount: 999,
            postType: 'EXCLUSIVE',
            isSold: option === 'unsold' ? false : true,
            price: 10000,
            viewCount: 99999,
            userId: 123,
            profileImgURL: '',
            realName: '가나다',
            isLiked: false,
            isBookmarked: false,
            createdTime: new Date(),
          },
          {
            postId: '4',
            title: '조회순',
            region: '중구',
            thumbnailImgURL: '',
            likeCount: 999,
            postType: 'EXCLUSIVE',
            isSold: option === 'unsold' ? false : true,
            price: 10000,
            viewCount: 99999,
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
];
