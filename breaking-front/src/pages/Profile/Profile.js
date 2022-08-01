/* eslint-disable no-unused-vars */
import { postFollow, postUnFollow } from 'api/profile';
import FollowCard from 'components/FollowCard/FollowCard';
import Line from 'components/Line/Line';
import Modal from 'components/Modal/Modal';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Tabs from 'components/Tabs/Tabs';
import { PAGE_PATH } from 'constants/path';
import useFollowList from 'hooks/queries/useFollowList';
import useProfile from 'hooks/queries/useProfile';
import useProfileBookmarkedPost from 'hooks/queries/useProfileBookmarkedPost';
import useProfileBoughtPost from 'hooks/queries/useProfileBoughtPost';
import useProfileWrittenPost from 'hooks/queries/useProfileWrittenPost';
import useCheckMyPage from 'hooks/useCheckMyPage';
import * as Style from 'pages/Profile/Profile.styles';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import ImageUrlTranslator from 'utils/ImageUrlTranslator';
import ProfileFollowButton from './units/ProfileFollowButton';
import ProfileTabPanel from './units/ProfileTabPanel';

const Profile = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  let { id: userId } = useParams();

  const isMyPage = useCheckMyPage(userId);
  const { profileData, isLoading } = useProfile(userId);

  const [writtenOption, setWrittenOption] = useState('all');
  const [boughtOption, setBoughtOption] = useState('all');
  const [bookmarkedOption, setBookmarkedOption] = useState('all');

  const { mutate: UnFollow } = useMutation(postUnFollow);
  const { mutate: Follow } = useMutation(postFollow);

  const {
    data: writtenData,
    fetchNextPage: FetchNextWritten,
    isFetching: isWrittenFetching,
    hasNextPage: writtenHasNextPage,
  } = useProfileWrittenPost(userId, writtenOption);

  const {
    data: boughtData,
    fetchNextPage: FetchNextBought,
    isFetching: isBoughtFetching,
    hasNextPage: boughtHasNextPage,
  } = useProfileBoughtPost(userId, isMyPage, boughtOption);

  const {
    data: bookmarkedData,
    fetchNextPage: FetchNextBookmarked,
    isFetching: isBookmarkedFetching,
    hasNextPage: bookmarkedHasNextPage,
  } = useProfileBookmarkedPost(userId, isMyPage, bookmarkedOption);

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

  return (
    <>
      <Modal isOpen={isModalOpen} closeClick={toggleModal} title={modalTitle}>
        {followListData?.data.map((item) => (
          <FollowCard
            cardClick={() => {
              toggleModal();
              setModalTitle('');
              navigate(PAGE_PATH.PROFILE(item.userId));
            }}
            isPermission={isMyPage}
            profileData={item}
            key={item.userId}
            deleteClick={() =>
              UnFollow(item.userId, {
                onSuccess: () => {
                  queryClient.invalidateQueries(modalTitle, userId);
                },
              })
            }
          ></FollowCard>
        ))}
      </Modal>
      <Style.UserContainer>
        <ProfileImage
          size="xlarge"
          src={ImageUrlTranslator(profileData?.data.profileImgURL)}
        />
        <Style.UserInformation>
          <Style.Title>
            <Style.NickName>{profileData?.data.nickname}</Style.NickName>
            <ProfileFollowButton
              userId={userId}
              isFollowing={profileData?.data.isFollowing}
              isMyPage={isMyPage}
              UnFollow={UnFollow}
              Follow={Follow}
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
              hasNextPage={writtenHasNextPage}
              nextFetch={FetchNextWritten}
              isFetching={isWrittenFetching}
              data={writtenData}
              setOption={setWrittenOption}
            />
          </Tabs.TabPanel>

          {isMyPage && (
            <Tabs.TabPanel>
              <ProfileTabPanel
                hasNextPage={boughtHasNextPage}
                nextFetch={FetchNextBought}
                isFetching={isBoughtFetching}
                data={boughtData}
                setOption={setBoughtOption}
              />
            </Tabs.TabPanel>
          )}

          {isMyPage && (
            <Tabs.TabPanel>
              <ProfileTabPanel
                hasNextPage={bookmarkedHasNextPage}
                nextFetch={FetchNextBookmarked}
                isFetching={isBookmarkedFetching}
                data={bookmarkedData}
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
