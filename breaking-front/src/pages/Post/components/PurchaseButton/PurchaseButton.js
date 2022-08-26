import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import usePostBuy from 'pages/Post/hooks/mutations/usePostBuy';
import PostBoughtListModal from 'pages/Post/components/PostBoughtListModal/PostBoughtListModal';

const PurchaseButton = ({ postId, isMyPost, isPurchased, isPurchasable }) => {
  const [isOpenBoughtListModal, setIsOpenBoughtListModal] = useState(false);
  const { mutate: PostBuy } = usePostBuy();

  const toggleBoughtListModal = () => {
    setIsOpenBoughtListModal((pre) => !pre);
  };

  const postBuyClick = () => {
    const postBuyConfirm = window.confirm('게시글을 구매하시겠습니까?');
    postBuyConfirm && PostBuy(postId);
  };

  if (isMyPost)
    return (
      <>
        <PostBoughtListModal
          postId={postId}
          isOpen={isOpenBoughtListModal}
          closeClick={toggleBoughtListModal}
        />
        <Button color="primary" onClick={toggleBoughtListModal}>
          구매자 목록
        </Button>
      </>
    );
  else if (isPurchased) return <Button color="primary">다운로드</Button>;
  else if (!isPurchasable)
    return (
      <Button color="secondary" disabled>
        판매 중지
      </Button>
    );
  else
    return (
      <Button color="primary" onClick={postBuyClick}>
        구매하기
      </Button>
    );
};

PurchaseButton.propTypes = {
  postId: PropTypes.number.isRequired,
  isMyPost: PropTypes.bool,
  isPurchased: PropTypes.bool,
  isPurchasable: PropTypes.bool,
};

export default PurchaseButton;
