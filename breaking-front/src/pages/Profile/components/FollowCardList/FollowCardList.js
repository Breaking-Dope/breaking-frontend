import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FollowCardSkeleton } from 'components/Skeleton/Skeleton';
import { PAGE_PATH } from 'constants/path';
import { UserInformationContext } from 'providers/UserInformationProvider';
import FollowCard from 'components/FollowCard/FollowCard';
import PropTypes from 'prop-types';

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

FollowCardList.propTypes = {
  isLoading: PropTypes.bool,
  toggleModal: PropTypes.func,
  followList: PropTypes.array,
  setFollowingList: PropTypes.func,
  setFollowerList: PropTypes.func,
};

export default FollowCardList;
