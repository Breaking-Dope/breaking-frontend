import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/FollowCard/FollowCard.styles';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import ImageUrlConverter from 'utils/ImageUrlConverter';

export default function FollowCard({
  profileData,
  isPermission,
  cardClick,
  unFollowClick,
  followClick,
}) {
  const [isFollow, setIsFollow] = useState(profileData.isFollowing);
  const toggleIsFollow = () => {
    setIsFollow((pre) => !pre);
  };
  return (
    <Style.FollowCard>
      <ProfileImage
        src={ImageUrlConverter(profileData?.profileImgURL)}
        size="medium"
        onClick={cardClick}
      />
      <Style.Container>
        <Style.Nickname onClick={cardClick}>
          {profileData?.nickname}
        </Style.Nickname>
        <Style.StatusMessage>{profileData?.statusMsg}</Style.StatusMessage>
      </Style.Container>
      {isPermission &&
        (isFollow ? (
          <Style.DeleteButton
            size="small"
            onClick={() => {
              unFollowClick(profileData.userId);
              toggleIsFollow();
            }}
          >
            언팔로우
          </Style.DeleteButton>
        ) : (
          <Style.DeleteButton
            size="small"
            onClick={() => {
              followClick(profileData.userId);
              toggleIsFollow();
            }}
          >
            팔로우
          </Style.DeleteButton>
        ))}
    </Style.FollowCard>
  );
}

FollowCard.propTypes = {
  profileData: PropTypes.object,
  isPermission: PropTypes.bool,
  cardClick: PropTypes.func,
  unFollowClick: PropTypes.func,
  followClick: PropTypes.func,
};
