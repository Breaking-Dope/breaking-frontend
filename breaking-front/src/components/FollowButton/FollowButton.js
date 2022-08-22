import React from 'react';
import * as Style from 'components/FollowButton/FollowButton.styles';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import useUnFollow from 'pages/Profile/hooks/mutations/useUnFollow';
import useFollow from 'pages/Profile/hooks/mutations/useFollow';

const FollowButton = ({ userId, isFollowing, isMyPage }) => {
  const theme = useTheme();
  const { mutate: UnFollow, isLoading: isUnFollowLoading } = useUnFollow();
  const { mutate: Follow, isLoading: isFollowLoading } = useFollow();

  if (isMyPage) {
    return <></>;
  } else if (isFollowing) {
    return (
      <Style.FollowButton
        onClick={() => !isUnFollowLoading && UnFollow(userId)}
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
      <Style.FollowButton onClick={() => !isFollowLoading && Follow(userId)}>
        {isFollowLoading ? (
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
  isMyPage: PropTypes.bool,
};

export default FollowButton;
