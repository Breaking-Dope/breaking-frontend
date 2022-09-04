import ProfileImage from 'components/ProfileImage/ProfileImage';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/Search/SearchUser/components/SearchUserResultCard/SearchUserResultCard.styles';
import NumberFormatter from 'utils/NumberFormatter';
import FollowButton from 'components/FollowButton/FollowButton';
import { UserInformationContext } from 'providers/UserInformationProvider';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import useUserCard from 'pages/Search/hooks/useUserCard';

const SearchUserResultCard = ({ user }) => {
  const userData = useContext(UserInformationContext);
  const [isFollowing, follow, unFollow, CardClick] = useUserCard(user);
  return (
    <Style.ResultCard>
      <ProfileImage
        size="large"
        src={ImageUrlConverter(user.profileImgURL)}
        onClick={CardClick}
      />
      <Style.UserInformationContainer>
        <Style.UserTitleContainer>
          <Style.UserNickName onClick={CardClick}>
            {user.nickname}
          </Style.UserNickName>
          <Style.UserEmail>{user.email}</Style.UserEmail>
        </Style.UserTitleContainer>
        <Style.UserFollowers>
          팔로워 {NumberFormatter(user.followerCount)}명
        </Style.UserFollowers>
        <Style.UserStatusMSG>{user.statusMsg}</Style.UserStatusMSG>
      </Style.UserInformationContainer>
      <FollowButton
        userId={user.userId}
        isFollowing={isFollowing}
        useFollow={follow}
        useUnFollow={unFollow}
        isMe={userData.userId === user.userId}
      />
    </Style.ResultCard>
  );
};

SearchUserResultCard.propTypes = {
  user: PropTypes.object,
};

export default SearchUserResultCard;
