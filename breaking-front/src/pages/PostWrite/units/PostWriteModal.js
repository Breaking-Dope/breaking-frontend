import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/PostWrite/units/PostWriteModal.styles';
import { ReactComponent as CloseIcon } from 'assets/svg/x_mark.svg';
// import { ReactComponent as HambugerIcon } from 'assets/svg/hambuger-menu.svg';

const PostWriteModal = ({ isOpen, children }) => {
  return (
    <Style.ModalOverlay isOpen={isOpen}>
      <Style.Modal>
        <Style.CloseButton>
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
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PostWriteModal;
