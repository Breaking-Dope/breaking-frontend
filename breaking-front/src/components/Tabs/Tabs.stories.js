import React, { useState } from 'react';
import Tabs from 'components/Tabs/Tabs';

export default {
  title: 'components/Tabs',
  component: Tabs,
  subComponents: {
    'Tabs.TabList': Tabs.TabList,
    'Tabs.TabItem': Tabs.TabItem,
    'Tabs.TabPanel': Tabs.TabPanel,
  },
};

export const DefaultTabs = () => {
  const [active, setActive] = useState('0');
  return (
    <Tabs>
      <Tabs.TabList>
        <Tabs.TabItem isActive={active === '0'} onClick={() => setActive('0')}>
          작성한 제보(3)
        </Tabs.TabItem>
        <Tabs.TabItem isActive={active === '1'} onClick={() => setActive('1')}>
          구매한 제보(10)
        </Tabs.TabItem>
        <Tabs.TabItem isActive={active === '2'} onClick={() => setActive('2')}>
          북마크한 제보(2)
        </Tabs.TabItem>
      </Tabs.TabList>
      <Tabs.TabPanel isActive={active === '0'}>1번째</Tabs.TabPanel>
      <Tabs.TabPanel isActive={active === '1'}>2번째</Tabs.TabPanel>
      <Tabs.TabPanel isActive={active === '2'}>3번째</Tabs.TabPanel>
    </Tabs>
  );
};
