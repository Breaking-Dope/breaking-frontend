import React, { useContext } from 'react';
import FollowButton from 'components/FollowButton/FollowButton';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { useEffect } from 'react';

export default {
  title: 'components/FollowButton',
  component: FollowButton,
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'white'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  const { setUserInformation } = useContext(UserInformationContext);
  useEffect(() => {
    setUserInformation({
      isLogin: true,
    });
  }, []);

  return <FollowButton {...args} />;
}

export const MediumFollow = Template.bind({});
MediumFollow.args = {
  isFollowing: false,
};

export const MediumUnFollow = Template.bind({});
MediumUnFollow.args = {
  isFollowing: true,
};

export const SmallFollow = Template.bind({});
SmallFollow.args = {
  size: 'small',
  isFollowing: false,
};

export const SmallUnFollow = Template.bind({});
SmallUnFollow.args = {
  size: 'small',
  isFollowing: true,
};

export const SmallUnFollowWhite = Template.bind({});
SmallUnFollowWhite.args = {
  size: 'small',
  isFollowing: true,
  color: 'white',
};

const useFollowMocking = {
  isLoading: true,
};

const useUnFollowMocking = {
  isLoading: true,
};

export const SmallFollowLoading = Template.bind({});
SmallFollowLoading.args = {
  size: 'small',
  isFollowing: true,
  useFollow: useFollowMocking,
  useUnFollow: useUnFollowMocking,
};

export const MediumFollowLoading = Template.bind({});
MediumFollowLoading.args = {
  size: 'medium',
  isFollowing: true,
  useFollow: useFollowMocking,
  useUnFollow: useUnFollowMocking,
};
