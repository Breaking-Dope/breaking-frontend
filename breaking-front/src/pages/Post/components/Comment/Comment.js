import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import timeFormatter from 'utils/timeFormatter';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import ContentSlice from 'components/ContentSlice/ContentSlice';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import useCommentLike from 'pages/Post/hooks/mutations/useCommentLike';
import useDeleteCommentLike from 'pages/Post/hooks/mutations/useDeleteCommentLike';
import useDeleteComment from 'pages/Post/hooks/mutations/useDeleteComment';
import useCommentReplyWrite from 'pages/Post/hooks/mutations/useCommentReplyWrite';
import useCommentEdit from 'pages/Post/hooks/mutations/useCommentEdit';
import Reply from 'pages/Post/components/Reply/Reply';
import CommentForm from 'pages/Post/components/CommentForm/CommentForm';
import CommentToggle from 'pages/Post/components/CommentToggle/CommentToggle';
import * as Style from 'pages/Post/components/Comment/Comment.styles';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as DropUpIcon } from 'assets/svg/drop_up.svg';
import { ReactComponent as DropDownIcon } from 'assets/svg/drop_down.svg';

const Comment = ({ comment, type }) => {
  const navigate = useNavigate();

  const { userId } = useContext(UserInformationContext);
  const [isOpenCommentToggle, setIsOpenCommentToggle] = useState(false);
  const [isOpenCommentFormToggle, setIsOpenCommentFormToggle] = useState(false);
  const [isOpenCommentEditToggle, setIsOpenCommentEditToggle] = useState(false);
  const [isOpenReplyToggle, setIsOpenReplyToggle] = useState(false);
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [commentId, setCommentId] = useState('');

  const { mutate: CommentLike } = useCommentLike();
  const { mutate: DeleteCommentLike } = useDeleteCommentLike();
  const { mutate: DeleteComment } = useDeleteComment();
  const { mutate: CommentReplyWrite } = useCommentReplyWrite();
  const { mutate: CommentEdit } = useCommentEdit();

  const profileClick = () => {
    navigate(PAGE_PATH.PROFILE(comment.user?.userId));
  };

  const commentEditClick = () => {
    setIsOpenCommentFormToggle(false);
    setIsOpenCommentToggle(false);
    setIsOpenCommentEditToggle((pre) => !pre);
  };

  const commentDeleteClick = () => {
    let deleteConfirm = window.confirm('삭제하시겠습니까?');
    deleteConfirm && DeleteComment(comment.commentId);
  };

  const toggleLiked = () => {
    isLiked
      ? DeleteCommentLike(comment.commentId)
      : CommentLike(comment.commentId);
    setLikeCount((pre) => (isLiked ? pre - 1 : pre + 1));
    setIsLiked((pre) => !pre);
  };

  const toggleCommentForm = () => {
    setIsOpenCommentFormToggle((pre) => !pre);
  };

  const toggleComment = () => {
    setIsOpenCommentToggle((pre) => !pre);
  };

  const toggleReply = () => {
    setIsOpenReplyToggle((pre) => !pre);
    setCommentId(comment.commentId);
  };

  const handleCommentReplySubmit = ({ comment, hashtagList }) => {
    CommentReplyWrite({
      commentId: comment.commentId,
      content: comment,
      hashtagList: hashtagList,
    });
    setIsOpenCommentFormToggle(false);
  };

  const handleCommentEditSubmit = ({ comment, hashtagList }) => {
    CommentEdit({
      commentId: comment.commentId,
      content: comment,
      hashtagList: hashtagList,
    });
    setIsOpenCommentEditToggle((pre) => !pre);
  };

  useEffect(() => {
    setIsLiked(comment.isLiked);
    setLikeCount(comment.likeCount);
  }, [comment]);

  return (
    <>
      <Style.Comment
        isEditing={isOpenCommentEditToggle}
        isOpenCommentToggle={isOpenCommentToggle}
        isOpenReplyToggle={isOpenReplyToggle}
      >
        <ProfileImage
          size="medium"
          src={ImageUrlConverter(comment.user?.profileImgURL)}
          profileClick={profileClick}
        />
        <Style.ContentContainer>
          <Style.Nickname>{comment.user?.nickname}</Style.Nickname>
          <Style.CreatedDate>
            {timeFormatter(new Date(comment.createdDate))}
          </Style.CreatedDate>
          <Style.Content>
            <ContentSlice content={comment.content} />
          </Style.Content>
          <Style.CommentFooter>
            <Style.Status>
              <Style.CommentLike onClick={toggleLiked}>
                {isLiked ? <LikedIcon /> : <LikeIcon />}
                {likeCount.toLocaleString('ko-KR')}
              </Style.CommentLike>
              {type === 'comment' && (
                <span onClick={toggleCommentForm}>답글쓰기</span>
              )}
            </Style.Status>
            <Style.ETCIconContainer
              onClick={toggleComment}
              tabIndex="0"
              onBlur={() => setIsOpenCommentToggle(false)}
            >
              <ETCIcon />
            </Style.ETCIconContainer>
            <CommentToggle
              isOpen={isOpenCommentToggle}
              isMyComment={comment.user?.userId === userId}
              editClick={commentEditClick}
              deleteClick={commentDeleteClick}
            />
          </Style.CommentFooter>
          {isOpenCommentFormToggle && (
            <CommentForm
              closeClick={() => setIsOpenCommentFormToggle(false)}
              onSubmit={handleCommentReplySubmit}
            />
          )}
          {comment.replyCount !== 0 && (
            <Style.ReplyCount onClick={toggleReply}>
              {isOpenReplyToggle ? <DropUpIcon /> : <DropDownIcon />}
              답글 {comment.replyCount}개
            </Style.ReplyCount>
          )}
        </Style.ContentContainer>
      </Style.Comment>
      <Reply isOpen={isOpenReplyToggle} commentId={commentId} />
      {isOpenCommentEditToggle && (
        <Style.CommentEditForm>
          <CommentForm
            content={comment.content}
            closeClick={commentEditClick}
            onSubmit={handleCommentEditSubmit}
          />
        </Style.CommentEditForm>
      )}
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['comment', 'reply']),
};

export default Comment;
