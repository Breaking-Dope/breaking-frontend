import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserInformationContext } from 'providers/UserInformationProvider';
import usePost from 'hooks/queries/usePost';
import usePostComment from 'hooks/queries/usePostComment';
import { PAGE_PATH } from 'constants/path';
import Toggle from 'components/Toggle/Toggle';
import Line from 'components/Line/Line';
import Button from 'components/Button/Button';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Carousel from 'pages/Post/units/Carousel';
import Comment from 'pages/Post/units/Comment';
import CommentForm from 'pages/Post/units/CommentForm';
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
import {
  deletePost,
  deletePostBookmark,
  deletePostLike,
  postPostBookmark,
  postPostBuy,
  postPostLike,
} from 'api/post';
import { useMutation } from 'react-query';
import usePostBoughtList from 'hooks/queries/usePostBoughtList';
import Modal from 'components/Modal/Modal';
import FollowCard from 'components/FollowCard/FollowCard';
import { useTheme } from 'styled-components';

const Post = () => {
  let { id: postId } = useParams();
  postId = Number(postId);
  const theme = useTheme();
  const targetRef = useRef();
  const navigate = useNavigate();
  const { userId, profileImgURL } = useContext(UserInformationContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseType, setPurchaseType] = useState('구매하기');
  const [isContentToggle, setIsContentToggle] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { data: PostData } = usePost(postId);
  const { data: PostBoughtList, refetch: PostBoughtListReFetch } =
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
    navigate(PAGE_PATH.PROFILE(PostData?.data.user.userId));
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
    let deleteConfirm = window.confirm('게시글을 구매하시겠습니까?');

    deleteConfirm &&
      PostBuy(postId, {
        onSuccess: () => {
          alert('게시글을 구매하였습니다.');
          // 새로 postData 불러오기
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
    if (PostData?.data.user.userId === userId) setPurchaseType('구매자 목록');
    else if (PostData?.data.isPurchased) setPurchaseType('구매 완료');
    else setPurchaseType('구매 하기');

    setIsBookmarked(PostData?.data.isBookmarked);
    setIsLiked(PostData?.data.isLiked);
    setLikeCount(PostData?.data.likeCount);
  }, [PostData, userId]);

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
      <Modal isOpen={isModalOpen} closeClick={toggleModal} title="구매자 목록">
        {PostBoughtList?.data.map((item) => (
          <FollowCard
            cardClick={() => navigate(PAGE_PATH.PROFILE(item.userId))}
            profileData={item}
            key={item.userId}
          />
        ))}
      </Modal>
      <Style.Post>
        {PostData && <Carousel mediaList={PostData.data.mediaList} />}
        <Style.ContentHeader>
          <Style.ContentWriter>
            <ProfileImage
              size="large"
              src={PostData?.data.user.profileImgURL}
              profileClick={profileClick}
            />
            <Style.ContentWriterName>
              {PostData?.data.user.nickname}
            </Style.ContentWriterName>
          </Style.ContentWriter>
          <Style.Context>
            {PostData?.data.postType === 'exclusive' && (
              <Button color="dark" size="small" disabled>
                단독
              </Button>
            )}
            {PostData?.data.isSold ? (
              <Button color="danger" size="small" disabled>
                판매 완료
              </Button>
            ) : (
              <Button color="primary" size="small" disabled>
                판매중
              </Button>
            )}
            <Style.ContentTitle>{PostData?.data.title}</Style.ContentTitle>
            <Style.ContentLocation>
              <LocationIcon />
              {PostData?.data.location.region}
            </Style.ContentLocation>
            <Style.ContentDetail>
              {PostData?.data.createdTime}
              <Style.ContentViewCount>
                조회&nbsp;
                {PostData?.data.viewCount.toLocaleString('ko-KR')}
              </Style.ContentViewCount>
            </Style.ContentDetail>
          </Style.Context>
          <Style.ContentPriceContainer>
            <Style.ContentPrice>
              {PostData?.data.price.toLocaleString('ko-KR')}&nbsp;원
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
            {purchaseType === '구매 완료' && (
              <Button color="secondary" disabled>
                {purchaseType}
              </Button>
            )}
            <Style.ContentDetail>
              누적 판매
              <Style.ContentSoldCount>
                {PostData?.data.soldCount.toLocaleString('ko-KR')}
              </Style.ContentSoldCount>
            </Style.ContentDetail>
          </Style.ContentPriceContainer>
        </Style.ContentHeader>

        <Line width="800px" />

        <Style.ContentContainer>
          <Style.Content>
            {PostData?.data.content
              .split(/(#[^\s#]+|\n)/g)
              .map((contentSlice, index) => {
                if (contentSlice === '\n')
                  return <br key={'post-br-' + index} />;
                else if (contentSlice[0] === '#')
                  return (
                    <Style.Hashtag key={'comment-hashtag-' + index}>
                      {contentSlice}
                    </Style.Hashtag>
                  );
                else return contentSlice;
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
                {PostData?.data.totalCommentCount.toLocaleString('ko-KR')}
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
                  {PostData?.data.user.userId === userId ? (
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
                    icon={isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
                    label="북마크"
                    labelClick={toggleBookmarked}
                  />
                  <Toggle.LabelLink icon={<ShareIcon />} label="공유" />
                </Toggle>
              )}
            </Style.ContentToggle>
          </Style.ContentFooter>
        </Style.ContentContainer>

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
