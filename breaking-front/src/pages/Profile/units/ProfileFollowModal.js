/* eslint-disable react/prop-types */
import FollowCard from 'components/FollowCard/FollowCard';
import Modal from 'components/Modal/Modal';
import { FollowCardSkeleton } from 'components/Skeleton/Skeleton';
import { PAGE_PATH } from 'constants/path';
import useFollowerList from 'hooks/queries/useFollowerList';
import useFollowingList from 'hooks/queries/useFollowingList';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { useEffect } from 'react';

const ProfileFollowModal = ({
  isFollowerModalOpen,
  isFollowingModalOpen,
  toggleFollowerModal,
  toggleFollowingModal,
  userId,
}) => {
  const navigate = useNavigate();
  const myData = useContext(UserInformationContext);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  const { data: followerListData, isLoading: followerListLoading } =
    useFollowerList(userId);

  const { data: followingListData, isLoading: followingListLoading } =
    useFollowingList(userId);

  useEffect(() => {
    setFollowingList(followingListData?.data);
  }, [followingListData]);

  useEffect(() => {
    setFollowerList(followerListData?.data);
  }, [followerListData]);

  return (
    <>
      <Modal
        isOpen={isFollowerModalOpen}
        closeClick={toggleFollowerModal}
        title="팔로워"
      >
        {followerList &&
          followerList.map((item) => (
            <FollowCard
              cardClick={() => {
                toggleFollowerModal();
                navigate(PAGE_PATH.PROFILE(item.userId));
              }}
              isPermission={item.userId !== myData.userId}
              profileData={item}
              key={`follower-${item.userId}`}
              setFollowingList={setFollowingList}
              setFollowerList={setFollowerList}
            />
          ))}
        {followerListLoading && (
          <>
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
          </>
        )}
      </Modal>
      <Modal
        isOpen={isFollowingModalOpen}
        closeClick={toggleFollowingModal}
        title="팔로잉"
      >
        {followingList &&
          followingList.map((item) => (
            <FollowCard
              cardClick={() => {
                toggleFollowingModal();
                navigate(PAGE_PATH.PROFILE(item.userId));
              }}
              isPermission={item.userId !== myData.userId}
              profileData={item}
              key={`following-${item.userId}`}
              setFollowingList={setFollowingList}
              setFollowerList={setFollowerList}
            />
          ))}
        {followingListLoading && (
          <>
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
          </>
        )}
      </Modal>
    </>
  );
};

ProfileFollowModal.propTypes = {
  isModalOpen: PropTypes.bool,
  modalTitle: PropTypes.string,
  userId: PropTypes.number,
  toggleModal: PropTypes.func,
};

export default ProfileFollowModal;
