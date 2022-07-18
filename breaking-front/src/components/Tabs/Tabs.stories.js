import React from 'react';
import Tabs from 'components/Tabs/Tabs';
import Button from 'components/Button/Button';

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
  return (
    <Tabs>
      <Tabs.TabList>
        <Tabs.TabItem>작성한 제보(3)</Tabs.TabItem>
        <Tabs.TabItem>구매한 제보(10)</Tabs.TabItem>
        <Tabs.TabItem>북마크한 제보(2)</Tabs.TabItem>
      </Tabs.TabList>
      <Tabs.TabPanel>
        <Button>컴포넌트도 잘들어가요</Button>
      </Tabs.TabPanel>
      <Tabs.TabPanel>2번째</Tabs.TabPanel>
      <Tabs.TabPanel>3번째</Tabs.TabPanel>
    </Tabs>
  );
};

export const OneTabs = () => {
  return (
    <Tabs>
      <Tabs.TabList>
        <Tabs.TabItem>작성한 제보(3)</Tabs.TabItem>
        {false}
      </Tabs.TabList>
      <Tabs.TabPanel>
        <Button>컴포넌트도 잘들어가요</Button>
      </Tabs.TabPanel>
    </Tabs>
  );
};
