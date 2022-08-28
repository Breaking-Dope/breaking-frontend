import React from 'react';
import FollowCard from 'components/FollowCard/FollowCard';

export default {
  title: 'components/FollowCard',
  component: FollowCard,
};

function Template(args) {
  return <FollowCard {...args} />;
}

export const DefaultFollowCard = Template.bind({});
DefaultFollowCard.args = {
  profileData: {
    nickname: '주기',
    statusMsg: '안녕하세요~!',
  },
  isPermission: true,
};
