import React from 'react';
import Input from 'components/Input/Input';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    status: {
      options: ['default', 'error', 'success'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <Input {...args} />;
}

export const Default = Template.bind({});
Default.args = {};

export const Search = Template.bind({});
Search.args = {
  placeholder: '검색',
  icon: <SearchIcon />,
};
