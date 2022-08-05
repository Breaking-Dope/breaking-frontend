import React from 'react';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

export default {
  title: 'components/ScrollToTop',
  component: ScrollToTop,
};

function Template(args) {
  return <ScrollToTop {...args} />;
}

export const ScrollToTopUI = Template.bind({});
ScrollToTopUI.args = {};
