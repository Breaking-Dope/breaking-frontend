import FollowCard from 'components/FollowCard/FollowCard';
import Modal from 'components/Modal/Modal';
import { FollowCardSkeleton } from 'components/Skeleton/Skeleton';
import { PAGE_PATH } from 'constants/path';
import useFollowerList from 'pages/Profile/hooks/useFollowerList';
import useFollowingList from 'pages/Profile/hooks/useFollowingList';
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
      <FollowCommonModal
        isLoading={followerListLoading}
        isOpen={isFollowerModalOpen}
        toggleModal={toggleFollowerModal}
        title="팔로워"
        followList={followerList}
        setFollowingList={setFollowingList}
        setFollowerList={setFollowerList}
      />
      <FollowCommonModal
        isLoading={followingListLoading}
        isOpen={isFollowingModalOpen}
        toggleModal={toggleFollowingModal}
        title="팔로잉"
        followList={followingList}
        setFollowingList={setFollowingList}
        setFollowerList={setFollowerList}
      />
    </>
  );
};

const FollowCommonModal = ({
  isLoading,
  isOpen,
  toggleModal,
  title,
  followList,
  setFollowingList,
  setFollowerList,
}) => {
  const navigate = useNavigate();
  const userData = useContext(UserInformationContext);
  return (
    <Modal isOpen={isOpen} closeClick={toggleModal} title={title}>
      {followList &&
        followList.map((item) => (
          <FollowCard
            cardClick={() => {
              toggleModal();
              navigate(PAGE_PATH.PROFILE(item.userId));
            }}
            isPermission={item.userId !== userData.userId}
            profileData={item}
            key={`${title}-${item.userId}`}
            setFollowingList={setFollowingList}
            setFollowerList={setFollowerList}
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
    </Modal>
  );
};

ProfileFollowModal.propTypes = {
  isFollowerModalOpen: PropTypes.bool,
  isFollowingModalOpen: PropTypes.bool,
  toggleFollowerModal: PropTypes.func,
  toggleFollowingModal: PropTypes.func,
  userId: PropTypes.number,
};

FollowCommonModal.propTypes = {
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  title: PropTypes.string,
  followList: PropTypes.array,
  setFollowingList: PropTypes.func,
  setFollowerList: PropTypes.func,
};

export default ProfileFollowModal;
