import React, { useState } from 'react';
import * as Style from 'pages/BreakingMission/MissionPost/MissionPost.styles';
import Line from 'components/Line/Line';
import ContentHashtag from 'components/ContentHashtag/ContentHashtag';
import SubmitButton from './components/SubmitButton/SubmitButton';
import dayjs from 'dayjs';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import Toggle from 'components/Toggle/Toggle';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import ShareModal from 'components/ShareModal/ShareModal';
import { useNavigate, useParams } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import MissionTime from 'utils/MissionTime';
import MissionPostFeed from './components/MissionPostFeed/MissionPostFeed';

const MissionPost = () => {
  const navigate = useNavigate();
  let { id: missionId } = useParams();
  missionId = Number(missionId);

  const missionData = {
    data: {
      title: '테스트 미션',
      content: '테스트 미션입니다.',
      viewCount: 0,
      startDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
      createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
      isMyMission: true,
      location: {
        address: '서울특별시 강남구 테헤란로 427',
        latitude: 37.4979,
        longitude: 127.02761,
        region_1depth_name: '서울특별시',
        region_2depth_name: '강남구',
      },
      user: {
        userId: 1,
        nickname: '테스트',
        profileImgURL: 'https://i.imgur.com/0y0y0y0.jpg',
      },
    },
  };
  const timeBoxText = MissionTime(
    new Date(missionData.data.startDate),
    new Date(missionData.data.endDate)
  );

  const [isOpenContentToggle, setIsOpenContentToggle] = useState(false);
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);

  const toggleShareModal = () => {
    setIsOpenShareModal((pre) => !pre);
  };

  const toggleContent = () => {
    setIsOpenContentToggle((pre) => !pre);
  };

  const profileClick = () => {
    navigate(PAGE_PATH.PROFILE(missionData?.user?.userId));
  };

  return (
    <>
      <ShareModal
        isOpen={isOpenShareModal}
        closeClick={toggleShareModal}
        data={missionData.data}
        path={PAGE_PATH.BREAKING_MISSION_POST(missionId)}
      />
      <Style.MissionPost>
        <Style.TimeBox time={timeBoxText[1]}>
          <Style.MissionText>
            {timeBoxText[0]}&nbsp;
            <Style.MissionTime>{timeBoxText[1]}</Style.MissionTime>
          </Style.MissionText>
          <Style.MissionDate>
            {dayjs(missionData?.data.startDate).format('YYYY.MM.DD. HH:mm')}
            &nbsp;~&nbsp;
            {dayjs(missionData?.data.endDate).format('YYYY.MM.DD. HH:mm')}
          </Style.MissionDate>
        </Style.TimeBox>
        <Style.ContentHeader>
          <Style.ContentWriter>
            <ProfileImage
              size="large"
              src={ImageUrlConverter(missionData?.data.user?.profileImgURL)}
              profileClick={profileClick}
              isAnonymous={missionData.data.isAnonymous}
            />
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
                {missionData?.data.location.region_1depth_name +
                  ' ' +
                  missionData?.data.location.region_2depth_name}
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
            <ContentHashtag content={missionData?.data.content} />
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
      <MissionPostFeed />
    </>
  );
};

export default MissionPost;
