import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PAGE_PATH } from 'constants/path';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Toggle from 'components/Toggle/Toggle';
import Tag from 'components/Tag/Tag';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import numberFormatter from 'utils/numberFormatter';
import timeFormatter from 'utils/timeFormatter';
import * as Style from 'components/Feed/Feed.styles';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as CommentIcon } from 'assets/svg/comment.svg';
import { ReactComponent as BookmarkIcon } from 'assets/svg/bookmark.svg';
import { ReactComponent as BookmarkedIcon } from 'assets/svg/bookmarked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { ReactComponent as ThumbnailIcon } from 'assets/svg/default_thumbnail_image.svg';
import usePostBookmark from 'hooks/mutations/usePostBookmark';
import useDeletePostBookmark from 'hooks/mutations/useDeletePostBookmark';

export default function Feed({ feedData, ...props }) {
  const navigate = useNavigate();

  const [isBookmarked, setIsBookmarked] = useState(feedData.isBookmarked);
  const [isOpenToggle, setIsOpenToggle] = useState(false);

  const { mutate: PostBookmark } = usePostBookmark();
  const { mutate: DeletePostBookmark } = useDeletePostBookmark();

  const handleProfileClick = () => {
    navigate(PAGE_PATH.PROFILE(feedData.user?.userId));
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

  useEffect(() => {
    setIsBookmarked(feedData.isBookmarked);
  }, [feedData]);

  return (
    <Style.Feed {...props}>
      <Style.FeedHeader>
        <ProfileImage
          src={ImageUrlConverter(feedData.user?.profileImgURL)}
          size="small"
          profileClick={handleProfileClick}
          title={feedData.user?.nickname}
          isAnonymous={feedData.isAnonymous}
        />
        <Style.FeedProfile>
          <Style.WriterNickname>
            {feedData.isAnonymous ? '익명' : feedData.user?.nickname}
          </Style.WriterNickname>
          <Style.Location>
            <LocationIcon />
            {feedData.location.region_1depth_name +
              ' ' +
              feedData.location.region_2depth_name}
          </Style.Location>
        </Style.FeedProfile>
        <ETCIcon
          onClick={toggleETC}
          tabIndex="0"
          onBlur={() => setIsOpenToggle(false)}
        />
        <Style.FeedToggle onMouseDown={(event) => event.preventDefault()}>
          {isOpenToggle && (
            <Toggle width="100px">
              <Toggle.LabelLink icon={<ShareIcon />} label="공유" />
            </Toggle>
          )}
        </Style.FeedToggle>
      </Style.FeedHeader>
      <Style.FeedThumbnailContainer to={PAGE_PATH.POST(feedData.postId)}>
        {feedData.thumbnailImgURL ? (
          <Style.ThumbnailImage
            src={ImageUrlConverter(feedData.thumbnailImgURL)}
          />
        ) : (
          <Style.DefaultThumbnailImage as="div">
            <ThumbnailIcon />
          </Style.DefaultThumbnailImage>
        )}
      </Style.FeedThumbnailContainer>
      <Style.FeedContentContainer>
        <Style.FeedContentHeader>
          <Tag
            postType={feedData.postType}
            isSold={feedData.isSold}
            isPurchasable={feedData.isPurchasable}
          />
          <Style.Bookmark onClick={toggleBookmarked}>
            {isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
          </Style.Bookmark>
        </Style.FeedContentHeader>
        <Style.FeedContent to={PAGE_PATH.POST(feedData.postId)}>
          <Style.FeedTitle>{feedData.title}</Style.FeedTitle>
          <Style.FeedPrice>
            {feedData.price.toLocaleString('ko-KR')} 원
          </Style.FeedPrice>
        </Style.FeedContent>
        <Style.FeedContentFooter>
          <div>
            <Style.ViewCount>
              조회수 {numberFormatter(feedData.viewCount)}회
            </Style.ViewCount>
            <Style.CreatedDate>
              {timeFormatter(new Date(feedData.createdDate))}
            </Style.CreatedDate>
          </div>
          <div>
            <Style.LikeCount>
              <LikeIcon />
              {numberFormatter(feedData.likeCount)}
            </Style.LikeCount>
            <Style.CommentCount>
              <CommentIcon />
              {feedData.commentCount}
            </Style.CommentCount>
          </div>
        </Style.FeedContentFooter>
      </Style.FeedContentContainer>
    </Style.Feed>
  );
}

Feed.propTypes = {
  feedData: PropTypes.object.isRequired,
};
