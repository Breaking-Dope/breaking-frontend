import ProfileImage from 'components/ProfileImage/ProfileImage';
import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/Search/SearchUser/components/SearchUserResultCard.styles';
import numberFormatter from 'utils/numberFormatter';
import FollowButton from 'components/FollowButton/FollowButton';

const SearchUserResultCard = ({ user }) => {
  return (
    <Style.ResultCard>
      <ProfileImage size="large" src={user.profileImgURL} />
      <Style.UserInformationContainer>
        <Style.UserTitleContainer>
          <Style.UserNickName>{user.nickname}</Style.UserNickName>
          <Style.UserEmail>{user.email}</Style.UserEmail>
        </Style.UserTitleContainer>
        <Style.UserFollowers>
          팔로워 {numberFormatter(user.followerCount)}명
        </Style.UserFollowers>
        <Style.UserStatusMSG>{user.statusMsg}</Style.UserStatusMSG>
      </Style.UserInformationContainer>
      <FollowButton userId={user.userId} isFollowing={user.isFollowing} />
    </Style.ResultCard>
  );
};

SearchUserResultCard.propTypes = {
  user: PropTypes.object,
};

export default SearchUserResultCard;
