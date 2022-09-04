import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useFollow from 'hooks/mutations/useFollow';
import useUnFollow from 'hooks/mutations/useUnFollow';
import Modal from 'components/Modal/Modal';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import { FollowCardSkeleton } from 'components/Skeleton/Skeleton';
import usePostLikeList from 'pages/Post/Post/hooks/queries/usePostLikeList';
import FollowCard from 'components/FollowCard/FollowCard';
import { PAGE_PATH } from 'constants/path';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import * as Style from 'pages/Post/Post/components/PostLikeListModal/PostLikeListModal.styles';
import { UserInformationContext } from 'providers/UserInformationProvider';

const PostLikeListModal = ({ postId, isOpen, closeClick }) => {
  const navigate = useNavigate();
  const userData = useContext(UserInformationContext);

  const {
    data: likeListData,
    isLoading: isLikeListLoading,
    isFetching: isLikeListFetching,
    fetchNextPage: FetchNextBoughtList,
  } = usePostLikeList(postId, 10);

  const followMutation = useFollow();
  const unFollowMutation = useUnFollow();

  const { targetRef } = useInfiniteScroll(likeListData, FetchNextBoughtList);

  return (
    <Modal isOpen={isOpen} closeClick={closeClick} title="좋아요">
      {likeListData?.pages.map((page) =>
        page.result.map((item) => (
          <FollowCard
            profileData={item}
            cardClick={() => navigate(PAGE_PATH.PROFILE(item.userId))}
            isPermission={item.userId !== userData.userId}
            FollowMutation={followMutation}
            UnFollowMutation={unFollowMutation}
            key={`user-${item.userId}`}
          />
        ))
      )}
      {isLikeListLoading && (
        <>
          <FollowCardSkeleton />
          <FollowCardSkeleton />
          <FollowCardSkeleton />
          <FollowCardSkeleton />
          <FollowCardSkeleton />
          <FollowCardSkeleton />
        </>
      )}
      <Style.TargetDivWrapper>
        <InfiniteTargetDiv
          targetRef={targetRef}
          isFetching={isLikeListFetching}
          height="60px"
        />
      </Style.TargetDivWrapper>
    </Modal>
  );
};

PostLikeListModal.propTypes = {
  postId: PropTypes.number,
  isOpen: PropTypes.bool,
  closeClick: PropTypes.func,
};

export default PostLikeListModal;
