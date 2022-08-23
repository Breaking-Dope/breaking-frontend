import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import timeFormatter from 'utils/timeFormatter';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import Toggle from 'components/Toggle/Toggle';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Reply from 'pages/Post/components/Reply/Reply';
import CommentForm from 'pages/Post/components/CommentForm/CommentForm';
import useCommentLike from 'pages/Post/hooks/mutations/useCommentLike';
import useDeleteCommentLike from 'pages/Post/hooks/mutations/useDeleteCommentLike';
import useDeleteComment from 'pages/Post/hooks/mutations/useDeleteComment';
import usePostReply from 'pages/Post/hooks/queries/usePostReply';
import * as Style from 'pages/Post/components/Comment/Comment.styles';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { ReactComponent as BlockIcon } from 'assets/svg/block.svg';
import { ReactComponent as DropUpIcon } from 'assets/svg/drop_up.svg';
import { ReactComponent as DropDownIcon } from 'assets/svg/drop_down.svg';

const Comment = ({ comment, type }) => {
  const navigate = useNavigate();

  const { userId, profileImgURL } = useContext(UserInformationContext);
  const [isOpenCommentToggle, setIsOpenCommentToggle] = useState(false);
  const [isOpenCommentFormToggle, setIsOpenCommentFormToggle] = useState(false);
  const [isOpenCommentEditToggle, setIsOpenCommentEditToggle] = useState(false);
  const [isOpenReplyToggle, setIsOpenReplyToggle] = useState(false);
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [commentId, setCommentId] = useState('');
  const {
    data: postReplyData,
    isFetching: isPostReplyFetching,
    fetchNextPage: FetchNextPostReply,
  } = usePostReply(commentId);

  const { mutate: CommentLike } = useCommentLike();
  const { mutate: DeleteCommentLike } = useDeleteCommentLike();
  const { mutate: DeleteComment } = useDeleteComment();

  const profileClick = () => {
    navigate(PAGE_PATH.PROFILE(comment.user.userId));
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
    if (isLiked) {
      setLikeCount((pre) => pre - 1);
      DeleteCommentLike(comment.commentId);
    } else {
      setLikeCount((pre) => pre + 1);
      CommentLike(comment.commentId);
    }
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
          src={ImageUrlConverter(comment.user.profileImgURL)}
          profileClick={profileClick}
        />
        <Style.ContentContainer>
          <Style.Nickname>{comment.user.nickname}</Style.Nickname>
          <Style.CreatedDate>
            {timeFormatter(new Date(comment.createdDate))}
          </Style.CreatedDate>
          <Style.Content>
            {comment.content
              .split(/(#[^\s#]+|\n)/g)
              .map((contentSlice, index) => {
                if (contentSlice === '\n')
                  return <br key={'comment-br-' + index} />;
                else if (contentSlice[0] === '#')
                  return (
                    <Style.Hashtag key={'comment-hashtag-' + index}>
                      {contentSlice}
                    </Style.Hashtag>
                  );
                else return contentSlice;
              })}
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
            <Style.CommentToggle
              isOpen={isOpenCommentToggle}
              onMouseDown={(event) => event.preventDefault()}
            >
              {comment.user.userId === userId ? (
                <Toggle width="100px">
                  <Toggle.LabelLink
                    icon={<EditIcon />}
                    label="수정"
                    labelClick={commentEditClick}
                  />
                  <Toggle.LabelLink
                    icon={<RemoveIcon />}
                    label="삭제"
                    labelClick={commentDeleteClick}
                  />
                </Toggle>
              ) : (
                <Toggle width="100px">
                  <Toggle.LabelLink icon={<ChatIcon />} label="채팅" />
                  <Toggle.LabelLink icon={<BlockIcon />} label="차단" />
                </Toggle>
              )}
            </Style.CommentToggle>
          </Style.CommentFooter>
          {isOpenCommentFormToggle && (
            <Style.AddComment>
              <CommentForm
                profileImgURL={profileImgURL}
                commentId={comment.commentId}
                type="reply"
                closeClick={() => setIsOpenCommentFormToggle(false)}
              />
            </Style.AddComment>
          )}
          {comment.replyCount !== 0 && (
            <Style.ReplyCount onClick={toggleReply}>
              {isOpenReplyToggle ? <DropUpIcon /> : <DropDownIcon />}
              답글 {comment.replyCount}개
            </Style.ReplyCount>
          )}
        </Style.ContentContainer>
      </Style.Comment>
      {isOpenReplyToggle && (
        <Reply
          replyData={postReplyData}
          isFetching={isPostReplyFetching}
          FetchNextReply={FetchNextPostReply}
        />
      )}
      {isOpenCommentEditToggle && (
        <Style.CommentEditForm>
          <CommentForm
            profileImgURL={profileImgURL}
            commentId={comment.commentId}
            content={comment.content}
            closeClick={commentEditClick}
            type="edit"
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
