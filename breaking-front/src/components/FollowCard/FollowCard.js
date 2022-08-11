/* eslint-disable react/prop-types */
import React from 'react';
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
  setFollowerList,
  setFollowingList,
}) {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const ChangeIsFollowFelid = (pre) => {
    return pre.map((information) =>
      information.userId === profileData.userId
        ? {
            ...information,
            isFollowing: !information.isFollowing,
          }
        : information
    );
  };
  // follow Following 리스트의 값을 변경해주어야함

  const { mutate: UnFollow, isLoading: isUnFollowLoading } = useMutation(
    deleteUnFollow,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('profile');
        setFollowerList((pre) => ChangeIsFollowFelid(pre));
        setFollowingList((pre) => ChangeIsFollowFelid(pre));
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
        setFollowerList((pre) => ChangeIsFollowFelid(pre));
        setFollowingList((pre) => ChangeIsFollowFelid(pre));
      },
      onError: () => {
        //에러처리
      },
    }
  );
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
        (profileData.isFollowing ? (
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
};
