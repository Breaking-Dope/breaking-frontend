import FollowCard from 'components/FollowCard/FollowCard';
import Modal from 'components/Modal/Modal';
import { FollowCardSkeleton } from 'components/Skeleton/Skeleton';
import { PAGE_PATH } from 'constants/path';
import useFollowerList from 'hooks/queries/useFollowerList';
import useFollowingList from 'hooks/queries/useFollowingList';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileFollowModal = ({
  isModalOpen,
  modalTitle,
  userId,
  toggleModal,
}) => {
  const navigate = useNavigate();
  const { data: followerListData, isLoading: followerListLoading } =
    useFollowerList(userId);

  const { data: followingListData, isLoading: followingListLoading } =
    useFollowingList(userId);
  return (
    <Modal isOpen={isModalOpen} closeClick={toggleModal} title={modalTitle}>
      {modalTitle === '팔로워' &&
        followerListData?.data.map((item) => (
          <FollowCard
            cardClick={() => {
              toggleModal();
              navigate(PAGE_PATH.PROFILE(item.userId));
            }}
            isPermission={true}
            profileData={item}
            key={item.userId}
            refetchTarget="followingList"
          />
        ))}
      {modalTitle === '팔로잉' &&
        followingListData?.data.map((item) => (
          <FollowCard
            cardClick={() => {
              toggleModal();
              navigate(PAGE_PATH.PROFILE(item.userId));
            }}
            isPermission={true}
            profileData={item}
            key={item.userId}
            refetchTarget="followerList"
          />
        ))}
      {(followerListLoading || followingListLoading) && (
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
  );
};

ProfileFollowModal.propTypes = {
  isModalOpen: PropTypes.bool,
  modalTitle: PropTypes.string,
  userId: PropTypes.number,
  toggleModal: PropTypes.func,
};

export default ProfileFollowModal;
