import React, { useState } from 'react';
import Toggle from 'components/Toggle/Toggle';
import { ReactComponent as MoneyIcon } from 'assets/svg/money.svg';
import { ReactComponent as SettingIcon } from 'assets/svg/setting.svg';
import { ReactComponent as MyPageIcon } from 'assets/svg/mypage.svg';
import Line from 'components/Line/Line';
import { PAGE_PATH } from 'constants/path';
import styled from 'styled-components';

export default {
  title: 'components/Toggle',
  component: Toggle,
  subComponents: {
    'Toggle.LabelLink': Toggle.LabelLink,
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

const Logout = styled.p`
  text-align: center;
  margin: 10px;
  cursor: pointer;
`;

export const ProfileToggle = Template.bind({});
ProfileToggle.args = {
  isArrowMark: true,
  width: '220px',
  children: (
    <>
      <Toggle.LabelLink
        path={PAGE_PATH.TRANSACTION}
        icon={<MoneyIcon />}
        label="10,000원"
        blueLabel="입출금내역"
      />
      <Toggle.LabelLink
        path={PAGE_PATH.MYPAGE}
        icon={<MyPageIcon />}
        label="마이페이지"
      />
      <Toggle.LabelLink
        path={PAGE_PATH.PROFILE_EDIT}
        icon={<SettingIcon />}
        label="프로필 수정"
      />
      <Line width="200" />
      <Logout>로그아웃</Logout>
    </>
  ),
};

export const NarrowToggle = Template.bind({});
NarrowToggle.args = {
  children: (
    <>
      <Toggle.LabelLink
        path={PAGE_PATH.TRANSACTION}
        icon={<MoneyIcon />}
        label="수정"
      />
      <Toggle.LabelLink
        path={PAGE_PATH.MYPAGE}
        icon={<MyPageIcon />}
        label="삭제"
      />
      <Toggle.LabelLink
        path={PAGE_PATH.PROFILE_EDIT}
        icon={<SettingIcon />}
        label="공유"
      />
    </>
  ),
};
