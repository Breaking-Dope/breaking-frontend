import React from 'react';
import MobileDownloadButton from 'components/MobileDownloadButton/MobileDownloadButton';

export default {
  title: 'components/MobileDownloadButton',
  component: MobileDownloadButton,
  argTypes: {
    social: {
      options: ['appstore', 'playstore'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <MobileDownloadButton {...args} />;
}

export const AppStore = Template.bind({});
AppStore.args = {
  social: 'appstore',
};

export const PlayStore = Template.bind({});
PlayStore.args = {
  social: 'playstore',
};
