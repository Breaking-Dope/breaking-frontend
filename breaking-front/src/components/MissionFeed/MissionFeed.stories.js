import React from 'react';
import MissionFeed from 'components/MissionFeed/MissionFeed';
import { MISSION_FEED } from 'mocks/dummyData/mission';

export default {
  title: 'components/MissionFeed',
  component: MissionFeed,
};

const Template = (args) => {
  return <MissionFeed feedData={MISSION_FEED} {...args} />;
};

export const ItIsMyFeed = Template.bind({});
ItIsMyFeed.args = {};
