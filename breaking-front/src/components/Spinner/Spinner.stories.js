import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'components/Spinner',
  component: Spinner,
  argTypes: {
    type: {
      options: [
        'balls',
        'bars',
        'bubbles',
        'cubes',
        'cylon',
        'spin',
        'spinningBubbles',
        'spokes',
      ],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <Spinner {...args} />;
}

export const BarsSpinner = Template.bind({});
BarsSpinner.args = {
  type: 'bars',
  isLoading: true,
};
