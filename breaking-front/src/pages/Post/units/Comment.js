import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import PropTypes from 'prop-types';
import { UserInformationContext } from 'providers/UserInformationProvider';
import {
  deletePostComment,
  deletePostCommentLike,
  postPostCommentLike,
} from 'api/post';
import usePostReply from 'hooks/queries/usePostReply';
import { PAGE_PATH } from 'constants/path';
import Toggle from 'components/Toggle/Toggle';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import CommentForm from 'pages/Post/units/CommentForm';
import * as Style from 'pages/Post/units/Comment.styles';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { ReactComponent as BlockIcon } from 'assets/svg/block.svg';
import { ReactComponent as DropUpIcon } from 'assets/svg/drop_up.svg';
import { ReactComponent as DropDownIcon } from 'assets/svg/drop_down.svg';
import { ReactComponent as MoreIcon } from 'assets/svg/more_arrow.svg';
import { useTheme } from 'styled-components';

const Comment = ({ comment, type, postId }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { userId, profileImgURL } = useContext(UserInformationContext);
  const [isOpenCommentToggle, setIsOpenCommentToggle] = useState(false);
  const [isOpenCommentFormToggle, setIsOpenCommentFormToggle] = useState(false);
  const [isOpenCommentEditToggle, setIsOpenCommentEditToggle] = useState(false);
  const [isOpenReplyToggle, setIsOpenReplyToggle] = useState(false);
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [likeCount, setLikeCount] = useState(comment.likeCount);

  const {
    data: postReplyData,
    isFetching: isPostReplyFetching,
    fetchNextPage: FetchNextPostReply,
    refetch: PostReplyReFetch,
  } = usePostReply(comment.commentId);

  const { mutate: CommentLike } = useMutation(postPostCommentLike);
  const { mutate: DeleteCommentLike } = useMutation(deletePostCommentLike);
  const { mutate: DeleteComment } = useMutation(deletePostComment);

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

    deleteConfirm &&
      DeleteComment(comment.commentId, {
        onSuccess: () => {
          alert('댓글을 삭제하였습니다.');
        },
      });
  };

  const moreShowReplyClick = () => {
    FetchNextPostReply();
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
    PostReplyReFetch();
  };

  return (
    <>
      <Style.Comment
        isEditing={isOpenCommentEditToggle}
        isOpenToggle={isOpenCommentToggle}
      >
        <Style.ProfileImageContainer>
          <ProfileImage
            size="medium"
            src={comment.user.profileImgURL}
            profileClick={profileClick}
          />
        </Style.ProfileImageContainer>
        <Style.ContentContainer>
          <Style.Nickname>{comment.user.nickname}</Style.Nickname>
          <Style.CreatedTime>{comment.createdTime}</Style.CreatedTime>
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
              <label onClick={toggleLiked}>
                {isLiked ? <LikedIcon /> : <LikeIcon />}
                {likeCount.toLocaleString('ko-KR')}
              </label>
              {type === 'comment' && (
                <span onClick={toggleCommentForm}>답글쓰기</span>
              )}
            </Style.Status>
            <Style.ETCIconContainer onClick={toggleComment}>
              <ETCIcon />
            </Style.ETCIconContainer>
            <Style.CommentToggle isOpen={isOpenCommentToggle}>
              {comment.user.userId === userId ? (
                <Toggle width="100px">
                  <Toggle.LabelLink
                    path={PAGE_PATH.POST(postId)}
                    icon={<EditIcon />}
                    label="수정"
                    onClick={commentEditClick}
                  />
                  <Toggle.LabelLink
                    path={PAGE_PATH.POST(postId)}
                    icon={<RemoveIcon />}
                    label="삭제"
                    onClick={commentDeleteClick}
                  />
                </Toggle>
              ) : (
                <Toggle width="100px">
                  <Toggle.LabelLink
                    path={PAGE_PATH.POST(postId)}
                    icon={<ChatIcon />}
                    label="채팅"
                  />
                  <Toggle.LabelLink
                    path={PAGE_PATH.POST(postId)}
                    icon={<BlockIcon />}
                    label="차단"
                  />
                </Toggle>
              )}
            </Style.CommentToggle>
          </Style.CommentFooter>
        </Style.ContentContainer>
      </Style.Comment>
      {isOpenCommentFormToggle && (
        <Style.AddComment>
          <CommentForm
            profileImgURL={profileImgURL}
            commentId={comment.commentId}
            type="reply"
          />
        </Style.AddComment>
      )}
      {comment.replyCount !== 0 && (
        <Style.ReplyCount onClick={toggleReply}>
          {isOpenReplyToggle ? <DropUpIcon /> : <DropDownIcon />}
          답글 {comment.replyCount}개
        </Style.ReplyCount>
      )}
      {isOpenReplyToggle && (
        <Style.Reply>
          {isPostReplyFetching ? (
            <Style.Loading type="spin" color={theme.blue[900]} width="40px" />
          ) : (
            <>
              {postReplyData?.pages.map((page) =>
                page.result.map((reply) => (
                  <Comment comment={reply} type="reply" key={reply.commentId} />
                ))
              )}
              <Style.MoreChowReply onClick={moreShowReplyClick}>
                <MoreIcon />
                더보기
              </Style.MoreChowReply>
            </>
          )}
        </Style.Reply>
      )}
      {isOpenCommentEditToggle && (
        <Style.CommentEditForm>
          <CommentForm
            profileImgURL={profileImgURL}
            commentId={comment.commentId}
            content={comment.content}
            cancelClick={commentEditClick}
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
  postId: PropTypes.number,
};

export default Comment;
