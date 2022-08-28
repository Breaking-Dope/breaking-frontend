import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/FollowCard/FollowCard.styles';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import { useTheme } from 'styled-components';
import { useState } from 'react';

export default function FollowCard({
  profileData,
  isPermission,
  cardClick,
  FollowMutation,
  UnFollowMutation,
}) {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(profileData.isFollowing);

  const unFollowClick = () => {
    if (!UnFollowMutation.isLoading) {
      UnFollowMutation.mutate(profileData.userId, {
        onSuccess: () => {
          setIsLoading(false);
          setIsFollowing(false);
        },
      });
      setIsLoading(true);
    }
  };

  const followClick = () => {
    if (!FollowMutation.isLoading) {
      FollowMutation.mutate(profileData.userId, {
        onSuccess: () => {
          setIsLoading(false);
          setIsFollowing(true);
        },
      });
      setIsLoading(true);
    }
  };

  useEffect(() => {
    setIsFollowing(profileData.isFollowing);
  }, [profileData]);

  return (
    <Style.FollowCard>
      <ProfileImage
        src={ImageUrlConverter(profileData?.profileImgURL)}
        size="medium"
        onClick={cardClick}
      />
      <Style.Container>
        <Style.Nickname onClick={cardClick}>
          {profileData?.nickname}
        </Style.Nickname>
        <Style.StatusMessage>{profileData?.statusMsg}</Style.StatusMessage>
      </Style.Container>
      {isPermission && (
        <Style.FollowButton
          size="small"
          onClick={isFollowing ? unFollowClick : followClick}
        >
          {isLoading ? (
            <Style.Loading type="spin" color={theme.blue[900]} width="10px" />
          ) : isFollowing ? (
            '언팔로우'
          ) : (
            '팔로우'
          )}
        </Style.FollowButton>
      )}
    </Style.FollowCard>
  );
}

FollowCard.propTypes = {
  profileData: PropTypes.object,
  isPermission: PropTypes.bool,
  cardClick: PropTypes.func,
  FollowMutation: PropTypes.object,
  UnFollowMutation: PropTypes.object,
};
