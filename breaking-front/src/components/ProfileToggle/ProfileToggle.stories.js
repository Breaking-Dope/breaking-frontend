import React from 'react';
import ProfileToggle from 'components/ProfileToggle/ProfileToggle';

export default {
  title: 'components/ProfileToggle',
  component: ProfileToggle,
};

function Template(args) {
  return <ProfileToggle {...args} />;
}

export const DefaultProfileToggle = Template.bind({});
DefaultProfileToggle.args = {
  money: 0,
};

export const HaveMoneyProfileToggle = Template.bind({});
HaveMoneyProfileToggle.args = {
  money: 10000,
};
