/* eslint-disable no-unused-vars */
import FollowCard from 'components/FollowCard/FollowCard';
import Line from 'components/Line/Line';
import Modal from 'components/Modal/Modal';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Tabs from 'components/Tabs/Tabs';
import useFollowList from 'hooks/queries/useFollowList';
import useProfile from 'hooks/queries/useProfile';
import useProfilePost from 'hooks/queries/useProfilePost';
import * as Style from 'pages/Profile/Profile.styles';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileFollowButton from './units/ProfileFollowButton';
import ProfileTabPanel from './units/ProfileTabPanel';

const Profile = () => {
  let { id: userId } = useParams();
  userId = Number(userId);
  // 숫자가 아니면 NaN으로 표시됨 예외처리 필요

  let isMyPage = false;
  if (userId === 0) {
    isMyPage = true;
  }
  // 추후에 전역 state와 비교해서 내프로필 페이지인지 확인할 예정

  // 팔로우 리스트에서 삭제버튼 눌렀을때 api 실행 되어야함
  // msw search params를 이용해서 filter 결과물에 맞춰서 반환해주어야함

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
  const [modalTitle, setModalTitle] = useState('');
  const { data: followListData, isLoading: followListLoading } = useFollowList(
    modalTitle,
    userId
  );

  const toggleModal = () => {
    setIsModalOpen((pre) => !pre);
  };

  const followingClick = () => {
    setModalTitle('팔로잉');
    toggleModal();
  };
  const followerClick = () => {
    setModalTitle('팔로워');
    toggleModal();
  };
  console.log(followListLoading);
  console.log(writtenLoading, boughtLoading, bookmarkedLoading);
  return (
    <>
      <Modal isOpen={isModalOpen} closeClick={toggleModal} title={modalTitle}>
        {followListData?.data.map((item) => (
          <FollowCard
            isPermission={isMyPage}
            profileData={item}
            key={item.userId}
          ></FollowCard>
        ))}
      </Modal>
      <Style.UserContainer>
        <ProfileImage size="xlarge" src={profileData?.data.profileImgURL} />
        <Style.UserInformation>
          <Style.Title>
            <Style.NickName>{profileData?.data.nickname}</Style.NickName>
            <ProfileFollowButton
              userId={userId}
              isFollowing={profileData?.data.isFollowing}
              isMyPage={isMyPage}
            />
          </Style.Title>
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
              userId={userId}
            />
          </Tabs.TabPanel>

          {isMyPage && (
            <Tabs.TabPanel>
              <ProfileTabPanel
                data={boughtData?.data}
                setOption={setBoughtOption}
                userId={userId}
              />
            </Tabs.TabPanel>
          )}

          {isMyPage && (
            <Tabs.TabPanel>
              <ProfileTabPanel
                data={bookmarkedData?.data}
                setOption={setBookmarkedOption}
                userId={userId}
              />
            </Tabs.TabPanel>
          )}
        </Tabs>
      </Style.PostInformation>
    </>
  );
};

export default Profile;
