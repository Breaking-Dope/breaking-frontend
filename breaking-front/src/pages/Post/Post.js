import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import usePost from 'hooks/queries/usePost';
import usePostComment from 'pages/Post/hooks/queries/usePostComment';
import usePostLike from 'pages/Post/hooks/mutations/usePostLike';
import useDeletePostLike from 'pages/Post/hooks/mutations/useDeletePostLike';
import { PAGE_PATH } from 'constants/path';
import { PostSkeleton } from 'components/Skeleton/Skeleton';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Tag from 'components/Tag/Tag';
import Line from 'components/Line/Line';
import ContentSlice from 'components/ContentSlice/ContentSlice';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import Carousel from 'pages/Post/components/Carousel/Carousel';
import Comment from 'pages/Post/components/Comment/Comment';
import ContentToggle from 'pages/Post/components/ContentToggle/ContentToggle';
import CommentForm from 'pages/Post/components/CommentForm/CommentForm';
import PurchaseButton from 'pages/Post/components/PurchaseButton/PurchaseButton';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import * as Style from 'pages/Post/Post.styles';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as CommentIcon } from 'assets/svg/comment.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';

const Post = () => {
  let { id: postId } = useParams();
  postId = Number(postId);
  const navigate = useNavigate();
  const { userId, profileImgURL } = useContext(UserInformationContext);

  const [isOpenContentToggle, setIsOpenContentToggle] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const [likeCount, setLikeCount] = useState(0);

  const { data: postData, isLoading: isPostDataLoading } = usePost(postId);

  const {
    data: postCommentData,
    isFetching: isPostCommentFetching,
    fetchNextPage: FetchNextPostComment,
  } = usePostComment(postId);

  const { targetRef } = useInfiniteScroll(
    postCommentData,
    FetchNextPostComment
  );

  const { mutate: PostLike } = usePostLike();
  const { mutate: DeletePostLike } = useDeletePostLike();

  const profileClick = () => {
    navigate(PAGE_PATH.PROFILE(postData?.data.user?.userId));
  };

  const toggleLiked = () => {
    isLiked ? DeletePostLike(postId) : PostLike(postId);
    setLikeCount((pre) => (isLiked ? pre - 1 : pre + 1));
    setIsLiked((pre) => !pre);
  };

  const toggleComment = () => {
    setIsOpenContentToggle((pre) => !pre);
  };

  useEffect(() => {
    setIsLiked(postData?.data.isLiked);
    setLikeCount(postData?.data.likeCount);
  }, [postData, userId]);

  return (
    <>
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
                />
                <Style.ContentTitle>{postData?.data.title}</Style.ContentTitle>
                <Style.ContentLocationContainer>
                  <Style.ContentLocation>
                    <LocationIcon />
                    {postData?.data.location.region_1depth_name +
                      ' ' +
                      postData?.data.location.region_2depth_name}
                  </Style.ContentLocation>
                  <Style.Dot />
                  <Style.ContentViewCount>
                    조회수&nbsp;
                    {postData?.data.viewCount.toLocaleString('ko-KR')}회
                  </Style.ContentViewCount>
                </Style.ContentLocationContainer>
                <Style.ContentDetail>
                  발생시간&nbsp;
                  {dayjs(postData?.data.eventDate).format('YYYY.MM.DD. HH:mm')}
                </Style.ContentDetail>
                <Style.ContentCreatedDate>
                  작성시간&nbsp;
                  {dayjs(postData?.data.createdDate).format(
                    'YYYY.MM.DD. HH:mm'
                  )}
                </Style.ContentCreatedDate>
              </Style.Context>
              <Style.ContentPriceContainer>
                <Style.ContentPrice>
                  {postData?.data.price.toLocaleString('ko-KR')}&nbsp;원
                </Style.ContentPrice>
                <PurchaseButton
                  postId={postId}
                  isMyPost={postData?.data.isMyPost}
                  isPurchased={postData?.data.isPurchased}
                  isPurchasable={postData?.data.isPurchasable}
                />
                <Style.ContentDetail>
                  누적 판매
                  <Style.ContentSoldCount>
                    {postData?.data.soldCount.toLocaleString('ko-KR')}
                  </Style.ContentSoldCount>
                </Style.ContentDetail>
              </Style.ContentPriceContainer>
            </Style.ContentHeader>
            <Line width="800px" />
            <Style.ContentContainer>
              <Style.Content>
                <ContentSlice content={postData?.data.content} />
              </Style.Content>
              <Style.ContentFooter>
                <Style.ContentStatus>
                  <span onClick={toggleLiked}>
                    {isLiked ? <LikedIcon /> : <LikeIcon />}
                  </span>
                  <span>{likeCount?.toLocaleString('ko-KR')}</span>
                  <div>
                    <CommentIcon />
                    {postData?.data.commentCount.toLocaleString('ko-KR')}
                  </div>
                </Style.ContentStatus>
                <ETCIcon
                  onClick={toggleComment}
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

        <Style.Comments>
          <CommentForm
            profileImgURL={profileImgURL}
            userId={userId}
            postId={postId}
            type="comment"
          />
          {postCommentData?.pages.map((page) =>
            page.result.map((comment) => (
              <Comment
                comment={comment}
                type="comment"
                postId={postId}
                key={comment.commentId}
              />
            ))
          )}
          <InfiniteTargetDiv
            targetRef={targetRef}
            isFetching={isPostCommentFetching}
          />
        </Style.Comments>
      </Style.Post>
    </>
  );
};

export default Post;
