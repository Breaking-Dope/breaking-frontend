import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from 'assets/svg/x-mark.svg';
import * as Style from 'components/Modal/Modal.styles';
import Line from 'components/Line/Line';

export default function Modal({ isOpen, closeClick, title, children }) {
  return (
    <Style.ModalOverlay isOpen={isOpen}>
      <Style.Modal>
        <Style.CloseButton onClick={closeClick}>
          <CloseIcon />
        </Style.CloseButton>
        <Style.Title>{title}</Style.Title>
        <Line width="850px" />
        <Style.Content>{children}</Style.Content>
      </Style.Modal>
    </Style.ModalOverlay>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeClick: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};
