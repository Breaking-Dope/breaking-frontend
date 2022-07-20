import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Feed/Feed.styles';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Button from 'components/Button/Button';
import Toggle from 'components/Toggle/Toggle';
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
import { useNavigate } from 'react-router-dom';

export default function Feed({ feedData, userId, ...props }) {
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(feedData.isLiked);
  const [isBookmarked, setIsBookmarked] = useState(feedData.isBookmarked);
  const [likeCount, setLikeCount] = useState(feedData.likeCount);
  const [isOpenToggle, setIsOpenToggle] = useState(false);

  const handleFeedClick = () => {
    navigate(`/post/${feedData.postId}`);
  };

  const handleProfileClick = () => {
    navigate(`/profile/${feedData.userId}`);
  };

  const toggleLiked = () => {
    // 추후 좋아요 로직 작성
    isLiked ? setLikeCount((pre) => pre - 1) : setLikeCount((pre) => pre + 1);
    setIsLiked((pre) => !pre);
  };
  const toggleBookmarked = () => {
    // 추후 북마크 로직 작성
    setIsBookmarked((pre) => !pre);
  };

  const toggleETC = () => {
    setIsOpenToggle((pre) => !pre);
  };

  return (
    <Style.Feed {...props}>
      {feedData.thumbnailImgURL ? (
        <Style.ThumbNailImage
          src={feedData.thumbnailImgURL}
          onClick={handleFeedClick}
        />
      ) : (
        <Style.ThumbnailDefaultImage onClick={handleFeedClick} />
      )}
      <Style.Content>
        <ProfileImage
          src={feedData.profileImgURL}
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
          {feedData.postType === 'EXCLUSIVE' && (
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
          <Style.Price>{feedData.price.toLocaleString('ko-KR')} 원</Style.Price>
        </Style.Context>

        <Style.Icons>
          <Style.IconContainer onClick={toggleLiked}>
            {isLiked ? <LikedIcon /> : <LikeIcon />}
            <Style.Count>{likeCount.toLocaleString('ko-KR')}</Style.Count>
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
        <Style.FeedToggle onMouseDown={(event) => event.preventDefault()}>
          {isOpenToggle &&
            (userId === feedData.userId ? (
              // 추후 로직 작성
              <Toggle width="80px">
                <Toggle.LabelLink path="/" icon={<EditIcon />} label="수정" />
                <Toggle.LabelLink path="/" icon={<RemoveIcon />} label="삭제" />
                <Toggle.LabelLink path="/" icon={<ShareIcon />} label="공유" />
              </Toggle>
            ) : (
              <Toggle width="80px">
                <Toggle.LabelLink path="/" icon={<HideIcon />} label="숨김" />
                <Toggle.LabelLink path="/" icon={<ShareIcon />} label="공유" />
              </Toggle>
            ))}
        </Style.FeedToggle>
      </Style.Content>
    </Style.Feed>
  );
}

Feed.propTypes = {
  feedData: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};
