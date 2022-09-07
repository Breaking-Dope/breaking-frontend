import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ShareModal from 'components/ShareModal/ShareModal';
import usePostBookmark from 'hooks/mutations/usePostBookmark';
import useDeletePostBookmark from 'hooks/mutations/useDeletePostBookmark';
import { useNavigate } from 'react-router-dom';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import * as Style from 'components/MissionFeed/MissionFeed.styles';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import Toggle from 'components/Toggle/Toggle';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { ReactComponent as BookmarkIcon } from 'assets/svg/bookmark.svg';
import { ReactComponent as BookmarkedIcon } from 'assets/svg/bookmarked.svg';
import NumberFormatter from 'utils/NumberFormatter';
import TimeFormatter from 'utils/TimeFormatter';
import MissionTime from 'utils/MissionTime';

function MissionFeed({ feedData, ...props }) {
  const navigate = useNavigate();
  const { isLogin } = useContext(UserInformationContext);
  const timeBoxText = MissionTime(feedData.startDate, feedData.endDate);

  const [isOpenShareModal, setIsOpenShareModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(feedData.isBookmarked);
  const [isOpenToggle, setIsOpenToggle] = useState(false);

  const { mutate: PostBookmark } = usePostBookmark();
  const { mutate: DeletePostBookmark } = useDeletePostBookmark();

  const handleProfileClick = () => {
    navigate(PAGE_PATH.PROFILE(feedData.user?.userId));
  };

  const toggleBookmarked = () => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      return navigate(PAGE_PATH.LOGIN);
    }

    isBookmarked
      ? DeletePostBookmark(feedData.postId)
      : PostBookmark(feedData.postId);
    setIsBookmarked((pre) => !pre);
  };

  const toggleETC = () => {
    setIsOpenToggle((pre) => !pre);
  };

  const toggleShareModal = () => {
    setIsOpenShareModal((pre) => !pre);
  };

  useEffect(() => {
    setIsBookmarked(feedData.isBookmarked);
  }, [feedData]);

  return (
    <>
      <ShareModal
        isOpen={isOpenShareModal}
        closeClick={toggleShareModal}
        data={feedData}
        postId={feedData.postId}
      />
      <Style.MissionFeed {...props}>
        <Style.Header>
          <ProfileImage
            src={ImageUrlConverter(feedData.user.profileImgURL)}
            size="small"
            profileClick={handleProfileClick}
            title={feedData.user?.nickname}
          />
          <Style.WriterNickname>{feedData.user.nickname}</Style.WriterNickname>
          <ETCIcon
            onClick={toggleETC}
            tabIndex="0"
            onBlur={() => setIsOpenToggle(false)}
          />
          <Style.MissionFeedToggle
            onMouseDown={(event) => event.preventDefault()}
          >
            {isOpenToggle && (
              <Toggle width="100px">
                <Toggle.LabelLink
                  icon={<ShareIcon />}
                  label="공유"
                  labelClick={toggleShareModal}
                />
              </Toggle>
            )}
          </Style.MissionFeedToggle>
        </Style.Header>
        <Style.Content>
          <Style.Bookmark onClick={toggleBookmarked}>
            {isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
          </Style.Bookmark>
          <Style.Title>{feedData.title}</Style.Title>
        </Style.Content>
        <Style.ContentFooter>
          <Style.Status>
            <Style.ViewCount>
              조회수 {NumberFormatter(feedData.viewCount)}회
            </Style.ViewCount>
            <Style.CreatedDate>
              {TimeFormatter(new Date(feedData.createdDate))}
            </Style.CreatedDate>
          </Style.Status>
          <Style.TimeBox>
            <p>{timeBoxText[0]}</p>
            <Style.MissionTime>{timeBoxText[1]}</Style.MissionTime>
          </Style.TimeBox>
        </Style.ContentFooter>
      </Style.MissionFeed>
    </>
  );
}

MissionFeed.propTypes = {
  feedData: PropTypes.object.isRequired,
};

export default MissionFeed;
