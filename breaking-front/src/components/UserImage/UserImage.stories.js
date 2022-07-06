import React from 'react';
import UserImage from 'components/UserImage/UserImage';
import User1 from 'assets/img/breaking-logo.png';

export default {
  title: 'components/UserImage',
  component: UserImage,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'xlarge'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <UserImage {...args} />;
}

export const SmallImage = Template.bind({});
SmallImage.args = {
  size: 'small',
};
export const MediumImage = Template.bind({});
MediumImage.args = {
  size: 'medium',
};

export const LargeImage = Template.bind({});
LargeImage.args = {
  size: 'large',
};

export const XlargeImage = Template.bind({});
XlargeImage.args = {
  size: 'xlarge',
};

export const User = Template.bind({});
User.args = {
  size: 'large',
  src: `${User1}`,
};
