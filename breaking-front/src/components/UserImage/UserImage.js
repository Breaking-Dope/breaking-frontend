import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/UserImage/UserImage.styles';

export default function UserImage({ size, src, ...props }) {
  return src ? (
    <Style.UserImage src={src} size={size} alt="사용자 이미지" {...props} />
  ) : (
    <Style.DefaultImage size={size} alt="기본 이미지" {...props} />
  );
}

UserImage.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
  src: PropTypes.string,
};
