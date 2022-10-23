import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'pages/Search/SearchUnified/components/UserCard/UserCard.styles';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useUserCard from 'pages/Search/hooks/useUserCard';
import FollowButton from 'components/FollowButton/FollowButton';

const UserCard = ({ user }) => {
  const userData = useContext(UserInformationContext);
  const [isFollowing, follow, unFollow, CardClick] = useUserCard(user);
  return (
    <Style.UserInformationContainer>
      <ProfileImage
        size="medium"
        src={ImageUrlConverter(user.profileImgURL)}
        onClick={CardClick}
      />
      <Style.UserName onClick={CardClick}>{user.nickname}</Style.UserName>
      <Style.UserStatusMsg>{user.statusMsg}</Style.UserStatusMsg>
      <FollowButton
        userId={userData.userId}
        useFollow={follow}
        useUnFollow={unFollow}
        size="small"
        isFollowing={isFollowing}
      />
    </Style.UserInformationContainer>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
