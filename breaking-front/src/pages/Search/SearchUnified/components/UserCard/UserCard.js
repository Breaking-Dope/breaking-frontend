import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'pages/Search/SearchUnified/components/UserCard/UserCard.styles';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import ImageUrlConverter from 'utils/ImageUrlConverter';

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const CardClick = () => {
    navigate(PAGE_PATH.PROFILE(user.userId));
  };
  return (
    <Style.UserInformationContainer>
      <ProfileImage
        size="medium"
        src={ImageUrlConverter(user.profileImgURL)}
        onClick={CardClick}
      />
      <Style.UserName onClick={CardClick}>{user.nickname}</Style.UserName>
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
