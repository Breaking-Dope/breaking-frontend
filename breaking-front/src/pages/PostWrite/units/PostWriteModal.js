import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/PostWrite/units/PostWriteModal.styles';
import { ReactComponent as CloseIcon } from 'assets/svg/x_mark.svg';

const PostWriteModal = ({ isOpen, closeClick, children }) => {
  return (
    <Style.ModalOverlay isOpen={isOpen}>
      <Style.Modal>
        <Style.CloseButton onClick={closeClick}>
          <CloseIcon />
        </Style.CloseButton>
        <Style.Content>{children}</Style.Content>
      </Style.Modal>
    </Style.ModalOverlay>
  );
};

PostWriteModal.propTypes = {
  isOpen: PropTypes.bool,
  closeClick: PropTypes.func,
  children: PropTypes.node,
};

export default PostWriteModal;
