import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import PropTypes from 'prop-types';
import { deletePost, deletePostBookmark, postPostBookmark } from 'api/post';
import { PAGE_PATH } from 'constants/path';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Button from 'components/Button/Button';
import Toggle from 'components/Toggle/Toggle';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import numberFormatter from 'utils/numberFormatter';
import timeFormatter from 'utils/timeFormatter';
import * as Style from 'components/Feed/Feed.styles';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as CommentIcon } from 'assets/svg/comment.svg';
import { ReactComponent as BookmarkIcon } from 'assets/svg/small_bookmark.svg';
import { ReactComponent as BookmarkedIcon } from 'assets/svg/small_bookmarked.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { ReactComponent as ThumbnailIcon } from 'assets/svg/default_thumbnail_image.svg';

export default function Feed({ feedData, ...props }) {
  const navigate = useNavigate();

  const [isDeleted, setIsDeleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(feedData.isBookmarked);
  const [isOpenToggle, setIsOpenToggle] = useState(false);

  const { mutate: PostBookmark } = useMutation(postPostBookmark);
  const { mutate: DeletePostBookmark } = useMutation(deletePostBookmark);
  const { mutate: DeletePost } = useMutation(deletePost);

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
    setIsBookmarked(feedData.isBookmarked);
  }, [feedData]);

  return (
    <Style.Feed Feed isDeleted={isDeleted} {...props}>
      <Style.FeedHeader>
        <ProfileImage
          src={ImageUrlConverter(feedData.user?.profileImgURL)}
          size="small"
          profileClick={handleProfileClick}
          title={feedData.user?.nickname}
          isAnonymous={feedData.isAnonymous}
        />
        <Style.FeedProfile>
          <Style.WriterNickName>
            {feedData.isAnonymous ? '익명' : feedData.user?.nickname}
          </Style.WriterNickName>
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
              {feedData.isMyPost && !feedData.isSold && (
                <>
                  <Toggle.LabelLink icon={<EditIcon />} label="수정" />
                  <Toggle.LabelLink
                    icon={<RemoveIcon />}
                    label="삭제"
                    labelClick={postDeleteClick}
                  />
                </>
              )}
              {/* 활성화 라벨 추가 */}
              <Toggle.LabelLink
                icon={isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
                label="북마크"
                labelClick={toggleBookmarked}
              />
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
      <Style.FeedContentContainer to={PAGE_PATH.POST(feedData.postId)}>
        <Style.Tag>
          {feedData.postType === 'EXCLUSIVE' && (
            <Button color="dark" size="small" disabled>
              단독
            </Button>
          )}
          {feedData.postType === 'EXCLUSIVE' && feedData.isSold ? (
            <Button color="danger" size="small" disabled>
              판매 완료
            </Button>
          ) : feedData.isPurchasable ? (
            <Button color="primary" size="small" disabled>
              판매중
            </Button>
          ) : (
            <Button color="danger" size="small" disabled>
              판매 중지
            </Button>
          )}
        </Style.Tag>
        <Style.FeedContent>
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
          <Style.FeedStatus>
            <Style.LikeCount>
              <LikeIcon />
              {numberFormatter(feedData.likeCount)}
            </Style.LikeCount>
            <Style.CommentCount>
              <CommentIcon />
              {feedData.commentCount}
            </Style.CommentCount>
          </Style.FeedStatus>
        </Style.FeedContentFooter>
      </Style.FeedContentContainer>
    </Style.Feed>
  );
}

Feed.propTypes = {
  feedData: PropTypes.object.isRequired,
};
