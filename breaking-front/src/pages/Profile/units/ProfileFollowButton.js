/* eslint-disable no-unused-vars */
import React from 'react';
import * as Style from 'pages/Profile/units/ProfileFollowButton.styles';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from 'react-query';

const ProfileFollowButton = ({
  userId,
  isFollowing,
  isMyPage,
  Follow,
  UnFollow,
}) => {
  const queryClient = useQueryClient();
  if (isMyPage) {
    return <></>;
  } else if (isFollowing) {
    return (
      <Style.FollowButton
        onClick={() =>
          UnFollow(userId, {
            onSuccess: () => {
              queryClient.invalidateQueries('profile');
            },
          })
        }
      >
        언팔로우
      </Style.FollowButton>
    );
  } else {
    return (
      <Style.FollowButton
        onClick={() =>
          Follow(userId, {
            onSuccess: () => {
              queryClient.invalidateQueries('profile');
            },
          })
        }
      >
        팔로우
      </Style.FollowButton>
    );
  }
};

ProfileFollowButton.propTypes = {
  userId: PropTypes.number,
  isFollowing: PropTypes.bool,
  isMyPage: PropTypes.bool,
  Follow: PropTypes.func,
  UnFollow: PropTypes.func,
};

export default ProfileFollowButton;
