import React from 'react';
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

function Template(args) {
  return <Tabs {...args} />;
}

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  children: (
    <>
      <Tabs.TabList>
        <Tabs.TabItem isActive={true}>작성한 제보(3)</Tabs.TabItem>
        <Tabs.TabItem>구매한 제보(10)</Tabs.TabItem>
      </Tabs.TabList>
      <Tabs.TabPanel></Tabs.TabPanel>
    </>
  ),
};
