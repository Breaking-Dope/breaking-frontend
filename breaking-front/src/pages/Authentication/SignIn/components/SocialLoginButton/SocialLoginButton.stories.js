import React from 'react';
import SocialLoginButton from 'pages/Authentication/SignIn/components/SocialLoginButton/SocialLoginButton';

export default {
  title: 'components/SocialLoginButton',
  component: SocialLoginButton,
  argTypes: {
    social: {
      options: ['google', 'kakao'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <SocialLoginButton {...args} />;
}

export const KakaoLogin = Template.bind({});
KakaoLogin.args = {
  social: 'kakao',
};

export const GoogleLogin = Template.bind({});
GoogleLogin.args = {
  social: 'google',
};
