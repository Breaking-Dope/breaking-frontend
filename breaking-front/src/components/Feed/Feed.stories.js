import React from 'react';
import Feed from 'components/Feed/Feed';
import { NORMAL_CONTENT } from 'mocks/dummyData/contents';

export default {
  title: 'components/Feed',
  component: Feed,
};

const Template = (args) => {
  return <Feed feedData={NORMAL_CONTENT} {...args} />;
};

export const ItIsMyFeed = Template.bind({});
ItIsMyFeed.args = {
  userId: 123,
};

export const ItIsNotMyFeed = Template.bind({});
ItIsNotMyFeed.args = {
  userId: 124,
};
