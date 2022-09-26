import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import LikeCount from 'utils/LikeCount';
import Tag from 'components/Tag/Tag';
import Line from 'components/Line/Line';
import { PostSkeleton } from 'components/Skeleton/Skeleton';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import ContentHashtag from 'components/ContentHashtag/ContentHashtag';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import usePost from 'hooks/queries/usePost';
import usePostLike from 'pages/Post/Post/hooks/mutations/usePostLike';
import useDeletePostLike from 'pages/Post/Post/hooks/mutations/useDeletePostLike';
import usePostLikeList from 'pages/Post/Post/hooks/queries/usePostLikeList';
import Carousel from 'pages/Post/Post/components/Carousel/Carousel';
import CommentList from 'pages/Post/Post/components/CommentList/CommentList';
import ContentToggle from 'pages/Post/Post/components/ContentToggle/ContentToggle';
import PurchaseButton from 'pages/Post/Post/components/PurchaseButton/PurchaseButton';
import PostLikeListModal from 'pages/Post/Post/components/PostLikeListModal/PostLikeListModal';
import * as Style from 'pages/Post/Post/Post.styles';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as CommentIcon } from 'assets/svg/comment.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';

const Post = () => {
  const navigate = useNavigate();
  let { id: postId } = useParams();
  postId = Number(postId);

  const { userId, isLogin } = useContext(UserInformationContext);

  const [isOpenContentToggle, setIsOpenContentToggle] = useState(false);
  const [isOpenLikeListModal, setIsOpenLikeListModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { data: postData, isLoading: isPostDataLoading } = usePost(postId);
  const { data: likeUserData } = usePostLikeList(postId, 1);

  const { mutate: PostLike } = usePostLike();
  const { mutate: DeletePostLike } = useDeletePostLike();

  const profileClick = () => {
    navigate(PAGE_PATH.PROFILE(postData?.data.user?.userId));
  };

  const toggleLiked = () => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      return navigate(PAGE_PATH.LOGIN);
    }

    isLiked ? DeletePostLike(postId) : PostLike(postId);
    setLikeCount((pre) => (isLiked ? pre - 1 : pre + 1));
    setIsLiked((pre) => !pre);
  };

  const toggleLikeListModal = () => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      return navigate(PAGE_PATH.LOGIN);
    }

    setIsOpenLikeListModal((pre) => !pre);
  };

  const toggleContent = () => {
    setIsOpenContentToggle((pre) => !pre);
  };

  useEffect(() => {
    setIsLiked(postData?.data.isLiked);
    setLikeCount(postData?.data.likeCount);
  }, [postData, userId]);

  return (
    <>
      <PostLikeListModal
        isOpen={isOpenLikeListModal}
        postId={postId}
        closeClick={toggleLikeListModal}
      />
      <ScrollToTop />
      <Style.Post>
        {isPostDataLoading ? (
          <PostSkeleton />
        ) : (
          <>
            {postData?.data.mediaList.length !== 0 ? (
              <Carousel mediaList={postData?.data.mediaList} />
            ) : (
              <Style.DefaultCarousel>
                <Style.DefaultThumbnailImage />
              </Style.DefaultCarousel>
            )}
            <Style.ContentHeader>
              <Style.ContentWriter>
                <ProfileImage
                  size="large"
                  src={ImageUrlConverter(postData?.data.user?.profileImgURL)}
                  profileClick={profileClick}
                  isAnonymous={postData.data.isAnonymous}
                />
                <Style.ContentWriterName
                  length={postData?.data.user?.nickname.length}
                >
                  {postData?.data.isAnonymous
                    ? '익명'
                    : postData?.data.user?.nickname}
                </Style.ContentWriterName>
              </Style.ContentWriter>
              <Style.Context>
                <Tag
                  postType={postData?.data.postType}
                  isSold={postData?.data.isSold}
                  isPurchasable={postData?.data.isPurchasable}
                  isHidden={postData?.data.isHidden}
                />
                <Style.ContextTitle>{postData?.data.title}</Style.ContextTitle>
                <Style.ContextLocationContainer>
                  <Style.ContextLocation>
                    <LocationIcon />
                    {postData?.data.location.region_1depth_name +
                      ' ' +
                      postData?.data.location.region_2depth_name}
                  </Style.ContextLocation>
                  <Style.Dot />
                  <Style.ContextViewCount>
                    조회수&nbsp;
                    {postData?.data.viewCount.toLocaleString('ko-KR')}회
                  </Style.ContextViewCount>
                </Style.ContextLocationContainer>
                <Style.ContextDetail>
                  발생시간&nbsp;
                  {dayjs(postData?.data.eventDate).format('YYYY.MM.DD. HH:mm')}
                </Style.ContextDetail>
                <Style.ContextCreatedDate>
                  작성시간&nbsp;
                  {dayjs(postData?.data.createdDate).format(
                    'YYYY.MM.DD. HH:mm'
                  )}
                </Style.ContextCreatedDate>
              </Style.Context>
              <Style.ContentPriceContainer>
                <Style.ContextPrice>
                  {postData?.data.price.toLocaleString('ko-KR')}&nbsp;원
                </Style.ContextPrice>
                <PurchaseButton
                  postId={postId}
                  isMyPost={postData?.data.isMyPost}
                  isPurchased={postData?.data.isPurchased}
                  isPurchasable={postData?.data.isPurchasable}
                  isSold={postData?.data.isSold}
                  postType={postData?.data.postType}
                />
                <Style.ContextDetail>
                  누적 판매
                  <Style.ContentSoldCount>
                    {postData?.data.soldCount.toLocaleString('ko-KR')}
                  </Style.ContentSoldCount>
                </Style.ContextDetail>
              </Style.ContentPriceContainer>
            </Style.ContentHeader>
            <Line width="800px" />
            <Style.ContentContainer>
              <Style.Content>
                <ContentHashtag content={postData?.data.content} />
              </Style.Content>
              <Style.ContentFooter>
                <Style.ContentStatus>
                  <span onClick={toggleLiked}>
                    {isLiked ? <LikedIcon /> : <LikeIcon />}
                  </span>
                  <Style.LikeCount
                    onClick={
                      likeCount === 0 ? toggleLiked : toggleLikeListModal
                    }
                  >
                    {LikeCount(
                      likeUserData?.pages[0].result[0]?.nickname,
                      likeCount
                    )}
                  </Style.LikeCount>
                  <div>
                    <CommentIcon />
                    {postData?.data.commentCount.toLocaleString('ko-KR')}
                  </div>
                </Style.ContentStatus>
                <ETCIcon
                  onClick={toggleContent}
                  tabIndex="0"
                  onBlur={() => setIsOpenContentToggle(false)}
                />
                <ContentToggle
                  isOpen={isOpenContentToggle}
                  postData={postData?.data}
                  postId={postId}
                />
              </Style.ContentFooter>
            </Style.ContentContainer>
          </>
        )}
        <Line width="800px" />
        <CommentList postId={postId} />
      </Style.Post>
    </>
  );
};

export default Post;
