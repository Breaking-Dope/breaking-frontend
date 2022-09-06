import React from 'react';
import * as Style from 'components/FollowButton/FollowButton.styles';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import { UserInformationContext } from 'providers/UserInformationProvider';

const FollowButton = ({
  userId,
  isFollowing,
  isMe,
  useUnFollow,
  useFollow,
  size,
  color,
}) => {
  const theme = useTheme();
  const { isLogin } = useContext(UserInformationContext);

  if (isMe || !isLogin) {
    return <></>;
  } else if (isFollowing) {
    return (
      <Style.FollowButton
        onClick={() => !useUnFollow?.isLoading && useUnFollow?.mutate(userId)}
        size={size}
        color={color}
      >
        {useUnFollow?.isLoading ? (
          <Style.Loading type="spin" color={theme.blue[900]} size={size} />
        ) : (
          '언팔로우'
        )}
      </Style.FollowButton>
    );
  } else {
    return (
      <Style.FollowButton
        onClick={() => !useFollow?.isLoading && useFollow?.mutate(userId)}
        size={size}
        color={color}
      >
        {useFollow?.isLoading ? (
          <Style.Loading type="spin" color={theme.blue[900]} size={size} />
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
  size: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.oneOf(['primary', 'white']),
};

FollowButton.defaultProps = {
  size: 'medium',
  color: 'primary',
};

export default FollowButton;
