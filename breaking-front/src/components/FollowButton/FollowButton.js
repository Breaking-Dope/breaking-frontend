import React from 'react';
import * as Style from 'components/FollowButton/FollowButton.styles';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

const FollowButton = ({
  userId,
  isFollowing,
  isMe,
  useUnFollow,
  useFollow,
}) => {
  const theme = useTheme();

  if (isMe) {
    return <></>;
  } else if (isFollowing) {
    return (
      <Style.FollowButton
        onClick={() => !useUnFollow.isLoading && useUnFollow.mutate(userId)}
      >
        {useUnFollow.isLoading ? (
          <Style.Loading type="spin" color={theme.blue[900]} width="30px" />
        ) : (
          '언팔로우'
        )}
      </Style.FollowButton>
    );
  } else {
    return (
      <Style.FollowButton
        onClick={() => !useFollow.isLoading && useFollow.mutate(userId)}
      >
        {useFollow.isLoading ? (
          <Style.Loading type="spin" color={theme.blue[900]} width="30px" />
        ) : (
          '팔로우'
        )}
      </Style.FollowButton>
    );
  }
};

FollowButton.propTypes = {
  userId: PropTypes.number,
  isFollowing: PropTypes.bool,
  isMe: PropTypes.bool,
  useUnFollow: PropTypes.object,
  useFollow: PropTypes.object,
};

export default FollowButton;
