import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/Post/units/MediaModal.styles';

const MediaModal = ({ isOpen, closeClick, media }) => {
  return (
    <>
      <Style.MediaModalOverlay isOpen={isOpen} onClick={closeClick}>
        <Style.MediaModal>
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
