import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/FollowCard/FollowCard.styles';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import { useMutation, useQueryClient } from 'react-query';
import { deleteUnFollow, postFollow } from 'api/profile';
import { useTheme } from 'styled-components';

export default function FollowCard({
  profileData,
  isPermission,
  cardClick,
  refetchTarget,
}) {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const [isFollow, setIsFollow] = useState(profileData.isFollowing);
  const { mutate: UnFollow, isLoading: isUnFollowLoading } = useMutation(
    deleteUnFollow,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('profile');
        queryClient.invalidateQueries(refetchTarget);
        toggleIsFollow();
      },
      onError: () => {
        //에러처리
      },
    }
  );
  const { mutate: Follow, isLoading: isFollowLoading } = useMutation(
    postFollow,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('profile');
        queryClient.invalidateQueries(refetchTarget);
        toggleIsFollow();
      },
      onError: () => {
        //에러처리
      },
    }
  );

  const toggleIsFollow = () => {
    setIsFollow((pre) => !pre);
  };
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
      {isPermission &&
        (isFollow ? (
          <Style.DeleteButton
            size="small"
            onClick={() => {
              !isUnFollowLoading && UnFollow(profileData.userId);
            }}
          >
            {isUnFollowLoading ? (
              <Style.Loading type="spin" color={theme.blue[900]} width="10px" />
            ) : (
              '언팔로우'
            )}
          </Style.DeleteButton>
        ) : (
          <Style.DeleteButton
            size="small"
            onClick={() => {
              !isFollowLoading && Follow(profileData.userId);
            }}
          >
            {isFollowLoading ? (
              <Style.Loading type="spin" color={theme.blue[900]} width="10px" />
            ) : (
              '팔로우'
            )}
          </Style.DeleteButton>
        ))}
    </Style.FollowCard>
  );
}

FollowCard.propTypes = {
  profileData: PropTypes.object,
  isPermission: PropTypes.bool,
  cardClick: PropTypes.func,
  refetchTarget: PropTypes.string,
};
