import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import Toggle from 'components/Toggle/Toggle';
import Line from 'components/Line/Line';
import Button from 'components/Button/Button';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Carousel from 'pages/Post/units/Carousel';
import Comment from 'pages/Post/units/Comment';
import CommentForm from 'pages/Post/units/CommentForm';
import * as Style from 'pages/Post/Post.styles';
import { ReactComponent as BackIcon } from 'assets/svg/back.svg';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as CommentIcon } from 'assets/svg/comment.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as BookmarkIcon } from 'assets/svg/small_bookmark.svg';
import { ReactComponent as BookmarkedIcon } from 'assets/svg/small_bookmarked.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';

const Post = () => {
  const navigate = useNavigate();
  let { id: postId } = useParams();
  const { userId, profileImgURL } = useContext(UserInformationContext);
  postId = Number(postId);

  const dummyData = {
    isLiked: false,
    isBookmarked: false,
    user: {
      userId: 1,
      profileImgURL:
        'https://ca.slack-edge.com/T03G3GC4BV5-U03HAFFGKFA-d083731d07b2-512',
      nickname: '깻묵',
      phoneNumber: '',
    },
    title: '수정후 수정후 수정후 수정후 수정후 ',
    content: `며칠 전 한 TV 예능 프로그램에 가수 에릭 남의 형제들이 출연했다. 미국에서 태어나고 자란 이들은 한국어가 서툴다. 그나마 한국에서 오래 활동한 에릭 남이 한국어에 가장 능통한 편. 삼형제는 여행 내내 초등학생들처럼 투닥거렸는데, 어느 순간 발끈한 막내가 맏형 에릭 남에게 물었다. “이럴 때 뭐라고 말하지? 기분 안 좋을 때?” 그러자 에릭 남이 답했다. “요즘 한국에선 이럴 때 ‘킹받다’라고 해.”(사진)

    ‘킹받다’는 ‘열 받다’를 강조하기 위해 킹(king·왕)을 접두어처럼 사용한 신조어다. 한 마디로 엄청 화났다는 뜻이다. 유사표현으로 ‘KG받네’ ‘킹받드라쉬’ ‘킹받으라슈’ 등이 있다. ‘왕’의 국어사전적 의미는 ‘일정한 분야·범위 안에서 으뜸이 되는 사람’이다. 그러니 어떤 단어라도 ‘킹’ 또는 ‘왕’을 앞에 붙이면 ‘가장·제일’이라는 뜻으로 해석된다. 오래전 소개팅 자리에서 자주 사용했던 말로 ‘킹카(외모가 뛰어난 남자)’가 있다. 이처럼 강조하고 싶은 말에 ‘킹’이나 ‘갓’을 붙이는 표현은 욕을 하듯 ‘X나’를 붙이는 것보다 순하고 귀엽게 들린다.
    
    
    TV 예능 프로그램 한 장면. [사진 인터넷 캡처]
    단, 웃자고 만드는 신조어에도 논리는 필요하다. 요즘 자주 쓰이는 단어로 ‘킹리적 갓심’이 있다. ‘지극히 합리적이고 확실한 의심’이라는 표현이라는데, 사람의 으뜸인 ‘킹’에 절대적인 존재인 갓(god·신)까지 붙여서 두 번이나 강조의 의미를 덧붙였지만 무분별하게 한·영 단어를 혼합했을 뿐 이 조합만으로는 그 의미를 이해할 근거가 전혀 안 보인다. 유머든, 논리든 새로운 언어의 생성과 쓰임에는 반드시 ‘그럴 만한’ 설득력이 필요하다.`,
    mediaList: [
      'https://media.istockphoto.com/videos/young-woman-puts-on-white-medical-mask-on-a-blue-background-video-id1369048359',
      'https://cdn.pixabay.com/photo/2022/07/16/07/20/sunset-7324598__480.jpg',
      'https://cdn.pixabay.com/photo/2022/07/19/13/46/study-7332172_960_720.png',
    ],
    location: {
      region: '압구정',
      longitude: 12.1234,
      latitude: 12.12345,
    },
    hashtagList: ['해시태그1', '해시태그2'],
    price: 123111,
    postType: 'exclusive',
    eventTime: '2020-01-01T14:01:01',
    createdTime: '2022-07-22T14:38:54.829675',
    modifiedTime: '2022-07-22T14:39:03.661634',
    viewCount: 1,
    soldCount: 10,
    isAnonymous: false,
    isSold: false,
    isHidden: false,
    likeCount: 10,
    commentCount: 4,
  };
  const commentData = {
    comment: [
      {
        commentId: 1,
        content:
          '코로나 사태가 아직 진정이 되지 않았는데, 또 다시 확산이 될까봐 걱정이 되네요 ㅠㅠ',
        likeCount: 1,
        replyCount: 2,
        user: {
          userId: 1,
          profileImgURL: '',
          nickname: '만두피',
        },
        isLiked: false,
        createdTime: '2022-07-25T15:32:39.445Z',
      },
      {
        commentId: 2,
        content: '아이고 이를 어째 ㅠㅠㅠㅠㅠㅠ',
        likeCount: 129,
        replyCount: 0,
        user: {
          userId: 1,
          profileImgURL: '',
          nickname: '주기',
        },
        isLiked: false,
        createdTime: '2022-07-25T15:32:39.445Z',
      },
    ],
  };

  const [isContentToggle, setIsContentToggle] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(dummyData.isBookmarked);
  const [isLiked, setIsLiked] = useState(dummyData.isLiked);
  const [likeCount, setLikeCount] = useState(dummyData.likeCount);

  const toggleLiked = () => {
    setLikeCount((pre) => (isLiked ? pre - 1 : pre + 1));
    setIsLiked((pre) => !pre);
  };

  const toggleBookmarked = () => {
    setIsBookmarked((pre) => !pre);
  };

  const toggleComment = () => {
    setIsContentToggle((pre) => !pre);
  };

  return (
    <Style.Post>
      <Style.BackIconContainer onClick={() => navigate(PAGE_PATH.HOME)}>
        <BackIcon />
      </Style.BackIconContainer>
      <Carousel mediaList={dummyData.mediaList} />
      <Style.ContentHeader>
        <Style.ContentWriter>
          <ProfileImage size="large" src={dummyData.user.profileImgURL} />
          <Style.ContentWriterName>
            {dummyData.user.nickname}
          </Style.ContentWriterName>
        </Style.ContentWriter>
        <Style.Context>
          {dummyData.postType === 'exclusive' && (
            <Button color="dark" size="small" disabled>
              단독
            </Button>
          )}
          {dummyData.isSold ? (
            <Button color="danger" size="small" disabled>
              판매 완료
            </Button>
          ) : (
            <Button color="primary" size="small" disabled>
              판매중
            </Button>
          )}
          <Style.ContentTitle>{dummyData.title}</Style.ContentTitle>
          <Style.ContentLocation>
            <LocationIcon />
            {dummyData.location.region}
          </Style.ContentLocation>
          <Style.ContentDetail>{dummyData.createdTime}</Style.ContentDetail>
        </Style.Context>
        <Style.ContentPriceContainer>
          <Style.ContentPrice>
            {dummyData.price.toLocaleString('ko-KR')} 원
          </Style.ContentPrice>
          <Button>
            {dummyData.user.userId === userId ? '구매자 목록' : '구매하기'}
          </Button>
          <Style.ContentDetail>
            누적 판매
            <Style.ContentSoldCount>
              {dummyData.soldCount}
            </Style.ContentSoldCount>
          </Style.ContentDetail>
        </Style.ContentPriceContainer>
      </Style.ContentHeader>
      <Line width="800px" />
      <Style.ContentContainer>
        <Style.Content>{dummyData.content}</Style.Content>
        <Style.HashtagContainer>
          {dummyData.hashtagList.map((hashtag, index) => (
            <Style.Hashtag key={'hashtag-' + index}>#{hashtag}</Style.Hashtag>
          ))}
        </Style.HashtagContainer>
        <Style.ContentFooter>
          <Style.ContentStatus>
            <label onClick={toggleLiked}>
              {isLiked ? <LikedIcon /> : <LikeIcon />}
              {likeCount}
            </label>
            <label>
              <CommentIcon />
              {dummyData.commentCount}
            </label>
          </Style.ContentStatus>
          <ETCIcon onClick={toggleComment} />
          <Style.ContentToggle>
            {isContentToggle && (
              <Toggle width="100px">
                <Toggle.LabelLink
                  path={PAGE_PATH.FEED_DETAIL(postId)}
                  icon={<EditIcon />}
                  label="수정"
                />
                <Toggle.LabelLink
                  path={PAGE_PATH.FEED_DETAIL(postId)}
                  icon={<RemoveIcon />}
                  label="삭제"
                />
                <Toggle.LabelLink
                  path={PAGE_PATH.FEED_DETAIL(postId)}
                  icon={isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
                  label="북마크"
                  onClick={toggleBookmarked}
                />
                <Toggle.LabelLink
                  path={PAGE_PATH.FEED_DETAIL(postId)}
                  icon={<ShareIcon />}
                  label="공유"
                />
              </Toggle>
            )}
          </Style.ContentToggle>
        </Style.ContentFooter>
      </Style.ContentContainer>
      <Line width="800px" />
      <Style.Comments>
        <CommentForm profileImgURL={profileImgURL} />
        {commentData.comment.map((comment) => (
          <Comment comment={comment} type="comment" key={comment.commentId} />
        ))}
      </Style.Comments>
    </Style.Post>
  );
};

export default Post;
