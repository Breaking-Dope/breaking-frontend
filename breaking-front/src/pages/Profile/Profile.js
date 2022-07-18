/* eslint-disable no-unused-vars */
import { getProfile } from 'api/profile';
import Feed from 'components/Feed/Feed';
import Filter from 'components/Filter/Filter';
import FollowCard from 'components/FollowCard/FollowCard';
import Line from 'components/Line/Line';
import Modal from 'components/Modal/Modal';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Tabs from 'components/Tabs/Tabs';
import useFollow from 'hooks/queries/useFollow';
import useProfile from 'hooks/queries/useProfile';
import useProfilePost from 'hooks/queries/useProfilePost';
import * as Style from 'pages/Profile/Profile.styles';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileTabPanel from './units/ProfileTabPanel';

const Profile = () => {
  const isMyPage = true;
  // 추후에 전역 state와 비교해서 내프로필 페이지인지 확인할 예정
  const { id: userId } = useParams();

  const { profileData, isLoading } = useProfile(userId);

  const [writtenOption, setWrittenOption] = useState('all');
  const [boughtOption, setBoughtOption] = useState('all');
  const [bookmarkedOption, setBookmarkedOption] = useState('all');

  const { data: writtenData, isLoading: writtenLoading } = useProfilePost(
    userId,
    isMyPage,
    'written',
    writtenOption
  );

  const { data: boughtData, isLoading: boughtLoading } = useProfilePost(
    userId,
    isMyPage,
    'bought',
    boughtOption
  );

  const { data: bookmarkedData, isLoading: bookmarkedLoading } = useProfilePost(
    userId,
    isMyPage,
    'bookmarked',
    bookmarkedOption
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('followings');
  const { data: followData, isLoading: followLoading } = useFollow(
    modalTitle,
    userId
  );
  const toggleModal = () => {
    setIsModalOpen((pre) => !pre);
  };

  const followingClick = () => {
    toggleModal();
    setModalTitle('팔로잉');
  };
  const followerClick = () => {
    toggleModal();
    setModalTitle('팔로워');
  };

  return (
    <>
      <Modal isOpen={isModalOpen} closeClick={toggleModal} title={modalTitle}>
        {followData?.data.map((item) => (
          <FollowCard
            isPermission={true}
            profileData={item}
            key={item.key}
          ></FollowCard>
        ))}
      </Modal>
      <Style.UserContainer>
        <ProfileImage size="xlarge" src={profileData?.data.profileImgURL} />
        <Style.UserInformation>
          <Style.NickName>{profileData?.data.nickname}</Style.NickName>
          <Style.StatusMessage>
            {profileData?.data.statusMsg}
          </Style.StatusMessage>
          <Style.Information>
            <div>작성제보 {profileData?.data.postCount}</div>
            <div onClick={followerClick}>
              팔로워 {profileData?.data.followerCount}
            </div>
            <div onClick={followingClick}>
              팔로잉 {profileData?.data.followingCount}
            </div>
          </Style.Information>
        </Style.UserInformation>
      </Style.UserContainer>

      <Line width="100%" />

      <Style.PostInformation>
        <Tabs>
          <Tabs.TabList>
            <Tabs.TabItem>작성한 제보</Tabs.TabItem>
            {isMyPage && <Tabs.TabItem>구매한 제보</Tabs.TabItem>}
            {isMyPage && <Tabs.TabItem>북마크한 제보</Tabs.TabItem>}
          </Tabs.TabList>

          <Tabs.TabPanel>
            <ProfileTabPanel
              data={writtenData?.data}
              setOption={setWrittenOption}
            />
          </Tabs.TabPanel>

          {isMyPage && (
            <Tabs.TabPanel>
              <ProfileTabPanel
                data={boughtData?.data}
                setOption={setBoughtOption}
              />
            </Tabs.TabPanel>
          )}

          {isMyPage && (
            <Tabs.TabPanel>
              <ProfileTabPanel
                data={bookmarkedData?.data}
                setOption={setBookmarkedOption}
              />
            </Tabs.TabPanel>
          )}
        </Tabs>
      </Style.PostInformation>
    </>
  );
};

export default Profile;
