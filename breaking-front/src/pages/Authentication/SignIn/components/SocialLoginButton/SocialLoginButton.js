import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/Authentication/SignIn/components/SocialLoginButton/SocialLoginButton.styles';

export default function SocialLoginButton({ social, onClick }) {
  return <Style.LoginButton onClick={onClick} icon={social} />;
}

SocialLoginButton.propTypes = {
  social: PropTypes.oneOf(['kakao', 'google']).isRequired,
  onClick: PropTypes.func,
};
