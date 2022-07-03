import React from 'react';
import Line from 'components/Line/Line';

export default {
  title: 'components/Line',
  component: Line,
};

function Template(args) {
  return <Line {...args} />;
}

export const DefaultLine = Template.bind({});
DefaultLine.args = {
  width: '400px',
  height: '1px',
};
