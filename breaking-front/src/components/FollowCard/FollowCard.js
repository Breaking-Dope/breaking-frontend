import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/FollowCard/FollowCard.styles';
import ProfileImage from 'components/ProfileImage/ProfileImage';

export default function FollowCard({
  profileData,
  isPermission,
  cardClick,
  deleteClick,
}) {
  return (
    <Style.FollowCard>
      <ProfileImage
        src={profileData?.profileImgURL}
        size="medium"
        onClick={cardClick}
      />
      <Style.Container>
        <Style.Nickname onClick={cardClick}>
          {profileData?.nickname}
        </Style.Nickname>
        <Style.StatusMessage>{profileData?.statusMsg}</Style.StatusMessage>
      </Style.Container>
      {isPermission && (
        <Style.DeleteButton size="small" onClick={deleteClick}>
          삭제
        </Style.DeleteButton>
      )}
    </Style.FollowCard>
  );
}

FollowCard.propTypes = {
  profileData: PropTypes.object,
  isPermission: PropTypes.bool,
  cardClick: PropTypes.func,
  deleteClick: PropTypes.func,
};
