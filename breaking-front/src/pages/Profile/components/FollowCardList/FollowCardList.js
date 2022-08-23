import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FollowCardSkeleton } from 'components/Skeleton/Skeleton';
import { PAGE_PATH } from 'constants/path';
import { UserInformationContext } from 'providers/UserInformationProvider';
import FollowCard from 'components/FollowCard/FollowCard';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from 'react-query';
import { deleteUnFollow, postFollow } from 'api/profile';

const FollowCardList = ({
  isLoading,
  toggleModal,
  followList,
  setFollowingList,
  setFollowerList,
}) => {
  const navigate = useNavigate();
  const userData = useContext(UserInformationContext);

  const queryClient = useQueryClient();
  const ChangeIsFollowField = (pre, userId) => {
    return pre.map((information) =>
      information.userId === userId
        ? {
            ...information,
            isFollowing: !information.isFollowing,
          }
        : information
    );
  };
  // follower following 리스트의 핋드 값을 변경해주어야함

  const UnFollowMutation = useMutation(deleteUnFollow, {
    onSuccess: (data, userId) => {
      queryClient.invalidateQueries('profile');
      setFollowerList((pre) => ChangeIsFollowField(pre, userId));
      setFollowingList((pre) => ChangeIsFollowField(pre, userId));
    },
    onError: () => {
      //에러처리
    },
  });
  const FollowMutation = useMutation(postFollow, {
    onSuccess: (data, userId) => {
      queryClient.invalidateQueries('profile');
      setFollowerList((pre) => ChangeIsFollowField(pre, userId));
      setFollowingList((pre) => ChangeIsFollowField(pre, userId));
    },
    onError: () => {
      //에러처리
    },
  });

  return (
    <>
      {followList &&
        followList.map((item) => (
          <FollowCard
            cardClick={() => {
              toggleModal();
              navigate(PAGE_PATH.PROFILE(item.userId));
            }}
            isPermission={item.userId !== userData.userId}
            profileData={item}
            key={`follow-${item.userId}`}
            FollowMutation={FollowMutation}
            UnFollowMutation={UnFollowMutation}
          />
        ))}
      {isLoading && (
        <>
          <FollowCardSkeleton />
          <FollowCardSkeleton />
          <FollowCardSkeleton />
          <FollowCardSkeleton />
          <FollowCardSkeleton />
          <FollowCardSkeleton />
        </>
      )}
    </>
  );
};

FollowCardList.propTypes = {
  isLoading: PropTypes.bool,
  toggleModal: PropTypes.func,
  followList: PropTypes.array,
  setFollowingList: PropTypes.func,
  setFollowerList: PropTypes.func,
};

export default FollowCardList;
