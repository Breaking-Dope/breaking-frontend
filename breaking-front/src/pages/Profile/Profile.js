import { postFollow, postUnFollow } from 'api/profile';
import FollowCard from 'components/FollowCard/FollowCard';
import Line from 'components/Line/Line';
import Modal from 'components/Modal/Modal';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Skeleton, { FollowCardSkeleton } from 'components/Skeleton/Skeleton';
import Tabs from 'components/Tabs/Tabs';
import { PAGE_PATH } from 'constants/path';
import useFollowerList from 'hooks/queries/useFollowerList';
import useFollowingList from 'hooks/queries/useFollowingList';
import useProfile from 'hooks/queries/useProfile';
import useProfileBookmarkedPost from 'hooks/queries/useProfileBookmarkedPost';
import useProfileBoughtPost from 'hooks/queries/useProfileBoughtPost';
import useProfileWrittenPost from 'hooks/queries/useProfileWrittenPost';
import useCheckMyPage from 'hooks/useCheckMyPage';
import * as Style from 'pages/Profile/Profile.styles';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import ImageUrlConverter from 'utils/ImageUrlConverter';
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
    isLoading: isWrittenLoading,
  } = useProfileWrittenPost(userId, writtenOption);

  const {
    data: boughtData,
    fetchNextPage: FetchNextBought,
    isFetching: isBoughtFetching,
    hasNextPage: boughtHasNextPage,
    isLoading: isBoughtLoading,
  } = useProfileBoughtPost(userId, isMyPage, boughtOption);

  const {
    data: bookmarkedData,
    fetchNextPage: FetchNextBookmarked,
    isFetching: isBookmarkedFetching,
    hasNextPage: bookmarkedHasNextPage,
    isLoading: isBookmarkedLoading,
  } = useProfileBookmarkedPost(userId, isMyPage, bookmarkedOption);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const { data: followerListData, isLoading: followerListLoading } =
    useFollowerList(userId);

  const { data: followingListData, isLoading: followingListLoading } =
    useFollowingList(userId);

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
        {modalTitle === '팔로워' &&
          followerListData?.data.map((item) => (
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
        {modalTitle === '팔로잉' &&
          followingListData?.data.map((item) => (
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
        {(followerListLoading || followingListLoading) && (
          <>
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
            <FollowCardSkeleton />
          </>
        )}
      </Modal>
      <Style.UserContainer>
        <ProfileImage
          size="xlarge"
          src={ImageUrlConverter(profileData?.data.profileImgURL)}
        />
        <Style.UserInformation>
          <Style.Title>
            {isLoading ? (
              <Skeleton width="120px" height="45px" radius="25px" />
            ) : (
              <>
                <Style.NickName>{profileData.data.nickname}</Style.NickName>
                <ProfileFollowButton
                  userId={userId}
                  isFollowing={profileData.data.isFollowing}
                  isMyPage={isMyPage}
                  UnFollow={UnFollow}
                  Follow={Follow}
                />
              </>
            )}
          </Style.Title>
          <Style.StatusMessage>
            {isLoading ? (
              <Skeleton width="600px" height="25px" radius="30px" />
            ) : (
              profileData.data.statusMsg
            )}
          </Style.StatusMessage>
          <Style.Information>
            {isLoading ? (
              <>
                <Skeleton width="50px" height="20px" radius="30px" />
                <Skeleton width="50px" height="20px" radius="30px" />
                <Skeleton width="50px" height="20px" radius="30px" />
              </>
            ) : (
              <>
                <div>작성제보 {profileData?.data.postCount}</div>
                <div onClick={followerClick}>
                  팔로워 {profileData?.data.followerCount}
                </div>
                <div onClick={followingClick}>
                  팔로잉 {profileData?.data.followingCount}
                </div>
              </>
            )}
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
              type="written"
              hasNextPage={writtenHasNextPage}
              nextFetch={FetchNextWritten}
              isFetching={isWrittenFetching}
              data={writtenData}
              setOption={setWrittenOption}
              isLoading={isWrittenLoading}
            />
          </Tabs.TabPanel>

          {isMyPage && (
            <Tabs.TabPanel>
              <ProfileTabPanel
                type="bought"
                hasNextPage={boughtHasNextPage}
                nextFetch={FetchNextBought}
                isFetching={isBoughtFetching}
                data={boughtData}
                setOption={setBoughtOption}
                isLoading={isBoughtLoading}
              />
            </Tabs.TabPanel>
          )}

          {isMyPage && (
            <Tabs.TabPanel>
              <ProfileTabPanel
                type="bookmarked"
                hasNextPage={bookmarkedHasNextPage}
                nextFetch={FetchNextBookmarked}
                isFetching={isBookmarkedFetching}
                data={bookmarkedData}
                setOption={setBookmarkedOption}
                isLoading={isBookmarkedLoading}
              />
            </Tabs.TabPanel>
          )}
        </Tabs>
      </Style.PostInformation>
    </>
  );
};

export default Profile;
