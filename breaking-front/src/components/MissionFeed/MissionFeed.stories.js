import React from 'react';
import MissionFeed from 'components/MissionFeed/MissionFeed';
import {
  CLOSED_MISSION_FEED,
  NOT_OPEN_MISSION_FEED,
  OPEN_MISSION_FEED,
} from 'mocks/dummyData/mission';

export default {
  title: 'components/MissionFeed',
  component: MissionFeed,
};

const Template = (args) => {
  return <MissionFeed {...args} />;
};

export const NotOpenMissionFeed = Template.bind({});
NotOpenMissionFeed.args = {
  feedData: NOT_OPEN_MISSION_FEED,
};

export const OpenMissionFeed = Template.bind({});
OpenMissionFeed.args = {
  feedData: OPEN_MISSION_FEED,
};

export const ClosedMissionFeed = Template.bind({});
ClosedMissionFeed.args = {
  feedData: CLOSED_MISSION_FEED,
};
