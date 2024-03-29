import Modal from 'components/Modal/Modal';
import useFollowerList from 'pages/Profile/Profile/hooks/queries/useFollowerList';
import useFollowingList from 'pages/Profile/Profile/hooks/queries/useFollowingList';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import * as Style from 'pages/Profile/Profile/components/ProfileFollowModal/ProfileFollowModal.styles';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import FollowCardList from 'pages/Profile/Profile/components/FollowCardList/FollowCardList';

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
    isLoading: isFollowerListLoading,
    isFetching: isFollowerListFetching,
    fetchNextPage: FetchNextFollowerList,
  } = useFollowerList(userId);

  const {
    data: followingListData,
    isLoading: isFollowingListLoading,
    isFetching: isFollowingListFetching,
    fetchNextPage: FetchNextFollowingList,
  } = useFollowingList(userId);

  const { targetRef: followerTargetRef } = useInfiniteScroll(
    followerListData,
    FetchNextFollowerList
  );

  const { targetRef: followingTargetRef } = useInfiniteScroll(
    followingListData,
    FetchNextFollowingList
  );

  useEffect(() => {
    if (isFollowerListLoading) {
      setFollowerList([]);
    }
  }, [isFollowerListLoading]);

  useEffect(() => {
    if (isFollowingListLoading) {
      setFollowingList([]);
    }
  }, [isFollowingListLoading]);

  useEffect(() => {
    followingListData &&
      setFollowingList((pre) => [
        ...pre,
        ...followingListData.pages[followingListData.pages.length - 1].result,
      ]);
  }, [followingListData]);

  useEffect(() => {
    followerListData &&
      setFollowerList((pre) => [
        ...pre,
        ...followerListData.pages[followerListData.pages.length - 1].result,
      ]);
  }, [followerListData]);

  return (
    <>
      <Modal
        isOpen={isFollowerModalOpen}
        closeClick={toggleFollowerModal}
        title="팔로워"
      >
        <FollowCardList
          isLoading={isFollowerListLoading}
          toggleModal={toggleFollowerModal}
          followList={followerList}
          setFollowingList={setFollowingList}
          setFollowerList={setFollowerList}
        />
        <Style.TargetDivWrapper>
          <InfiniteTargetDiv
            targetRef={followerTargetRef}
            isFetching={isFollowerListFetching}
            height="60px"
          />
        </Style.TargetDivWrapper>
      </Modal>
      <Modal
        isOpen={isFollowingModalOpen}
        closeClick={toggleFollowingModal}
        title="팔로잉"
      >
        <FollowCardList
          isLoading={isFollowingListLoading}
          toggleModal={toggleFollowingModal}
          followList={followingList}
          setFollowingList={setFollowingList}
          setFollowerList={setFollowerList}
        />
        <Style.TargetDivWrapper>
          <InfiniteTargetDiv
            targetRef={followingTargetRef}
            isFetching={isFollowingListFetching}
            height="60px"
          />
        </Style.TargetDivWrapper>
      </Modal>
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

export default ProfileFollowModal;
