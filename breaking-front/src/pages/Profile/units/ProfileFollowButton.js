import React from 'react';
import * as Style from 'pages/Profile/units/ProfileFollowButton.styles';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from 'react-query';
import { postFollow, deleteUnFollow } from 'api/profile';
import { useTheme } from 'styled-components';

const ProfileFollowButton = ({ userId, isFollowing, isMyPage }) => {
  const queryClient = useQueryClient();
  const theme = useTheme();
  const { mutate: UnFollow, isLoading: isUnFollowLoading } =
    useMutation(deleteUnFollow);
  const { mutate: Follow, isLoading: isFollowLoading } =
    useMutation(postFollow);

  if (isMyPage) {
    return <></>;
  } else if (isFollowing) {
    return (
      <Style.FollowButton
        onClick={() =>
          !isUnFollowLoading &&
          UnFollow(userId, {
            onSuccess: () => {
              queryClient.invalidateQueries('profile');
            },
            onError: () => {
              //에러처리
            },
          })
        }
      >
        {isUnFollowLoading ? (
          <Style.Loading type="spin" color={theme.blue[900]} width="30px" />
        ) : (
          '언팔로우'
        )}
      </Style.FollowButton>
    );
  } else {
    return (
      <Style.FollowButton
        onClick={() =>
          !isFollowLoading &&
          Follow(userId, {
            onSuccess: () => {
              queryClient.invalidateQueries('profile');
            },
            onError: () => {
              //에러처리
            },
          })
        }
      >
        {isFollowLoading ? (
          <Style.Loading type="spin" color={theme.blue[900]} width="30px" />
        ) : (
          '팔로우'
        )}
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
