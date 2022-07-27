import React, { useContext, useEffect, useState } from 'react';
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
  const navigate = useNavigate();
  let { id: postId } = useParams();
  const { userId, profileImgURL } = useContext(UserInformationContext);
  postId = Number(postId);

  const [isContentToggle, setIsContentToggle] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { data: postData } = usePost(postId);
  const { data: postCommentData } = usePostComment(postId, 1, 10);

  const { mutate: PostLike } = useMutation(postPostLike);
  const { mutate: DeletePostLike } = useMutation(deletePostLike);
  const { mutate: PostBookmark } = useMutation(postPostBookmark);
  const { mutate: DeletePostBookmark } = useMutation(deletePostBookmark);
  const { mutate: DeletePost } = useMutation(deletePost);

  const handleProfileClick = () => {
    navigate(PAGE_PATH.PROFILE(postData?.data.user.userId));
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
    setIsBookmarked(postData?.data.isBookmarked);
    setIsLiked(postData?.data.isLiked);
    setLikeCount(postData?.data.likeCount);
  }, [postData]);

  return (
    <Style.Post>
      <Style.BackIconContainer onClick={() => navigate(PAGE_PATH.HOME)}>
        <BackIcon />
      </Style.BackIconContainer>
      {postData && <Carousel mediaList={postData.data.mediaList} />}
      <Style.ContentHeader>
        <Style.ContentWriter>
          <ProfileImage
            size="large"
            src={postData?.data.user.profileImgURL}
            profileClick={handleProfileClick}
          />
          <Style.ContentWriterName>
            {postData?.data.user.nickname}
          </Style.ContentWriterName>
        </Style.ContentWriter>
        <Style.Context>
          {postData?.data.postType === 'exclusive' && (
            <Button color="dark" size="small" disabled>
              단독
            </Button>
          )}
          {postData?.data.isSold ? (
            <Button color="danger" size="small" disabled>
              판매 완료
            </Button>
          ) : (
            <Button color="primary" size="small" disabled>
              판매중
            </Button>
          )}
          <Style.ContentTitle>{postData?.data.title}</Style.ContentTitle>
          <Style.ContentLocation>
            <LocationIcon />
            {postData?.data.location.region}
          </Style.ContentLocation>
          <Style.ContentDetail>
            {postData?.data.createdTime}
            <Style.ContentViewCount>
              조회&nbsp;
              {postData?.data.viewCount.toLocaleString('ko-KR')}
            </Style.ContentViewCount>
          </Style.ContentDetail>
        </Style.Context>
        <Style.ContentPriceContainer>
          <Style.ContentPrice>
            {postData?.data.price.toLocaleString('ko-KR')} 원
          </Style.ContentPrice>
          <Button color={postData?.data.isPurchased ? 'secondary' : 'primary'}>
            {postData?.data.user.userId === userId
              ? '구매자 목록'
              : postData?.data.isPurchased
              ? '구매 완료'
              : '구매 하기'}
          </Button>
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
        <Style.Content>{postData?.data.content}</Style.Content>
        <Style.HashtagContainer>
          {postData?.data.hashtagList.map((hashtag, index) => (
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
              {postData?.data.commentCount.toLocaleString('ko-KR')}
            </label>
          </Style.ContentStatus>
          <ETCIcon onClick={toggleComment} />
          <Style.ContentToggle>
            {isContentToggle && (
              <Toggle width="100px">
                {postData?.data.user.userId === userId ? (
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
        {postCommentData?.data.comment.map((comment) => (
          <Comment
            comment={comment}
            type="comment"
            postId={postId}
            key={comment.commentId}
          />
        ))}
      </Style.Comments>
    </Style.Post>
  );
};

export default Post;
