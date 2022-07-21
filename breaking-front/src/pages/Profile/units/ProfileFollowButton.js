/* eslint-disable no-unused-vars */
import React from 'react';
import * as Style from 'pages/Profile/units/ProfileFollowButton.styles';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from 'react-query';
import { postFollow, postUnFollow } from 'api/profile';

const ProfileFollowButton = ({ userId, isFollowing, isMyPage }) => {
  const queryClient = useQueryClient();
  const { mutate: Follow } = useMutation(postFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
    },
  });

  const { mutate: UnFollow } = useMutation(postUnFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
    },
  });
  if (isMyPage) {
    return <></>;
  } else if (isFollowing) {
    return (
      <Style.FollowButton onClick={() => UnFollow(userId)}>
        언팔로우
      </Style.FollowButton>
    );
  } else {
    return (
      <Style.FollowButton onClick={() => Follow(userId)}>
        팔로우
      </Style.FollowButton>
    );
  }
};

ProfileFollowButton.propTypes = {
  userId: PropTypes.number,
  isFollowing: PropTypes.bool,
  isMyPage: PropTypes.bool,
};

export default ProfileFollowButton;
