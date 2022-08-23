import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import PropTypes from 'prop-types';
import useDeletePost from 'pages/Post/hooks/mutations/useDeletePost';
import usePostBookmark from 'hooks/mutations/usePostBookmark';
import useDeletePostBookmark from 'hooks/mutations/useDeletePostBookmark';
import usePostActivatePurchase from 'pages/Post/hooks/mutations/usePostActivatePurchase';
import usePostDeactivatePurchase from 'pages/Post/hooks/mutations/usePostDeactivatePurchase';
import Toggle from 'components/Toggle/Toggle';
import * as Style from 'pages/Post/components/ContentToggle/ContentToggle.styles';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as ActivateIcon } from 'assets/svg/activate_purchase.svg';
import { ReactComponent as DeactivateIcon } from 'assets/svg/deactivate_purchase.svg';
import { ReactComponent as BookmarkIcon } from 'assets/svg/small_bookmark.svg';
import { ReactComponent as BookmarkedIcon } from 'assets/svg/small_bookmarked.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';

const ContentToggle = ({ isOpen, postData, postId }) => {
  const navigate = useNavigate();
  const [isPurchasable, setIsPurchasable] = useState(postData.isPurchasable);
  const [isBookmarked, setIsBookmarked] = useState(postData.isBookmarked);

  const { mutate: DeletePost } = useDeletePost();
  const { mutate: PostBookmark } = usePostBookmark();
  const { mutate: DeletePostBookmark } = useDeletePostBookmark();
  const { mutate: PostActivatePurchase } = usePostActivatePurchase();
  const { mutate: PostDeactivatePurchase } = usePostDeactivatePurchase();

  const postEditClick = () => {
    navigate(PAGE_PATH.POST_EDIT(postId));
  };

  const postDeleteClick = () => {
    const deleteConfirm = window.confirm('게시글을 삭제하시겠습니까?');
    deleteConfirm && DeletePost(postId);
  };

  const toggleBookmarked = () => {
    isBookmarked ? DeletePostBookmark(postId) : PostBookmark(postId);
    setIsBookmarked((pre) => !pre);
  };

  const togglePurchasable = () => {
    isPurchasable
      ? PostDeactivatePurchase(postId)
      : PostActivatePurchase(postId);
    setIsPurchasable((pre) => !pre);
  };

  useEffect(() => {
    setIsBookmarked(postData.isBookmarked);
    setIsPurchasable(postData.isPurchasable);
  }, [postData]);

  return (
    <Style.ContentToggle onMouseDown={(event) => event.preventDefault()}>
      {isOpen && (
        <Toggle width="100px">
          {postData.isMyPost && !postData.isSold && (
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
          {postData.isMyPost && (
            <Toggle.LabelLink
              icon={isPurchasable ? <ActivateIcon /> : <DeactivateIcon />}
              label={isPurchasable ? '비활성화' : '활성화'}
              labelClick={togglePurchasable}
            />
          )}
          <Toggle.LabelLink
            icon={isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
            label="북마크"
            labelClick={toggleBookmarked}
          />
          <Toggle.LabelLink icon={<ShareIcon />} label="공유" />
        </Toggle>
      )}
    </Style.ContentToggle>
  );
};

ContentToggle.propTypes = {
  isOpen: PropTypes.bool,
  postData: PropTypes.object,
  postId: PropTypes.number,
};

export default ContentToggle;
