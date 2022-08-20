import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'pages/Search/components/UserCard/UserCard.styles';
import Button from 'components/Button/Button';

const UserCard = ({ user }) => {
  return (
    <Style.UserInformationContainer>
      <ProfileImage size="medium" src={user.profileImgURL} />
      <Style.UserName>{user.nickname}</Style.UserName>
      <Style.UserStatusMsg>{user.statusMsg}</Style.UserStatusMsg>
      {user.isFollowing ? (
        <Button size="small">언팔로우</Button>
      ) : (
        <Button size="small">팔로우</Button>
      )}
    </Style.UserInformationContainer>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
