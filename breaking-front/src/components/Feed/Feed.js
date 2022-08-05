import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import PropTypes from 'prop-types';
import {
  deletePost,
  deletePostBookmark,
  deletePostLike,
  postPostBookmark,
  postPostLike,
} from 'api/post';
import { PAGE_PATH } from 'constants/path';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Button from 'components/Button/Button';
import Toggle from 'components/Toggle/Toggle';
import * as Style from 'components/Feed/Feed.styles';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as LikedIcon } from 'assets/svg/liked.svg';
import { ReactComponent as BookmarkIcon } from 'assets/svg/small_bookmark.svg';
import { ReactComponent as BookmarkedIcon } from 'assets/svg/small_bookmarked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { ReactComponent as HideIcon } from 'assets/svg/hide.svg';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import numberFormatter from 'utils/numberFormatter';
import timeFormatter from 'utils/timeFormatter';

export default function Feed({ feedData, userId, ...props }) {
  const navigate = useNavigate();

  const [isDeleted, setIsDeleted] = useState(false);
  const [isLiked, setIsLiked] = useState(feedData.isLiked);
  const [isBookmarked, setIsBookmarked] = useState(feedData.isBookmarked);
  const [likeCount, setLikeCount] = useState(feedData.likeCount);
  const [isOpenToggle, setIsOpenToggle] = useState(false);

  const { mutate: PostLike } = useMutation(postPostLike);
  const { mutate: DeletePostLike } = useMutation(deletePostLike);
  const { mutate: PostBookmark } = useMutation(postPostBookmark);
  const { mutate: DeletePostBookmark } = useMutation(deletePostBookmark);
  const { mutate: DeletePost } = useMutation(deletePost);

  const handleFeedClick = () => {
    navigate(PAGE_PATH.POST(feedData.postId));
  };

  const handleProfileClick = () => {
    navigate(PAGE_PATH.PROFILE(feedData.userId));
  };

  const toggleLiked = () => {
    if (isLiked) {
      DeletePostLike(feedData.postId);
      setLikeCount((pre) => pre - 1);
    } else {
      PostLike(feedData.postId);
      setLikeCount((pre) => pre + 1);
    }

    setIsLiked((pre) => !pre);
  };
  const toggleBookmarked = () => {
    isBookmarked
      ? DeletePostBookmark(feedData.postId)
      : PostBookmark(feedData.postId);
    setIsBookmarked((pre) => !pre);
  };

  const toggleETC = () => {
    setIsOpenToggle((pre) => !pre);
  };

  const postDeleteClick = () => {
    let deleteConfirm = window.confirm('게시글을 삭제하시겠습니까?');

    deleteConfirm &&
      DeletePost(feedData.postId, {
        onSuccess: () => {
          alert('게시글을 삭제하였습니다.');
          setIsDeleted(true);
        },
      });
  };

  useEffect(() => {
    setLikeCount(feedData.likeCount);
    setIsLiked(feedData.isLiked);
    setIsBookmarked(feedData.isBookmarked);
  }, [feedData]);

  return (
    <Style.Feed isDeleted={isDeleted} {...props}>
      {feedData.thumbnailImgURL ? (
        <Style.ThumbnailImage
          src={ImageUrlConverter(feedData.thumbnailImgURL)}
          onClick={handleFeedClick}
        />
      ) : (
        <Style.ThumbnailDefaultImage onClick={handleFeedClick} />
      )}
      <Style.Content>
        <Style.ETCIconContainer
          onClick={toggleETC}
          tabIndex="0"
          onBlur={() => setIsOpenToggle(false)}
        >
          <ETCIcon />
        </Style.ETCIconContainer>
        <ProfileImage
          src={ImageUrlConverter(feedData.profileImgURL)}
          size="medium"
          profileClick={handleProfileClick}
          title={feedData.nickname}
        />
        <Style.Context>
          <Style.Title onClick={handleFeedClick} title={feedData.title}>
            {feedData.title}
          </Style.Title>
          <Style.Detail>
            <LocationIcon />
            {feedData.region} • {timeFormatter(new Date(feedData.createdTime))}
          </Style.Detail>
          <Style.ContextFooter>
            {feedData.postType === 'exclusive' && (
              <Button color="dark" size="small" disabled>
                단독
              </Button>
            )}
            {feedData.isSold ? (
              <Button color="danger" size="small" disabled>
                판매 완료
              </Button>
            ) : (
              <Button color="primary" size="small" disabled>
                판매중
              </Button>
            )}
            <Style.ViewCount>
              조회수 {numberFormatter(feedData.viewCount)}회
            </Style.ViewCount>
          </Style.ContextFooter>
        </Style.Context>
        <Style.ContentStatus>
          <Style.Price>{feedData.price.toLocaleString('ko-KR')} 원</Style.Price>
          <Style.LikeIconContainer onClick={toggleLiked}>
            {isLiked ? <LikedIcon /> : <LikeIcon />}
            <Style.LikeCount>{numberFormatter(likeCount)}</Style.LikeCount>
          </Style.LikeIconContainer>
        </Style.ContentStatus>
        <Style.FeedToggle onMouseDown={(event) => event.preventDefault()}>
          {isOpenToggle && (
            <Toggle width="100px">
              {feedData.userId === userId ? (
                <>
                  <Toggle.LabelLink icon={<EditIcon />} label="수정" />
                  <Toggle.LabelLink
                    icon={<RemoveIcon />}
                    label="삭제"
                    labelClick={postDeleteClick}
                  />
                </>
              ) : (
                <Toggle.LabelLink icon={<HideIcon />} label="숨김" />
              )}
              <Toggle.LabelLink
                icon={isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
                label="북마크"
                labelClick={toggleBookmarked}
              />
              <Toggle.LabelLink icon={<ShareIcon />} label="공유" />
            </Toggle>
          )}
        </Style.FeedToggle>
      </Style.Content>
    </Style.Feed>
  );
}

Feed.propTypes = {
  feedData: PropTypes.object.isRequired,
  userId: PropTypes.number,
};
