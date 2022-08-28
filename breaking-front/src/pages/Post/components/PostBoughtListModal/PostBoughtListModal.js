import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import usePostBoughtList from 'pages/Post/hooks/queries/usePostBoughtList';
import FollowCard from 'components/FollowCard/FollowCard';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import { FollowCardSkeleton } from 'components/Skeleton/Skeleton';
import * as Style from 'pages/Post/components/PostBoughtListModal/PostBoughtListModal.styles';

const PostBoughtListModal = ({ postId, isOpen, closeClick }) => {
  const navigate = useNavigate();

  const {
    data: boughtListData,
    isLoading: isBoughtListLoading,
    isFetching: isBoughtListFetching,
    fetchNextPage: FetchNextBoughtList,
  } = usePostBoughtList(postId);

  const { targetRef } = useInfiniteScroll(boughtListData, FetchNextBoughtList);

  return (
    <Modal isOpen={isOpen} closeClick={closeClick} title="구매자 목록">
      {boughtListData?.pages.map((page) =>
        page.result.map((item) => (
          <FollowCard
            profileData={item}
            cardClick={() => navigate(PAGE_PATH.PROFILE(item.userId))}
            isPermission={false}
            key={`user-${item.userId}`}
          />
        ))
      )}
      {isBoughtListLoading && (
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
          isFetching={isBoughtListFetching}
          height="60px"
        />
      </Style.TargetDivWrapper>
    </Modal>
  );
};

PostBoughtListModal.propTypes = {
  postId: PropTypes.number,
  isOpen: PropTypes.bool,
  closeClick: PropTypes.func,
};

export default PostBoughtListModal;
