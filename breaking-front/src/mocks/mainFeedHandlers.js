import { API_PATH } from 'constants/path';
import { rest } from 'msw';

export const mainFeedHandlers = [
  rest.get(API_PATH.FEEDS('*', '*', '*'), (req, res, ctx) => {
    const sort = req.url.searchParams.get('sort');
    const option = req.url.searchParams.get('sold-option');
    if (sort === 'chronological')
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json([
          {
            postId: '3',
            title:
              '이 피드는 최신순을 보여주기 위한 피드입니다. 자세하게 보려면 클릭해주세요',
            location: {
              address: '서울 중구 장충동 2가 산 14-102',
              longitude: 12.1234,
              latitude: 12.12345,
              region_1depth_name: '서울',
              region_2depth_name: '중구',
            },
            thumbnailImgURL: '',
            likeCount: 12345678,
            commentCount: 123,
            postType: 'EXCLUSIVE',
            isSold: option === 'unsold' ? false : true,
            price: 1223000,
            viewCount: 123333,
            user: {
              userId: 1,
              profileImgURL: '',
              nickname: '가나다',
              phoneNumber: '',
            },
            isLiked: false,
            isBookmarked: false,
            createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
            isAnonymous: false,
            isMyPost: false,
            isPurchasable: true,
          },
        ])
      );
    else if (sort === 'like')
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json([
          {
            postId: '4',
            title: '좋아요순',
            location: {
              address: '서울 중구 장충동 2가 산 14-102',
              longitude: 12.1234,
              latitude: 12.12345,
              region_1depth_name: '서울',
              region_2depth_name: '중구',
            },
            thumbnailImgURL: '',
            likeCount: 99999,
            commentCount: 123,
            postType: 'EXCLUSIVE',
            isSold: option === 'unsold' ? false : true,
            price: 10000,
            viewCount: 1000,
            user: {
              userId: 1,
              profileImgURL: '',
              nickname: '가나다',
              phoneNumber: '',
            },
            isLiked: true,
            isBookmarked: false,
            createdDate: new Date(Date.now() - 60 * 60 * 1000),
            isAnonymous: false,
            isMyPost: false,
            isPurchasable: true,
          },
        ])
      );
    else if (sort === 'view')
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json([
          {
            postId: '3',
            title: '조회순',
            location: {
              address: '서울 중구 장충동 2가 산 14-102',
              longitude: 12.1234,
              latitude: 12.12345,
              region_1depth_name: '서울',
              region_2depth_name: '중구',
            },
            thumbnailImgURL: '',
            likeCount: 999,
            commentCount: 123,
            postType: 'EXCLUSIVE',
            isSold: option === 'unsold' ? false : true,
            price: 10000,
            viewCount: 99999,
            user: {
              userId: 1,
              profileImgURL: '',
              nickname: '가나다',
              phoneNumber: '',
            },
            isLiked: false,
            isBookmarked: false,
            createdDate: new Date(Date.now() - 60 * 1000),
            isAnonymous: false,
            isMyPost: false,
            isPurchasable: true,
          },
          {
            postId: '4',
            title: '조회순',
            location: {
              address: '서울 중구 장충동 2가 산 14-102',
              longitude: 12.1234,
              latitude: 12.12345,
              region_1depth_name: '서울',
              region_2depth_name: '중구',
            },
            thumbnailImgURL: '',
            likeCount: 999,
            commentCount: 123,
            postType: 'EXCLUSIVE',
            isSold: option === 'unsold' ? false : true,
            price: 10000,
            viewCount: 99999,
            user: {
              userId: 1,
              profileImgURL: '',
              nickname: '가나다',
              phoneNumber: '',
            },
            isLiked: false,
            isBookmarked: false,
            createdDate: new Date(Date.now() - 60 * 1000),
            isAnonymous: false,
            isMyPost: false,
            isPurchasable: true,
          },
        ])
      );
  }),
];
