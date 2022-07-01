import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/SocialLoginButton/SocialLoginButton.styles';
import { ReactComponent as KakaoLoginIcon } from 'assets/svg/kakao_login.svg';
import { ReactComponent as GoogleLoginIcon } from 'assets/svg/google_login.svg';

const socialIcon = {
  kakao: <KakaoLoginIcon />,
  google: <GoogleLoginIcon />,
};

export default function SocialLoginButton({ social, onClick }) {
  return (
    <Style.LoginButton onClick={onClick}>
      {socialIcon[social]}
    </Style.LoginButton>
  );
}

SocialLoginButton.propTypes = {
  social: PropTypes.oneOf(['kakao', 'google']).isRequired,
  onClick: PropTypes.func,
};
