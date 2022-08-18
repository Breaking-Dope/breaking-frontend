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
import useInfiniteScroll from 'hooks/useInfiniteScroll';

const ProfileFollowModal = ({
  isFollowerModalOpen,
  isFollowingModalOpen,
  toggleFollowerModal,
  toggleFollowingModal,
  userId,
}) => {
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  const {
    data: followerListData,
    isLoading: followerListLoading,
    fetchNextPage: FetchNextFollowerList,
  } = useFollowerList(userId);

  const {
    data: followingListData,
    isLoading: followingListLoading,
    fetchNextPage: FetchNextFollowingList,
  } = useFollowingList(userId);

  useEffect(() => {
    setFollowingList(followingListData?.pages);
  }, [followingListData]);

  useEffect(() => {
    setFollowerList(followerListData?.pages);
  }, [followerListData]);

  return (
    <>
      <Modal
        isOpen={isFollowerModalOpen}
        closeClick={toggleFollowerModal}
        title="팔로워"
      >
        {followerList && (
          <FollowCardList
            isLoading={followerListLoading}
            toggleModal={toggleFollowerModal}
            followList={followerList}
            nextFetch={FetchNextFollowerList}
            setFollowingList={setFollowingList}
            setFollowerList={setFollowerList}
          />
        )}
      </Modal>
      <Modal
        isOpen={isFollowingModalOpen}
        closeClick={toggleFollowingModal}
        title="팔로워"
      >
        {followingList && (
          <FollowCardList
            isLoading={followingListLoading}
            toggleModal={toggleFollowingModal}
            followList={followingList}
            nextFetch={FetchNextFollowingList}
            setFollowingList={setFollowingList}
            setFollowerList={setFollowerList}
          />
        )}
      </Modal>
    </>
  );
};

const FollowCardList = ({
  isLoading,
  toggleModal,
  followList,
  nextFetch,
  setFollowingList,
  setFollowerList,
}) => {
  const { targetRef } = useInfiniteScroll(followList, nextFetch);
  const navigate = useNavigate();
  const userData = useContext(UserInformationContext);
  return (
    <>
      {followList.map((page) =>
        page?.result.map((item) => (
          <FollowCard
            cardClick={() => {
              toggleModal();
              navigate(PAGE_PATH.PROFILE(item.userId));
            }}
            isPermission={item.userId !== userData.userId}
            profileData={item}
            key={`follow-${item.userId}`}
            setFollowingList={setFollowingList}
            setFollowerList={setFollowerList}
          />
        ))
      )}
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
      <div ref={targetRef} />
    </>
  );
};

ProfileFollowModal.propTypes = {
  isFollowerModalOpen: PropTypes.bool,
  isFollowingModalOpen: PropTypes.bool,
  toggleFollowerModal: PropTypes.func,
  toggleFollowingModal: PropTypes.func,
  userId: PropTypes.number,
};

FollowCardList.propTypes = {
  isLoading: PropTypes.bool,
  toggleModal: PropTypes.func,
  followList: PropTypes.array,
  nextFetch: PropTypes.func,
  setFollowingList: PropTypes.func,
  setFollowerList: PropTypes.func,
};

export default ProfileFollowModal;
