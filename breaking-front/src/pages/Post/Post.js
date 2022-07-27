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
import { ReactComponent as BackIcon } from 'assets/svg/back.svg';
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
  postPostLike,
} from 'api/post';
import { useMutation } from 'react-query';

const Post = () => {
  let { id: postId } = useParams();
  postId = Number(postId);
  const targetRef = useRef();
  const navigate = useNavigate();
  const { userId, profileImgURL } = useContext(UserInformationContext);

  const [isContentToggle, setIsContentToggle] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { data: PostData } = usePost(postId);
  const {
    data: PostCommentData,
    isFetching: IsPostCommentFetching,
    fetchNextPage: FetchNextPostComment,
  } = usePostComment(postId);

  const { mutate: PostLike } = useMutation(postPostLike);
  const { mutate: DeletePostLike } = useMutation(deletePostLike);
  const { mutate: PostBookmark } = useMutation(postPostBookmark);
  const { mutate: DeletePostBookmark } = useMutation(deletePostBookmark);
  const { mutate: DeletePost } = useMutation(deletePost);

  const handleProfileClick = () => {
    navigate(PAGE_PATH.PROFILE(PostData?.data.user.userId));
  };

  const handlePostDeleteClick = () => {
    let deleteConfirm = window.confirm('삭제하시겠습니까?');

    deleteConfirm &&
      DeletePost(postId, {
        onSuccess: () => {
          alert('게시글을 삭제하였습니다.');
          navigate(PAGE_PATH.HOME);
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
    setIsBookmarked(PostData?.data.isBookmarked);
    setIsLiked(PostData?.data.isLiked);
    setLikeCount(PostData?.data.likeCount);
  }, [PostData]);

  useEffect(() => {
    let observer;
    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        FetchNextPostComment();
        observer.observe(entry.target);
      }
    };

    if (PostCommentData) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.8,
      });
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [FetchNextPostComment, PostCommentData]);

  return (
    <Style.Post>
      <Style.BackIconContainer onClick={() => navigate(PAGE_PATH.HOME)}>
        <BackIcon />
      </Style.BackIconContainer>
      {PostData && <Carousel mediaList={PostData.data.mediaList} />}
      <Style.ContentHeader>
        <Style.ContentWriter>
          <ProfileImage
            size="large"
            src={PostData?.data.user.profileImgURL}
            profileClick={handleProfileClick}
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
            {PostData?.data.price.toLocaleString('ko-KR')} 원
          </Style.ContentPrice>
          <Button color={PostData?.data.isPurchased ? 'secondary' : 'primary'}>
            {PostData?.data.user.userId === userId
              ? '구매자 목록'
              : PostData?.data.isPurchased
              ? '구매 완료'
              : '구매 하기'}
          </Button>
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
        <Style.Content>{PostData?.data.content}</Style.Content>
        <Style.HashtagContainer>
          {PostData?.data.hashtagList.map((hashtag, index) => (
            <Style.Hashtag key={'hashtag-' + index}>#{hashtag}</Style.Hashtag>
          ))}
        </Style.HashtagContainer>
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
                      label="수정"
                    />
                    <Toggle.LabelLink
                      path={PAGE_PATH.POST(postId)}
                      icon={<RemoveIcon />}
                      label="삭제"
                      onClick={handlePostDeleteClick}
                    />
                  </>
                ) : (
                  <Toggle.LabelLink
                    path={PAGE_PATH.POST(postId)}
                    icon={<HideIcon />}
                    label="숨김"
                  />
                )}

                <Toggle.LabelLink
                  path={PAGE_PATH.POST(postId)}
                  icon={isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
                  label="북마크"
                  onClick={toggleBookmarked}
                />
                <Toggle.LabelLink
                  path={PAGE_PATH.POST(postId)}
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
        <CommentForm
          profileImgURL={profileImgURL}
          userId={userId}
          postId={postId}
        />
        {PostCommentData?.pages.map((page) =>
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
          {IsPostCommentFetching && (
            <Style.Loading type="spin" color="#014d91" width="40px" />
          )}
        </div>
      </Style.Comments>
    </Style.Post>
  );
};

export default Post;
