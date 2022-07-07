import React, { useState } from 'react';
import Toggle from 'components/Toggle/Toggle';
import { ReactComponent as MoneyIcon } from 'assets/svg/money.svg';
import { ReactComponent as SettingIcon } from 'assets/svg/setting.svg';
import { ReactComponent as MyPageIcon } from 'assets/svg/mypage.svg';
import Line from 'components/Line/Line';
import { PATH } from 'constants/path';

export default {
  title: 'components/Toggle',
  component: Toggle,
  subComponents: {
    'Toggle.LabelLink': Toggle.LabelLink,
    'Toggle.BlueLabelLink': Toggle.BlueLabelLink,
    'Toggle.LabelText': Toggle.LabelText,
  },
};

function Template(args) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>토글</button>
      <br />
      {isOpen && <Toggle {...args} />}
    </>
  );
}

export const ProfileToggle = Template.bind({});
ProfileToggle.args = {
  isArrowMark: true,
  width: '220px',
  children: (
    <>
      <Toggle.LabelLink to={PATH.TRANSACTION}>
        <MoneyIcon />
        <Toggle.LabelText>10,000 원</Toggle.LabelText>
        <Toggle.BlueLabelLink>입출금 내역</Toggle.BlueLabelLink>
      </Toggle.LabelLink>
      <Toggle.LabelLink to={PATH.MYPAGE}>
        <MyPageIcon />
        <Toggle.LabelText>마이페이지</Toggle.LabelText>
      </Toggle.LabelLink>
      <Toggle.LabelLink to={PATH.PROFILE_EDIT}>
        <SettingIcon />
        <Toggle.LabelText>프로필 수정</Toggle.LabelText>
      </Toggle.LabelLink>
      <Line width="200" />
      <p style={{ textAlign: 'center' }}>로그아웃</p>
    </>
  ),
};

export const NarrowToggle = Template.bind({});
NarrowToggle.args = {
  children: (
    <>
      <Toggle.LabelLink to={PATH.MYPAGE}>
        <MoneyIcon />
        <Toggle.LabelText>수정</Toggle.LabelText>
      </Toggle.LabelLink>
      <Toggle.LabelLink to={PATH.MYPAGE}>
        <MoneyIcon />
        <Toggle.LabelText>삭제</Toggle.LabelText>
      </Toggle.LabelLink>
      <Toggle.LabelLink to={PATH.MYPAGE}>
        <MoneyIcon />
        <Toggle.LabelText>공유</Toggle.LabelText>
      </Toggle.LabelLink>
    </>
  ),
};
