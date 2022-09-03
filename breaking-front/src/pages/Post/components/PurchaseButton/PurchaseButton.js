import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import Button from 'components/Button/Button';
import usePostBuy from 'pages/Post/hooks/mutations/usePostBuy';
import PostBoughtListModal from 'pages/Post/components/PostBoughtListModal/PostBoughtListModal';
import usePostDownload from 'pages/Post/hooks/queries/usePostDownload';

const PurchaseButton = ({
  postId,
  isMyPost,
  isPurchased,
  isPurchasable,
  isSold,
  postType,
}) => {
  const navigate = useNavigate();
  const { isLogin } = useContext(UserInformationContext);

  const [isOpenBoughtListModal, setIsOpenBoughtListModal] = useState(false);

  const { refetch: PostDownloadRefetch } = usePostDownload(postId);
  const { mutate: PostBuy } = usePostBuy();

  const toggleBoughtListModal = () => {
    setIsOpenBoughtListModal((pre) => !pre);
  };

  const postBuyClick = () => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      return navigate(PAGE_PATH.LOGIN);
    }

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
  else if (isPurchased)
    return (
      <Button
        color="primary"
        onClick={() => {
          PostDownloadRefetch();
        }}
      >
        다운로드
      </Button>
    );
  else if (!isPurchasable)
    return (
      <Button color="secondary" disabled>
        판매 중지
      </Button>
    );
  else if (isSold && postType === 'EXCLUSIVE')
    return (
      <Button color="secondary" disabled>
        판매 완료
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
  isSold: PropTypes.bool,
  postType: PropTypes.string,
};

export default PurchaseButton;
