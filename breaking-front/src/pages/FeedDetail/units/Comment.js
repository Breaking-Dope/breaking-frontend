import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Toggle from 'components/Toggle/Toggle';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import CommentForm from 'pages/FeedDetail/units/CommentForm';
import * as Style from 'pages/FeedDetail/units/Comment.styles';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { ReactComponent as BlockIcon } from 'assets/svg/block.svg';
import { PAGE_PATH } from 'constants/path';
import { UserInformationContext } from 'providers/UserInformationProvider';

const Comment = ({ comment, isReply }) => {
  const { userId, profileImgURL } = useContext(UserInformationContext);
  const [isOpenCommentToggle, setIsOpenCommentToggle] = useState(false);
  const [isOpenReplyToggle, setIsOpenReplyToggle] = useState(false);
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [likeCount, setLikeCount] = useState(comment.likeCount);

  const handleLiked = () => {
    setLikeCount((pre) => (isLiked ? pre - 1 : pre + 1));
    setIsLiked((pre) => !pre);
  };

  const handleReply = () => {
    setIsOpenReplyToggle((pre) => !pre);
  };

  const handleCommentToggle = () => {
    setIsOpenCommentToggle((pre) => !pre);
  };

  return (
    <>
      <Style.Comment>
        <ProfileImage size="medium" src={comment.user.profileImgURL} />
        <Style.ContentContainer>
          <Style.Nickname>{comment.user.nickname}</Style.Nickname>
          <Style.Content>{comment.content}</Style.Content>
          <Style.CommentFooter>
            <Style.Status>
              <label onClick={handleLiked}>
                {isLiked ? <LikedIcon /> : <LikeIcon />}
                {likeCount}
              </label>
              {isReply ? <></> : <span onClick={handleReply}>답글쓰기</span>}
            </Style.Status>
            <ETCIcon onClick={handleCommentToggle} />
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
      {isOpenReplyToggle && (
        <Style.AddComment>
          <CommentForm profileImgURL={profileImgURL} />
        </Style.AddComment>
      )}
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  isReply: PropTypes.bool,
};

export default Comment;
