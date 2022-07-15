import Feed from 'components/Feed/Feed';
import Filter from 'components/Filter/Filter';
import FollowCard from 'components/FollowCard/FollowCard';
import Line from 'components/Line/Line';
import Modal from 'components/Modal/Modal';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Tabs from 'components/Tabs/Tabs';
import * as Style from 'pages/Profile/Profile.styles';
import React, { useState } from 'react';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const toggleModal = () => {
    setIsModalOpen((pre) => !pre);
  };
  const followClick = () => {
    toggleModal();
    setModalTitle('팔로잉');
  };
  const followerClick = () => {
    toggleModal();
    setModalTitle('팔로워');
  };
  const feedData = {
    postId: '1',
    title: '~~~사건',
    region: '중구',
    thumbnailImgURL: '',
    likeCount: 999,
    postType: 'EXCLUSIVE',
    isSold: false,
    balance: 10000,
    viewCount: 1000,
    userId: 123,
    profileImgURL: '',
    realName: '가나다',
    isLiked: false,
    isBookmarked: false,
  };
  const profileData = {
    userId: 123,
    nickname: '주기',
    statusMsg: '안녕하세요',
    profileImgURL: '',
  };
  return (
    <>
      <Modal isOpen={isModalOpen} closeClick={toggleModal} title={modalTitle}>
        <FollowCard isPermission={true} profileData={profileData}></FollowCard>
      </Modal>
      <Style.UserContainer>
        <ProfileImage size="xlarge" />
        <Style.UserInformation>
          <Style.NickName>깻묵</Style.NickName>
          <Style.StatusMessage>상태메세지</Style.StatusMessage>
          <Style.Information>
            <div>작성제보 3</div>
            <div onClick={followerClick}>팔로워 99</div>
            <div onClick={followClick}>팔로잉 0</div>
          </Style.Information>
        </Style.UserInformation>
      </Style.UserContainer>
      <Line width="100%" />
      <Style.PostInformation>
        <Tabs>
          <Tabs.TabList>
            <Tabs.TabItem>작성한 제보(3)</Tabs.TabItem>
            <Tabs.TabItem>구매한 제보(10)</Tabs.TabItem>
            <Tabs.TabItem>북마크한 제보(5)</Tabs.TabItem>
          </Tabs.TabList>
          <Filter width="180px">
            <Filter.FilterDetail>모든 제보글</Filter.FilterDetail>
            <Filter.FilterDetail>판매되지 않은 제보글</Filter.FilterDetail>
            <Filter.FilterDetail>판매된 제보글</Filter.FilterDetail>
          </Filter>
          <Tabs.TabPanel>
            <Style.FeedContainer>
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
            </Style.FeedContainer>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <Style.FeedContainer>
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
              <Feed feedData={feedData} />
            </Style.FeedContainer>
          </Tabs.TabPanel>
          <Tabs.TabPanel>3번</Tabs.TabPanel>
        </Tabs>
      </Style.PostInformation>
    </>
  );
};

export default Profile;
