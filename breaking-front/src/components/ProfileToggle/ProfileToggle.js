import React from 'react';
import PropTypes from 'prop-types';
import Line from 'components/Line/Line';
import * as Style from 'components/ProfileToggle/ProfileToggle.styles';
import { ReactComponent as MoneyIcon } from 'assets/svg/money.svg';
import { ReactComponent as SettingIcon } from 'assets/svg/setting.svg';
import { ReactComponent as MyPageIcon } from 'assets/svg/mypage.svg';
import { PATH } from 'constants/path';

export default function ProfileToggle({ money }) {
  return (
    <Style.ProfileToggleContainer>
      <Style.ArrowMark />
      <Style.ProfileToggle>
        <Style.LabelLink to={PATH.TRANSACTION}>
          <MoneyIcon />
          <Style.LabelText>{money?.toLocaleString('ko-KR')} 원</Style.LabelText>
          <Style.Transaction>입출금 내역</Style.Transaction>
        </Style.LabelLink>
        <Style.LabelLink to={PATH.MYPAGE}>
          <MyPageIcon />
          <Style.LabelText>마이페이지</Style.LabelText>
        </Style.LabelLink>
        <Style.LabelLink to={PATH.PROFILE_EDIT}>
          <SettingIcon />
          <Style.LabelText>프로필 수정</Style.LabelText>
        </Style.LabelLink>
        <Line width="200" />
        <Style.Logout>로그아웃</Style.Logout>
      </Style.ProfileToggle>
    </Style.ProfileToggleContainer>
  );
}

ProfileToggle.propTypes = {
  money: PropTypes.string,
};

ProfileToggle.defaultProps = {
  money: 0,
};
