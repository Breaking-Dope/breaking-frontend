import React from 'react';
import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    round: {
      options: ['none', 'round', 'rounder'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <Button {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  children: '버튼',
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: '버튼',
  color: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  children: '버튼',
  size: 'small',
};
export const Large = Template.bind({});
Large.args = {
  children: '버튼',
  size: 'large',
};

export const NoRound = Template.bind({});
NoRound.args = {
  children: '버튼',
  round: 'none',
};
export const Rounder = Template.bind({});
Rounder.args = {
  children: '버튼',
  round: 'rounder',
};
