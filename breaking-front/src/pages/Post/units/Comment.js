import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { UserInformationContext } from 'providers/UserInformationProvider';
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
import { ReactComponent as DropUpIcon } from 'assets/svg/drop-up.svg';
import { ReactComponent as DropDownIcon } from 'assets/svg/drop-down.svg';

const Comment = ({ comment, type }) => {
  const { userId, profileImgURL } = useContext(UserInformationContext);
  const [isOpenCommentToggle, setIsOpenCommentToggle] = useState(false);
  const [isOpenCommentFormToggle, setIsOpenCommentFormToggle] = useState(false);
  const [isOpenReplyToggle, setIsOpenReplyToggle] = useState(false);
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const replyData = {
    comment: [
      {
        commentId: 3,
        content: '대댓글1',
        likeCount: 1,
        replyCount: 0,
        user: {
          userId: 1,
          profileImgURL: '',
          nickname: '만두피',
        },
        isLiked: false,
        createdTime: '2022-07-25T15:32:39.445Z',
      },
      {
        commentId: 4,
        content: '대댓글2',
        likeCount: 1,
        replyCount: 0,
        user: {
          userId: 1,
          profileImgURL: '',
          nickname: '만두피',
        },
        isLiked: false,
        createdTime: '2022-07-25T15:32:39.445Z',
      },
    ],
  };
  const toggleLiked = () => {
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
    // 대댓글 api 호출
  };

  return (
    <>
      <Style.Comment isReply={comment.replyCount}>
        <ProfileImage size="medium" src={comment.user.profileImgURL} />
        <Style.ContentContainer>
          <Style.Nickname>{comment.user.nickname}</Style.Nickname>
          <Style.CreatedTime>{comment.createdTime}</Style.CreatedTime>
          <Style.Content>{comment.content}</Style.Content>
          <Style.CommentFooter>
            <Style.Status>
              <label onClick={toggleLiked}>
                {isLiked ? <LikedIcon /> : <LikeIcon />}
                {likeCount}
              </label>
              {type === 'comment' && (
                <span onClick={toggleCommentForm}>답글쓰기</span>
              )}
            </Style.Status>
            <ETCIcon onClick={toggleComment} />
            <Style.CommentToggle>
              {isOpenCommentToggle &&
                (comment.user.userId === userId ? (
                  <Toggle width="100px">
                    <Toggle.LabelLink
                      path={PAGE_PATH.HOME}
                      icon={<EditIcon />}
                      label="수정"
                    />
                    <Toggle.LabelLink
                      path={PAGE_PATH.HOME}
                      icon={<RemoveIcon />}
                      label="삭제"
                    />
                  </Toggle>
                ) : (
                  <Toggle width="100px">
                    <Toggle.LabelLink
                      path={PAGE_PATH.HOME}
                      icon={<ChatIcon />}
                      label="채팅"
                    />
                    <Toggle.LabelLink
                      path={PAGE_PATH.HOME}
                      icon={<BlockIcon />}
                      label="차단"
                    />
                  </Toggle>
                ))}
            </Style.CommentToggle>
          </Style.CommentFooter>
        </Style.ContentContainer>
      </Style.Comment>
      {isOpenCommentFormToggle && (
        <Style.AddComment>
          <CommentForm profileImgURL={profileImgURL} />
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
          {replyData.comment.map((reply) => (
            <Comment comment={reply} type="reply" key={reply.commentId} />
          ))}
        </Style.Reply>
      )}
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['comment', 'reply']),
};

export default Comment;
