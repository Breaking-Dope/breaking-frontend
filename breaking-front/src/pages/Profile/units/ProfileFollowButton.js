import React from 'react';
import * as Style from 'pages/Profile/Profile.styles';
import Button from 'components/Button/Button';

const ProfileFollowButton = (isFollowing, isMyPage) => {
  if (isMyPage) {
    return <></>;
  } else if (isFollowing) {
    return (
      <Style.FollowButton>
        <Button>팔로우</Button>
      </Style.FollowButton>
    );
  } else {
    return (
      <Style.FollowButton>
        <Button>팔로우</Button>
      </Style.FollowButton>
    );
  }
};

export default ProfileFollowButton;
