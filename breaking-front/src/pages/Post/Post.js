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
  const [purchaseType, setPurchaseType] = useState('????????????');
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
    let deleteConfirm = window.confirm('???????????? ?????????????????????????');

    deleteConfirm &&
      DeletePost(postId, {
        onSuccess: () => {
          alert('???????????? ?????????????????????.');
          navigate(PAGE_PATH.HOME);
        },
      });
  };

  const postBuyListClick = () => {
    PostBoughtListReFetch();
    toggleModal();
  };

  const postBuyClick = () => {
    let deleteConfirm = window.confirm('???????????? ?????????????????????????');

    deleteConfirm &&
      PostBuy(postId, {
        onSuccess: () => {
          alert('???????????? ?????????????????????.');
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
    if (PostData?.data.user.userId === userId) setPurchaseType('????????? ??????');
    else if (PostData?.data.isPurchased) setPurchaseType('?????? ??????');
    else setPurchaseType('?????? ??????');
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

    if (postCommentData) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.8,
      });
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [FetchNextPostComment, postCommentData]);

  return (
    <>
      <Modal isOpen={isModalOpen} closeClick={toggleModal} title="????????? ??????">
        {PostBoughtList?.data.Users.map((item) => (
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
                ??????
              </Button>
            )}
            {PostData?.data.isSold ? (
              <Button color="danger" size="small" disabled>
                ?????? ??????
              </Button>
            ) : (
              <Button color="primary" size="small" disabled>
                ?????????
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
                ??????&nbsp;
                {PostData?.data.viewCount.toLocaleString('ko-KR')}
              </Style.ContentViewCount>
            </Style.ContentDetail>
          </Style.Context>
          <Style.ContentPriceContainer>
            <Style.ContentPrice>
              {PostData?.data.price.toLocaleString('ko-KR')}&nbsp;???
            </Style.ContentPrice>
            {purchaseType === '????????? ??????' && (
              <Button color="primary" onClick={postBuyListClick}>
                {purchaseType}
              </Button>
            )}
            {purchaseType === '?????? ??????' && (
              <Button color="primary" onClick={postBuyClick}>
                {purchaseType}
              </Button>
            )}
            {purchaseType === '?????? ??????' && (
              <Button color="secondary" disabled>
                {purchaseType}
              </Button>
            )}
            <Style.ContentDetail>
              ?????? ??????
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
                {PostData?.data.commentCount.toLocaleString('ko-KR')}
              </label>
            </Style.ContentStatus>
            <ETCIcon onClick={toggleComment} />
            <Style.ContentToggle>
              {isContentToggle && (
                <Toggle width="100px">
                  {PostData?.data.user.userId === userId ? (
                    <>
                      <Toggle.LabelLink
                        path={PAGE_PATH.POST(postId)}
                        icon={<EditIcon />}
                        label="??????"
                      />
                      <Toggle.LabelLink
                        path={PAGE_PATH.POST(postId)}
                        icon={<RemoveIcon />}
                        label="??????"
                        onClick={postDeleteClick}
                      />
                    </>
                  ) : (
                    <Toggle.LabelLink
                      path={PAGE_PATH.POST(postId)}
                      icon={<HideIcon />}
                      label="??????"
                    />
                  )}

                  <Toggle.LabelLink
                    path={PAGE_PATH.POST(postId)}
                    icon={isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
                    label="?????????"
                    onClick={toggleBookmarked}
                  />
                  <Toggle.LabelLink
                    path={PAGE_PATH.POST(postId)}
                    icon={<ShareIcon />}
                    label="??????"
                  />
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
          <div ref={targetRef}>
            {isPostCommentFetching && (
              <Style.Loading type="spin" color={theme.blue[900]} width="40px" />
            )}
          </div>
        </Style.Comments>
      </Style.Post>
    </>
  );
};

export default Post;
