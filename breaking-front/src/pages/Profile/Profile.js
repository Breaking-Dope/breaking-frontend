/* eslint-disable no-unused-vars */
import { getProfile } from 'api/profile';
import Feed from 'components/Feed/Feed';
import Filter from 'components/Filter/Filter';
import FollowCard from 'components/FollowCard/FollowCard';
import Line from 'components/Line/Line';
import Modal from 'components/Modal/Modal';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Tabs from 'components/Tabs/Tabs';
import useProfile from 'hooks/queries/useProfile';
import useProfilePost from 'hooks/queries/useProfilePost';
import * as Style from 'pages/Profile/Profile.styles';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const isMyPage = true;
  // 추후에 전역 state와 비교해서 내프로필 페이지인지 확인할 예정
  const { id: userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

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

  return (
    <>
      {/* <Modal isOpen={isModalOpen} closeClick={toggleModal} title={modalTitle}>
        <FollowCard
          isPermission={true}
          profileData={profileData?.data}
        ></FollowCard>
      </Modal> */}
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
            <div onClick={followClick}>
              팔로잉 {profileData?.data.followingCount}
            </div>
          </Style.Information>
        </Style.UserInformation>
      </Style.UserContainer>

      <Line width="100%" />

      <Style.PostInformation>
        <Tabs>
          <Tabs.TabList>
            <Tabs.TabItem>
              작성한 제보({profileData?.data.postCount})
            </Tabs.TabItem>
            {isMyPage && <Tabs.TabItem>구매한 제보(10)</Tabs.TabItem>}
            {isMyPage && <Tabs.TabItem>북마크한 제보(5)</Tabs.TabItem>}
            {/* 일단 이거에대한 api가 없음 */}
          </Tabs.TabList>

          <Tabs.TabPanel>
            <Style.FilterContainer>
              <Filter width="180px">
                <Filter.FilterDetail onClick={() => setWrittenOption('all')}>
                  모든 제보글
                </Filter.FilterDetail>
                <Filter.FilterDetail onClick={() => setWrittenOption('unsold')}>
                  판매되지 않은 제보글
                </Filter.FilterDetail>
                <Filter.FilterDetail onClick={() => setWrittenOption('sold')}>
                  판매된 제보글
                </Filter.FilterDetail>
              </Filter>
            </Style.FilterContainer>
            <Style.FeedContainer>
              {writtenData?.data.map((feed) => (
                <Feed feedData={feed} key={feed.postId} />
              ))}
            </Style.FeedContainer>
          </Tabs.TabPanel>

          {isMyPage && (
            <Tabs.TabPanel>
              <Style.FilterContainer>
                <Filter width="180px">
                  <Filter.FilterDetail onClick={() => setBoughtOption('all')}>
                    모든 제보글
                  </Filter.FilterDetail>
                  <Filter.FilterDetail
                    onClick={() => setBoughtOption('unsold')}
                  >
                    판매되지 않은 제보글
                  </Filter.FilterDetail>
                  <Filter.FilterDetail onClick={() => setBoughtOption('sold')}>
                    판매된 제보글
                  </Filter.FilterDetail>
                </Filter>
              </Style.FilterContainer>
              <Style.FeedContainer>
                {boughtData?.data.map((feed) => (
                  <Feed feedData={feed} key={feed.postId} />
                ))}
              </Style.FeedContainer>
            </Tabs.TabPanel>
          )}

          {isMyPage && (
            <Tabs.TabPanel>
              <Style.FilterContainer>
                <Filter width="180px">
                  <Filter.FilterDetail
                    onClick={() => setBookmarkedOption('all')}
                  >
                    모든 제보글
                  </Filter.FilterDetail>
                  <Filter.FilterDetail
                    onClick={() => setBookmarkedOption('unsold')}
                  >
                    판매되지 않은 제보글
                  </Filter.FilterDetail>
                  <Filter.FilterDetail
                    onClick={() => setBookmarkedOption('sold')}
                  >
                    판매된 제보글
                  </Filter.FilterDetail>
                </Filter>
              </Style.FilterContainer>
              <Style.FeedContainer>
                {bookmarkedData?.data.map((feed) => (
                  <Feed feedData={feed} key={feed.postId} />
                ))}
              </Style.FeedContainer>
            </Tabs.TabPanel>
          )}
        </Tabs>
      </Style.PostInformation>
    </>
  );
};

export default Profile;
