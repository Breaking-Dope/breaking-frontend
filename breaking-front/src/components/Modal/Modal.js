import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from 'assets/svg/x_mark.svg';
import * as Style from 'components/Modal/Modal.styles';
import Line from 'components/Line/Line';

export default function Modal({ isOpen, closeClick, title, children }) {
  const modalRef = useRef();

  const modalOverlayClick = (event) => {
    if (event.target === modalRef.current) closeClick();
  };

  return (
    <Style.ModalOverlay
      isOpen={isOpen}
      ref={modalRef}
      onClick={modalOverlayClick}
    >
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
