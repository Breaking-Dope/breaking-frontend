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
import { ReactComponent as BookMarkIcon } from 'assets/svg/bookmark.svg';
import { ReactComponent as BookMarkedIcon } from 'assets/svg/bookmarked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { ReactComponent as HideIcon } from 'assets/svg/hide.svg';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import numberFormatter from 'utils/numberFormatter';

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
        <ProfileImage
          src={ImageUrlConverter(feedData.profileImgURL)}
          size="medium"
          profileClick={handleProfileClick}
        />
        <Style.Context>
          <Style.Title onClick={handleFeedClick}>{feedData.title}</Style.Title>
          <Style.Detail>
            <LocationIcon />
            {feedData.region}
          </Style.Detail>
          <Style.Detail>{feedData.createdTime}</Style.Detail>
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
        </Style.Context>
        <Style.ContentStatus>
          <Style.Price>{feedData.price.toLocaleString('ko-KR')} 원</Style.Price>
          <Style.Icons>
            <Style.IconContainer onClick={toggleLiked}>
              {isLiked ? <LikedIcon /> : <LikeIcon />}
              <Style.Count>{numberFormatter(likeCount)}</Style.Count>
            </Style.IconContainer>
            <Style.IconContainer onClick={toggleBookmarked}>
              {isBookmarked ? <BookMarkedIcon /> : <BookMarkIcon />}
            </Style.IconContainer>
            <Style.IconContainer
              onClick={toggleETC}
              tabIndex="0"
              onBlur={() => setIsOpenToggle(false)}
            >
              <ETCIcon />
            </Style.IconContainer>
          </Style.Icons>
        </Style.ContentStatus>
        <Style.FeedToggle onMouseDown={(event) => event.preventDefault()}>
          {isOpenToggle &&
            (userId === feedData.userId ? (
              <Toggle width="80px">
                <Toggle.LabelLink icon={<EditIcon />} label="수정" />
                <Toggle.LabelLink
                  icon={<RemoveIcon />}
                  label="삭제"
                  labelClick={postDeleteClick}
                />
                <Toggle.LabelLink icon={<ShareIcon />} label="공유" />
              </Toggle>
            ) : (
              <Toggle width="80px">
                <Toggle.LabelLink icon={<HideIcon />} label="숨김" />
                <Toggle.LabelLink icon={<ShareIcon />} label="공유" />
              </Toggle>
            ))}
        </Style.FeedToggle>
      </Style.Content>
    </Style.Feed>
  );
}

Feed.propTypes = {
  feedData: PropTypes.object.isRequired,
  userId: PropTypes.number,
};
