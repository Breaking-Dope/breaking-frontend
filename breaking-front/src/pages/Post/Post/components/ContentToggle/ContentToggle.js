import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import PropTypes from 'prop-types';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useDeletePost from 'pages/Post/Post/hooks/mutations/useDeletePost';
import usePostBookmark from 'hooks/mutations/usePostBookmark';
import useDeletePostBookmark from 'hooks/mutations/useDeletePostBookmark';
import usePostActivatePurchase from 'pages/Post/Post/hooks/mutations/usePostActivatePurchase';
import usePostDeactivatePurchase from 'pages/Post/Post/hooks/mutations/usePostDeactivatePurchase';
import usePostHide from 'pages/Post/Post/hooks/mutations/usePostHide';
import usePostShow from 'pages/Post/Post/hooks/mutations/usePostShow';
import Toggle from 'components/Toggle/Toggle';
import ShareModal from 'components/ShareModal/ShareModal';
import * as Style from 'pages/Post/Post/components/ContentToggle/ContentToggle.styles';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as ActivateIcon } from 'assets/svg/activate_purchase.svg';
import { ReactComponent as DeactivateIcon } from 'assets/svg/deactivate_purchase.svg';
import { ReactComponent as BookmarkIcon } from 'assets/svg/small_bookmark.svg';
import { ReactComponent as BookmarkedIcon } from 'assets/svg/small_bookmarked.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { ReactComponent as HideIcon } from 'assets/svg/hide.svg';
import { ReactComponent as HidedIcon } from 'assets/svg/hided.svg';

const ContentToggle = ({ isOpen, postData, postId }) => {
  const { isLogin } = useContext(UserInformationContext);
  const navigate = useNavigate();

  const [isPurchasable, setIsPurchasable] = useState(postData.isPurchasable);
  const [isHidden, setIsHidden] = useState(postData.isHidden);
  const [isBookmarked, setIsBookmarked] = useState(postData.isBookmarked);
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);

  const { mutate: DeletePost } = useDeletePost();
  const { mutate: PostBookmark } = usePostBookmark();
  const { mutate: DeletePostBookmark } = useDeletePostBookmark();
  const { mutate: PostActivatePurchase } = usePostActivatePurchase();
  const { mutate: PostDeactivatePurchase } = usePostDeactivatePurchase();
  const { mutate: PostHide } = usePostHide();
  const { mutate: PostShow } = usePostShow();

  const toggleShareModal = () => {
    setIsOpenShareModal((pre) => !pre);
  };

  const postEditClick = () => {
    navigate(PAGE_PATH.POST_EDIT(postId));
  };

  const postDeleteClick = () => {
    const deleteConfirm = window.confirm('게시글을 삭제하시겠습니까?');
    deleteConfirm && DeletePost(postId);
  };

  const toggleBookmarked = () => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      return navigate(PAGE_PATH.LOGIN);
    }

    isBookmarked ? DeletePostBookmark(postId) : PostBookmark(postId);
    setIsBookmarked((pre) => !pre);
  };

  const togglePurchasable = () => {
    isPurchasable
      ? PostDeactivatePurchase(postId)
      : PostActivatePurchase(postId);
    setIsPurchasable((pre) => !pre);
  };

  const toggleHidden = () => {
    isHidden ? PostShow(postId) : PostHide(postId);
    setIsHidden((pre) => !pre);
  };

  useEffect(() => {
    setIsBookmarked(postData.isBookmarked);
    setIsPurchasable(postData.isPurchasable);
    setIsHidden(postData.isHidden);
  }, [postData]);

  return (
    <>
      <ShareModal
        isOpen={isOpenShareModal}
        closeClick={toggleShareModal}
        data={postData}
        path={PAGE_PATH.POST(postId)}
      />
      <Style.ContentToggle onMouseDown={(event) => event.preventDefault()}>
        {isOpen && (
          <Toggle width="100px">
            {postData.isMyPost && (
              <>
                {!postData.isSold && (
                  <>
                    <Toggle.LabelLink
                      icon={<EditIcon />}
                      label="수정"
                      labelClick={postEditClick}
                    />
                    <Toggle.LabelLink
                      icon={<RemoveIcon />}
                      label="삭제"
                      labelClick={postDeleteClick}
                    />
                  </>
                )}
                {postData.postType === 'EXCLUSIVE' && postData.isSold ? (
                  <></>
                ) : (
                  <Toggle.LabelLink
                    icon={isPurchasable ? <ActivateIcon /> : <DeactivateIcon />}
                    label={isPurchasable ? '판매중지' : '판매재개'}
                    labelClick={togglePurchasable}
                  />
                )}

                <Toggle.LabelLink
                  icon={isHidden ? <HidedIcon /> : <HideIcon />}
                  label={isHidden ? '숨김중지' : '숨김'}
                  labelClick={toggleHidden}
                />
              </>
            )}
            <Toggle.LabelLink
              icon={isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
              label="북마크"
              labelClick={toggleBookmarked}
            />
            <Toggle.LabelLink
              icon={<ShareIcon />}
              label="공유"
              labelClick={toggleShareModal}
            />
          </Toggle>
        )}
      </Style.ContentToggle>
    </>
  );
};

ContentToggle.propTypes = {
  isOpen: PropTypes.bool,
  postData: PropTypes.object,
  postId: PropTypes.number,
};

export default ContentToggle;
