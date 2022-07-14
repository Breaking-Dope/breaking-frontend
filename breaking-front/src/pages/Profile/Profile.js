import Line from 'components/Line/Line';
import ProfileImage from 'components/ProfileImage/ProfileImage';
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
    </>
  );
};

export default Profile;
