import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'components/Toggle/Toggle';
import * as Style from 'pages/Post/components/CommentToggle/CommentToggle.styles';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { ReactComponent as BlockIcon } from 'assets/svg/block.svg';

const CommentToggle = ({ isOpen, isMyComment, editClick, deleteClick }) => {
  return (
    <Style.CommentToggle
      isOpen={isOpen}
      onMouseDown={(event) => event.preventDefault()}
    >
      {isMyComment ? (
        <Toggle width="100px">
          <Toggle.LabelLink
            icon={<EditIcon />}
            label="수정"
            labelClick={editClick}
          />
          <Toggle.LabelLink
            icon={<RemoveIcon />}
            label="삭제"
            labelClick={deleteClick}
          />
        </Toggle>
      ) : (
        <Toggle width="100px">
          <Toggle.LabelLink icon={<ChatIcon />} label="채팅" />
          <Toggle.LabelLink icon={<BlockIcon />} label="차단" />
        </Toggle>
      )}
    </Style.CommentToggle>
  );
};

CommentToggle.propTypes = {
  isOpen: PropTypes.bool,
  isMyComment: PropTypes.bool,
  editClick: PropTypes.func,
  deleteClick: PropTypes.func,
};

export default CommentToggle;
