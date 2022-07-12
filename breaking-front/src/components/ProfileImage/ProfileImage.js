import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/ProfileImage/ProfileImage.styles';

export default function ProfileImage({ size, src, profileClick, ...props }) {
  return (
    <Style.ProfileImageContainer>
      {src ? (
        <Style.ProfileImage
          src={src}
          size={size}
          alt="사용자 이미지"
          onClick={profileClick}
          {...props}
        />
      ) : (
        <Style.DefaultImage
          size={size}
          alt="기본 이미지"
          onClick={profileClick}
          {...props}
        />
      )}
    </Style.ProfileImageContainer>
  );
}

ProfileImage.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
  src: PropTypes.string,
  profileClick: PropTypes.func,
};
