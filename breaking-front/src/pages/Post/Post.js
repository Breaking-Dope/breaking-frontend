import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { useTheme } from 'styled-components';
import {
  deletePost,
  deletePostBookmark,
  deletePostLike,
  postPostBookmark,
  postPostBuy,
  postPostLike,
} from 'api/post';
import { UserInformationContext } from 'providers/UserInformationProvider';
import usePost from 'hooks/queries/usePost';
import usePostComment from 'hooks/queries/usePostComment';
import usePostBoughtList from 'hooks/queries/usePostBoughtList';
import { PAGE_PATH } from 'constants/path';
import Toggle from 'components/Toggle/Toggle';
import Line from 'components/Line/Line';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import FollowCard from 'components/FollowCard/FollowCard';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Carousel from 'pages/Post/units/Carousel';
import Comment from 'pages/Post/units/Comment';
import CommentForm from 'pages/Post/units/CommentForm';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import * as Style from 'pages/Post/Post.styles';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as CommentIcon } from 'assets/svg/comment.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as HideIcon } from 'assets/svg/hide.svg';
import { ReactComponent as BookmarkIcon } from 'assets/svg/small_bookmark.svg';
import { ReactComponent as BookmarkedIcon } from 'assets/svg/small_bookmarked.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { PostSkeleton } from 'components/Skeleton/Skeleton';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import dayjs from 'dayjs';

const Post = () => {
  let { id: postId } = useParams();
  postId = Number(postId);
  const theme = useTheme();
  const targetRef = useRef();
  const navigate = useNavigate();
  const { userId, profileImgURL } = useContext(UserInformationContext);
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseType, setPurchaseType] = useState('구매하기');
  const [isContentToggle, setIsContentToggle] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { data: postData, isLoading: isPostDataLoading } = usePost(postId);
  const { data: postBoughtList, refetch: PostBoughtListReFetch } =
    usePostBoughtList(postId);
  const {
    data: postCommentData,
    isFetching: isPostCommentFetching,
    fetchNextPage: FetchNextPostComment,
    hasNextPage: postCommentHasNextPage,
  } = usePostComment(postId);

  const { mutate: PostLike } = useMutation(postPostLike);
  const { mutate: DeletePostLike } = useMutation(deletePostLike);
  const { mutate: PostBookmark } = useMutation(postPostBookmark);
  const { mutate: DeletePostBookmark } = useMutation(deletePostBookmark);
  const { mutate: DeletePost } = useMutation(deletePost);
  const { mutate: PostBuy } = useMutation(postPostBuy);

  const toggleModal = () => {
    setIsModalOpen((pre) => !pre);
  };

  const profileClick = () => {
    navigate(PAGE_PATH.PROFILE(postData?.data.user?.userId));
  };

  const postDeleteClick = () => {
    let deleteConfirm = window.confirm('게시글을 삭제하시겠습니까?');

    deleteConfirm &&
      DeletePost(postId, {
        onSuccess: () => {
          alert('게시글을 삭제하였습니다.');
          navigate(-1);
        },
      });
  };

  const postBuyListClick = () => {
    PostBoughtListReFetch();
    toggleModal();
  };

  const postBuyClick = () => {
    let postBuyConfirm = window.confirm('게시글을 구매하시겠습니까?');

    postBuyConfirm &&
      PostBuy(postId, {
        onSuccess: () => {
          alert('게시글을 구매하였습니다.');
          queryClient.invalidateQueries('post');
        },
      });
  };

  const toggleLiked = () => {
    isLiked ? DeletePostLike(postId) : PostLike(postId);
    setLikeCount((pre) => (isLiked ? pre - 1 : pre + 1));
    setIsLiked((pre) => !pre);
  };

  const toggleBookmarked = () => {
    isBookmarked ? DeletePostBookmark(postId) : PostBookmark(postId);
    setIsBookmarked((pre) => !pre);
  };

  const toggleComment = () => {
    setIsContentToggle((pre) => !pre);
  };

  useEffect(() => {
    if (postData?.data.myPost) setPurchaseType('구매자 목록');
    else if (postData?.data.isPurchased) setPurchaseType('다운로드');
    else setPurchaseType('구매 하기');

    setIsBookmarked(postData?.data.isBookmarked);
    setIsLiked(postData?.data.isLiked);
    setLikeCount(postData?.data.likeCount);
  }, [postData, userId]);

  useEffect(() => {
    let observer;
    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        FetchNextPostComment();
        observer.observe(entry.target);
      }
    };
    if (postCommentHasNextPage && !isPostCommentFetching) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.8,
      });
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [FetchNextPostComment, isPostCommentFetching, postCommentHasNextPage]);

  return (
    <>
      <ScrollToTop />
      <Modal isOpen={isModalOpen} closeClick={toggleModal} title="구매자 목록">
        {postBoughtList?.data.map((item) => (
          <FollowCard
            cardClick={() => navigate(PAGE_PATH.PROFILE(item.userId))}
            profileData={item}
            key={item.userId}
          />
        ))}
      </Modal>
      <Style.Post>
        {isPostDataLoading ? (
          <PostSkeleton />
        ) : (
          <>
            {postData.data.mediaList.length !== 0 ? (
              <Carousel mediaList={postData.data.mediaList} />
            ) : (
              <Style.DefaultCarousel>
                <Style.DefaultThumbnailImage />
              </Style.DefaultCarousel>
            )}
            <Style.ContentHeader>
              <Style.ContentWriter>
                <ProfileImage
                  size="large"
                  src={ImageUrlConverter(postData.data.user?.profileImgURL)}
                  profileClick={profileClick}
                  isAnonymous={postData.data.isAnonymous}
                />
                <Style.ContentWriterName
                  length={postData.data.user?.nickname.length}
                >
                  {postData.data.isAnonymous
                    ? '익명'
                    : postData.data.user?.nickname}
                </Style.ContentWriterName>
              </Style.ContentWriter>
              <Style.Context>
                {postData?.data.postType === 'EXCLUSIVE' && (
                  <Button color="dark" size="small" disabled>
                    단독
                  </Button>
                )}
                {postData?.data.postType === 'EXCLUSIVE' &&
                postData?.data.isSold ? (
                  <Button color="danger" size="small" disabled>
                    판매 완료
                  </Button>
                ) : postData?.data.isPurchasable ? (
                  <Button color="primary" size="small" disabled>
                    판매중
                  </Button>
                ) : (
                  <Button color="danger" size="small" disabled>
                    판매 중지
                  </Button>
                )}
                <Style.ContentTitle>{postData.data.title}</Style.ContentTitle>
                <Style.ContentLocationContainer>
                  <Style.ContentLocation>
                    <LocationIcon />
                    {postData.data.location.region_1depth_name +
                      ' ' +
                      postData.data.location.region_2depth_name}
                  </Style.ContentLocation>
                  <Style.Dot />
                  <Style.ContentViewCount>
                    조회수&nbsp;
                    {postData?.data.viewCount.toLocaleString('ko-KR')}회
                  </Style.ContentViewCount>
                </Style.ContentLocationContainer>
                <Style.ContentDetail>
                  발생시간&nbsp;
                  {dayjs(postData.data.eventTime).format('YYYY.MM.DD. HH:mm')}
                </Style.ContentDetail>
                <Style.ContentCreatedDate>
                  작성시간&nbsp;
                  {dayjs(postData.data.createdDate).format('YYYY.MM.DD. HH:mm')}
                </Style.ContentCreatedDate>
              </Style.Context>
              <Style.ContentPriceContainer>
                <Style.ContentPrice>
                  {postData?.data.price.toLocaleString('ko-KR')}&nbsp;원
                </Style.ContentPrice>
                {purchaseType === '구매자 목록' && (
                  <Button color="primary" onClick={postBuyListClick}>
                    {purchaseType}
                  </Button>
                )}
                {purchaseType === '구매 하기' && (
                  <Button color="primary" onClick={postBuyClick}>
                    {purchaseType}
                  </Button>
                )}
                {purchaseType === '다운로드' && (
                  //다운로드 로직 추후 구현
                  <Button color="primary">{purchaseType}</Button>
                )}
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
                {postData.data.content
                  .split(/(#[^\s#]+|\n|\s)/g)
                  .map((contentSlice, index) => {
                    if (contentSlice === ' ') return '\u00a0';
                    if (contentSlice === '\n')
                      return <br key={'post-br-' + index} />;
                    if (contentSlice[0] === '#')
                      return (
                        <Style.Hashtag key={'comment-hashtag-' + index}>
                          {contentSlice}
                        </Style.Hashtag>
                      );
                    return contentSlice;
                  })}
              </Style.Content>
              <Style.ContentFooter>
                <Style.ContentStatus>
                  <label onClick={toggleLiked}>
                    {isLiked ? <LikedIcon /> : <LikeIcon />}
                    {likeCount?.toLocaleString('ko-KR')}
                  </label>
                  <label>
                    <CommentIcon />
                    {postData?.data.totalCommentCount.toLocaleString('ko-KR')}
                  </label>
                </Style.ContentStatus>
                <ETCIcon
                  onClick={toggleComment}
                  tabIndex="0"
                  onBlur={() => setIsContentToggle(false)}
                />
                <Style.ContentToggle
                  onMouseDown={(event) => event.preventDefault()}
                >
                  {isContentToggle && (
                    <Toggle width="100px">
                      {postData.data.myPost ? (
                        <>
                          <Toggle.LabelLink icon={<EditIcon />} label="수정" />
                          <Toggle.LabelLink
                            icon={<RemoveIcon />}
                            label="삭제"
                            labelClick={postDeleteClick}
                          />
                        </>
                      ) : (
                        <Toggle.LabelLink icon={<HideIcon />} label="숨김" />
                      )}

                      <Toggle.LabelLink
                        icon={
                          isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />
                        }
                        label="북마크"
                        labelClick={toggleBookmarked}
                      />
                      <Toggle.LabelLink icon={<ShareIcon />} label="공유" />
                    </Toggle>
                  )}
                </Style.ContentToggle>
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
          <Style.TargetDiv ref={targetRef}>
            {isPostCommentFetching && (
              <Style.Loading type="spin" color={theme.blue[900]} width="40px" />
            )}
          </Style.TargetDiv>
        </Style.Comments>
      </Style.Post>
    </>
  );
};

export default Post;
