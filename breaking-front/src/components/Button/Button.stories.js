import React from 'react';
import Button from 'components/Button/Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'dark', 'danger'],
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
    isSelected: {
      control: { type: 'boolean' },
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

export const Selected = Template.bind({});
Selected.args = {
  children: '버튼',
  isSelected: true,
};

export const SoldOut = Template.bind({});
SoldOut.args = {
  children: '판매완료',
  size: 'small',
  color: 'danger',
  disabled: 'true',
};

export const Exclusive = Template.bind({});
Exclusive.args = {
  children: '단독',
  size: 'small',
  color: 'dark',
  disabled: 'true',
};

export const Sale = Template.bind({});
Sale.args = {
  children: '판매중',
  size: 'small',
  color: 'primary',
  disabled: 'true',
};
