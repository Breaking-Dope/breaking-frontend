import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/FollowCard/FollowCard.styles';
import UserImage from 'components/UserImage/UserImage';

export default function FollowCard({ profileData, isMyPage, deleteClick }) {
  return (
    <Style.FollowCard>
      <UserImage src={profileData.profileImgURL} size="medium" />
      <Style.Container>
        <Style.Nickname>{profileData.nickname}</Style.Nickname>
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
  deleteClick: PropTypes.func,
};
