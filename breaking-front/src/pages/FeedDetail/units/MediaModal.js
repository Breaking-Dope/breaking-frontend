import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/FeedDetail/units/MediaModal.styles';
import { ReactComponent as CloseIcon } from 'assets/svg/x-mark.svg';

const MediaModal = ({ isOpen, closeClick, media }) => {
  return (
    <>
      <Style.MediaModalOverlay isOpen={isOpen}>
        <Style.MediaModal>
          <Style.CloseButton onClick={closeClick}>
            <CloseIcon />
          </Style.CloseButton>
          <Style.Media src={media} />
        </Style.MediaModal>
      </Style.MediaModalOverlay>
    </>
  );
};

MediaModal.propTypes = {
  isOpen: PropTypes.bool,
  closeClick: PropTypes.func,
  media: PropTypes.string,
};

export default MediaModal;
