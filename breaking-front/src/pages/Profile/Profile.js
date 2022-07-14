import Feed from 'components/Feed/Feed';
import Filter from 'components/Filter/Filter';
import Line from 'components/Line/Line';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Tabs from 'components/Tabs/Tabs';
import * as Style from 'pages/Profile/Profile.styles';
import React from 'react';

const Profile = () => {
  return (
    <>
      <Style.UserContainer>
        <ProfileImage size="xlarge" />
        <Style.UserInformation>
          <Style.NickName>깻묵</Style.NickName>
          <Style.StatusMessage>상태메세지</Style.StatusMessage>
          <Style.Information>
            <div>작성제보 3</div>
            <div>팔로워 99</div>
            <div>팔로윙 0</div>
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
              <Feed>
                <Feed.FeedImage />
                <Feed.Content>
                  <Feed.WriterProfileImage />
                  <Feed.Context
                    location="중구"
                    time="12분전"
                    isSold={true}
                    postType="EXCLUSIVE"
                    price={1000}
                    title="일이삼사오육칠팔구십일이삼사오육칠"
                  ></Feed.Context>
                  <Feed.Icons
                    likeCount={27}
                    isLiked={true}
                    isBookmarked={true}
                  ></Feed.Icons>
                </Feed.Content>
              </Feed>
              <Feed>
                <Feed.FeedImage />
                <Feed.Content>
                  <Feed.WriterProfileImage />
                  <Feed.Context
                    location="중구"
                    time="12분전"
                    isSold={true}
                    postType="EXCLUSIVE"
                    price={1000}
                    title="일이삼사오육칠팔구십일이삼사오육칠"
                  ></Feed.Context>
                  <Feed.Icons
                    likeCount={27}
                    isLiked={true}
                    isBookmarked={true}
                  ></Feed.Icons>
                </Feed.Content>
              </Feed>
            </Style.FeedContainer>
          </Tabs.TabPanel>
          <Tabs.TabPanel>2번</Tabs.TabPanel>
          <Tabs.TabPanel>3번</Tabs.TabPanel>
        </Tabs>
      </Style.PostInformation>
    </>
  );
};

export default Profile;
