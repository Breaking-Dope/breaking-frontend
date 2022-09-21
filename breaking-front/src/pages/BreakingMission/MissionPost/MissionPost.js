import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { PAGE_PATH } from 'constants/path';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import MissionTime from 'utils/MissionTime';
import Line from 'components/Line/Line';
import ContentHashtag from 'components/ContentHashtag/ContentHashtag';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Toggle from 'components/Toggle/Toggle';
import ShareModal from 'components/ShareModal/ShareModal';
import SubmitButton from 'pages/BreakingMission/MissionPost/components/SubmitButton/SubmitButton';
import MissionPostFeed from 'pages/BreakingMission/MissionPost/components/MissionPostFeed/MissionPostFeed';
import * as Style from 'pages/BreakingMission/MissionPost/MissionPost.styles';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import useMissionPost from 'pages/BreakingMission/MissionPost/hooks/queries/useMissionPost';
import Skeleton from 'components/Skeleton/Skeleton';

const MissionPost = () => {
  const navigate = useNavigate();
  let { id: missionId } = useParams();
  missionId = Number(missionId);

  const [isOpenContentToggle, setIsOpenContentToggle] = useState(false);
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);
  const [timeBoxText, setTimeBoxText] = useState([]);

  const { data: missionData, isLoading: isMissionDataLoading } =
    useMissionPost(missionId);

  const toggleShareModal = () => {
    setIsOpenShareModal((pre) => !pre);
  };

  const toggleContent = () => {
    setIsOpenContentToggle((pre) => !pre);
  };

  const profileClick = () => {
    navigate(PAGE_PATH.PROFILE(missionData?.data.user?.userId));
  };

  useEffect(() => {
    setTimeBoxText(
      MissionTime(
        new Date(missionData?.data.startDate),
        new Date(missionData?.data.endDate)
      )
    );
  }, [missionData]);

  return (
    <>
      <ShareModal
        isOpen={isOpenShareModal}
        closeClick={toggleShareModal}
        data={missionData?.data}
        path={PAGE_PATH.BREAKING_MISSION_POST(missionId)}
      />
      <Style.MissionPost>
        <Style.TimeBox time={timeBoxText?.[1]}>
          <Style.MissionText>
            {timeBoxText?.[0]}&nbsp;
            <Style.MissionTime>{timeBoxText?.[1]}</Style.MissionTime>
          </Style.MissionText>
          <Style.MissionDate>
            {dayjs(missionData?.data.startDate).format('YYYY.MM.DD. HH:mm')}
            &nbsp;~&nbsp;
            {dayjs(missionData?.data.endDate).format('YYYY.MM.DD. HH:mm')}
          </Style.MissionDate>
        </Style.TimeBox>
        <Style.ContentHeader>
          <Style.ContentWriter>
            {isMissionDataLoading ? (
              <>
                <Skeleton width="100px" height="100px" radius="50%" />
                <Skeleton width="100px" height="14px" radius="10px" />
              </>
            ) : (
              <ProfileImage
                size="large"
                src={ImageUrlConverter(missionData?.data.user?.profileImgURL)}
                profileClick={profileClick}
              />
            )}
            <Style.ContentWriterName
              length={missionData?.data.user?.nickname.length}
            >
              {missionData?.data.user?.nickname}
            </Style.ContentWriterName>
          </Style.ContentWriter>
          <Style.Context>
            <Style.ContentTitle>{missionData?.data.title}</Style.ContentTitle>
            <Style.ContentLocationContainer>
              <Style.ContentLocation>
                <LocationIcon />
                {missionData?.data.location
                  ? missionData.data.location.region_1depth_name +
                    ' ' +
                    missionData.data.location.region_2depth_name
                  : '전국'}
              </Style.ContentLocation>
              <Style.Dot />
              <Style.ContentViewCount>
                조회수&nbsp;
                {missionData?.data.viewCount.toLocaleString('ko-KR')}회
              </Style.ContentViewCount>
            </Style.ContentLocationContainer>
            <Style.ContentCreatedDate>
              작성시간&nbsp;
              {dayjs(missionData?.data.createdDate).format('YYYY.MM.DD. HH:mm')}
            </Style.ContentCreatedDate>
          </Style.Context>
          <SubmitButton />
        </Style.ContentHeader>

        <Line width="900px" />
        <Style.ContentContainer>
          <Style.Content>
            {missionData?.data.content && (
              <ContentHashtag content={missionData?.data.content} />
            )}
          </Style.Content>
          <Style.ContentFooter>
            <ETCIcon
              onClick={toggleContent}
              tabIndex="0"
              onBlur={() => setIsOpenContentToggle(false)}
            />
            <Style.ContentToggle
              onMouseDown={(event) => event.preventDefault()}
            >
              {isOpenContentToggle && (
                <Toggle width="100px">
                  <Toggle.LabelLink
                    icon={<ShareIcon />}
                    label="공유"
                    labelClick={toggleShareModal}
                  />
                </Toggle>
              )}
            </Style.ContentToggle>
          </Style.ContentFooter>
        </Style.ContentContainer>
        <Line width="900px" />
      </Style.MissionPost>
      <MissionPostFeed missionId={missionId} />
    </>
  );
};

export default MissionPost;
