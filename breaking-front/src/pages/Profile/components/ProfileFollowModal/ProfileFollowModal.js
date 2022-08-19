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
import * as Style from 'pages/Profile/components/ProfileFollowModal/ProfileFollowModal.styles';

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
          <Style.TargetDiv
            targetRef={followerTargetRef}
            isFetching={isFollowerListFetching}
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
          <Style.TargetDiv
            targetRef={followingTargetRef}
            isFetching={isFollowingListFetching}
          />
        </Style.TargetDivWrapper>
      </Modal>
    </>
  );
};

const FollowCardList = ({
  isLoading,
  toggleModal,
  followList,
  setFollowingList,
  setFollowerList,
}) => {
  const navigate = useNavigate();
  const userData = useContext(UserInformationContext);

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
  setFollowingList: PropTypes.func,
  setFollowerList: PropTypes.func,
};

export default ProfileFollowModal;
