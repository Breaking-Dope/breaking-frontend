import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from 'assets/svg/x_mark.svg';
import * as Style from 'components/Modal/Modal.styles';
import Line from 'components/Line/Line';

export default function Modal({ isOpen, closeClick, title, grid, children }) {
  const modalRef = useRef();

  const modalOverlayClick = (event) => {
    if (event.target === modalRef.current) closeClick();
  };
  const windowScrollY = window.scrollY;
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${windowScrollY}px;
      width: 100%;
      `;
      return () => {
        const bodyScrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(bodyScrollY || '0', 10) * -1);
      };
    }
  }, [isOpen]);

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
        {grid ? (
          <Style.GridContent>{children}</Style.GridContent>
        ) : (
          <Style.NoGridContent>{children}</Style.NoGridContent>
        )}
      </Style.Modal>
    </Style.ModalOverlay>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeClick: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  grid: PropTypes.bool,
};

Modal.defaultProps = {
  grid: true,
};
