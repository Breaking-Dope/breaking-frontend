import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/FollowCard/FollowCard.styles';
import UserImage from 'components/UserImage/UserImage';

export default function FollowCard({
  profileData,
  isMyPage,
  cardClick,
  deleteClick,
}) {
  return (
    <Style.FollowCard>
      <UserImage
        src={profileData.profileImgURL}
        size="medium"
        onClick={cardClick}
      />
      <Style.Container>
        <Style.Nickname onClick={cardClick}>
          {profileData.nickname}
        </Style.Nickname>
        <Style.StatusMessage>{profileData.statusMsg}</Style.StatusMessage>
      </Style.Container>
      {isMyPage && (
        <Style.DeleteButton size="small" onClick={deleteClick}>
          삭제
        </Style.DeleteButton>
      )}
    </Style.FollowCard>
  );
}

FollowCard.propTypes = {
  profileData: PropTypes.object,
  isMyPage: PropTypes.bool,
  cardClick: PropTypes.func,
  deleteClick: PropTypes.func,
};
