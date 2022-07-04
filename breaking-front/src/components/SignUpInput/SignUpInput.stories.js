import React from 'react';
import SignUpInput from 'components/SignUpInput/SignUpInput';

export default {
  title: 'components/SignupInput',
  component: SignUpInput,
};

function Template(args) {
  return <SignUpInput {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  label: '닉네임',
  placeholder: '닉네임',
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: '닉네임',
  errorMessage: '이미 사용중인 닉네임입니다.',
  placeholder: '닉네임',
};
