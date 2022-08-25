import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'pages/Search/SearchUnified/components/UserCard/UserCard.styles';
import Button from 'components/Button/Button';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useUserCard from 'pages/Search/hooks/useUserCard';

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
      {userData.userId !== user.userId && isFollowing ? (
        <Button size="small" onClick={() => unFollow.mutate(user.userId)}>
          언팔로우
        </Button>
      ) : (
        <Button size="small" onClick={() => follow.mutate(user.userId)}>
          팔로우
        </Button>
      )}
    </Style.UserInformationContainer>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
