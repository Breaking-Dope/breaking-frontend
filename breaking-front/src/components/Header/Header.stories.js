import React from 'react';
import { Header } from './Header';

export default {
  title: 'components/Header',
  component: Header,
  argTypes: {},
};

function Template(args) {
  return <Header {...args} />;
}

export const Default = Template.bind({});
Default.args = { isLogin: false };

export const User = Template.bind({});
User.args = { isLogin: true };
