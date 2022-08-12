import {
  NORMAL_USER,
  NO_PROFILEIMGURL_USER,
  NO_POSTCOUNT_USER,
  NO_FOLLOW_USER,
  NO_STATUSMSG_USER,
} from 'mocks/dummyData/users';

export const NORMAL_CONTENT = {
  postId: 1,
  title: '사진이 아주 이뻐요',
  region: '게더타운',
  thumbnailImgURL:
    'https://cdn.pixabay.com/photo/2022/04/19/09/08/flowers-7142409_960_720.jpg',
  likeCount: 3,
  postType: 'CHARGED',
  isSold: false,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NO_FOLLOW_USER.profileImgURL,
  nickname: NO_FOLLOW_USER.nickname,
  isLiked: true,
  isBookmarked: false,
  createdDate: new Date(),
};

export const EXCLUSIVE_CONTENT = {
  postId: 2,
  title: '사진이 아주 이뻐요',
  region: '남극',
  thumbnailImgURL:
    'https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179_960_720.jpg',
  likeCount: 10,
  postType: 'EXCLUSIVE',
  isSold: false,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NORMAL_USER.profileImgURL,
  nickname: NORMAL_USER.nickname,
  isLiked: true,
  isBookmarked: false,
  createdDate: new Date(),
};

export const EMPTY_PICTURE_CONTENT = {
  postId: 3,
  title: '빈 이미지',
  region: '서울시',
  thumbnailImgURL: '',
  likeCount: 0,
  postType: 'CHARGED',
  isSold: false,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NO_POSTCOUNT_USER.profileImgURL,
  nickname: NO_POSTCOUNT_USER.nickname,
  isLiked: false,
  isBookmarked: true,
  createdDate: new Date(),
};

export const SOLDOUT_CONTENT = {
  postId: 4,
  title: '팔린글',
  region: '서울시',
  thumbnailImgURL: '',
  likeCount: 0,
  postType: 'EXCLUSIVE',
  isSold: true,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NO_PROFILEIMGURL_USER.profileImgURL,
  nickname: NO_PROFILEIMGURL_USER.nickname,
  isLiked: false,
  isBookmarked: true,
  createdDate: new Date(),
};

export const FREE_CONTENT = {
  postId: 5,
  title: '공짜글',
  region: '경기도',
  thumbnailImgURL:
    'https://cdn.pixabay.com/photo/2022/06/02/00/04/dog-7236774_960_720.jpg',
  likeCount: 0,
  postType: 'FREE',
  isSold: true,
  price: 10000,
  viewCount: 1000,
  userId: 0,
  profileImgURL: NO_STATUSMSG_USER.profileImgURL,
  nickname: NO_STATUSMSG_USER.nickname,
  isLiked: false,
  isBookmarked: true,
  createdDate: new Date(),
};

export const POST_DATA = {
  isLiked: false,
  isBookmarked: false,
  isPurchased: false,
  user: null,
  title: '킹받네',
  content:
    '며칠  전 한 TV 예능 프로그램에 가수 에릭 남의 형제들이 출연했다. \n미국에서 태어나고 자란 이들은 한국어가 서툴다. 그나마 한국에서 오래 활동한 에릭 남이 한국어에 가장 능통한 편. \n삼형제는 여행 내내 초등학생들처럼 투닥거렸는데, 어느 순간 발끈한 막내가 맏형 에릭남에게 물었다. \n“이럴 때 뭐라고 말하지? 기분 안 좋을 때?” \n\n그러자 에릭남이 답했다. \n“요즘 한국에선 이럴 때 ‘킹받다’라고 해.”\n\n‘킹받다’는 ‘열 받다’를 강조하기 위해 킹(king·왕)을 접두어처럼 사용한 신조어다. 한 마디로 엄청 화났다는 뜻이다. \n유사표현으로 #KG받네 #킹받드라쉬 #킹받으라슈 등이 있다. \n‘왕’의 국어사전적 의미는 ‘일정한 분야·범위 안에서 으뜸이 되는 사람’이다. 그러니 어떤 단어라도 ‘킹’ 또는 ‘왕’을 앞에 붙이면 ‘가장·제일’이라는 뜻으로 해석된다. \n오래전 소개팅 자리에서 자주 사용했던 말로 ‘킹카(외모가 뛰어난 남자)’가 있다. 이처럼 강조하고 싶은 말에 ‘킹’이나 ‘갓’을 붙이는 표현은 욕을 하듯 ‘X나’를 붙이는 것보다 순하고 귀엽게 들린다.\n\n단, 웃자고 만드는 신조어에도 논리는 필요하다. \n요즘 자주 쓰이는 단어로 ‘킹리적 갓심’이 있다. ‘지극히 합리적이고 확실한 의심’이라는 표현이라는데, 사람의 으뜸인 ‘킹’에 절대적인 존재인 갓(god·신)까지 붙여서 두 번이나 강조의 의미를 덧붙였지만 무분별하게 한·영 단어를 혼합했을 뿐 이 조합만으로는 그 의미를 이해할 근거가 전혀 안 보인다. \n\n유머든, 논리든 새로운 언어의 생성과 쓰임에는 반드시 ‘그럴 만한’ 설득력이 필요하다.\n#킹받네 #신조어',
  mediaList: [
    'https://media.istockphoto.com/videos/young-woman-puts-on-white-medical-mask-on-a-blue-background-video-id1369048359',
    'https://cdn.pixabay.com/photo/2022/07/20/14/45/shipwreck-7334280_960_720.jpg',
    'https://cdn.pixabay.com/photo/2022/07/19/13/46/study-7332172_960_720.png',
  ],
  location: {
    address: '서울 중구 장충동 2가 산 14-102',
    latitude: 37.55453653562958,
    longitude: 126.99981609553,
    region_1depth_name: '서울',
    region_2depth_name: '중구',
  },
  hashtagList: ['KG받네', '킹받드라쉬', '킹받으라슈', '킹받네', '신조어'],
  price: 123456,
  isPurchasable: true,
  shareCount: 0,
  postType: 'CHARGED',
  eventTime: '2020-01-01T14:01:01',
  createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
  modifiedDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
  viewCount: 1000000,
  soldCount: 5,
  isAnonymous: true,
  myPost: false,
  isSold: false,
  isHidden: false,
  likeCount: 1004,
  totalCommentCount: 5,
};

export const COMMENT_DATA = [
  {
    commentId: 1,
    content:
      '킹받네\n#공감 #추천 #해#시#태#그 글 사이에#해시태그 있어도 잘 됩니다!',
    likeCount: 1,
    replyCount: 2,
    user: {
      userId: NO_STATUSMSG_USER.userId,
      profileImgURL: NO_STATUSMSG_USER.profileImgURL,
      nickname: NO_STATUSMSG_USER.nickname,
    },
    isLiked: false,
    createdDate: new Date(),
  },
  {
    commentId: 2,
    content: '유익한 정보 감사합니다!',
    likeCount: 129,
    replyCount: 0,
    user: {
      userId: NO_PROFILEIMGURL_USER.userId,
      profileImgURL: NO_PROFILEIMGURL_USER.profileImgURL,
      nickname: NO_PROFILEIMGURL_USER.nickname,
    },
    isLiked: false,
    createdDate: new Date(),
  },
  {
    commentId: 5,
    content: '이거 띄어쓰기\n한건데 잘 되나요?\n#띄어쓰기 #잘됨?',
    likeCount: 991199,
    replyCount: 0,
    user: {
      userId: NORMAL_USER.userId,
      profileImgURL: NORMAL_USER.profileImgURL,
      nickname: NORMAL_USER.nickname,
    },
    isLiked: true,
    createdDate: new Date(),
  },
];

export const REPLY_DATA = [
  {
    commentId: 3,
    content: '공감합니다',
    likeCount: 1,
    replyCount: 0,
    user: {
      userId: NO_POSTCOUNT_USER.userId,
      profileImgURL: NO_POSTCOUNT_USER.profileImgURL,
      nickname: NO_POSTCOUNT_USER.nickname,
    },
    isLiked: false,
    createdDate: new Date(),
  },
  {
    commentId: 4,
    content: '저두요',
    likeCount: 1,
    replyCount: 0,
    user: {
      userId: NO_FOLLOW_USER.userId,
      profileImgURL: NO_FOLLOW_USER.profileImgURL,
      nickname: NO_FOLLOW_USER.nickname,
    },
    isLiked: false,
    createdDate: new Date(),
  },
];
