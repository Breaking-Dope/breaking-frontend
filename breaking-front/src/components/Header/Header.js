import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './Header.styles';
import { ReactComponent as LogoIcon } from 'assets/svg/small-logo.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { ReactComponent as DownArrowIcon } from 'assets/svg/down-arrow.svg';

export function Header({ isLogin, ...props }) {
  return (
    <Style.Header isLogin={isLogin} {...props}>
      <Style.LeftContainer>
        <Style.LogoContainer>
          <LogoIcon width="100%" height="100%" />
        </Style.LogoContainer>
        <Style.Form>
          <Style.SearchInput icon={<SearchIcon />} />
        </Style.Form>
      </Style.LeftContainer>
      <Style.RightContainer>
        {isLogin ? (
          <>
            <Style.UserImage />
            <Style.UserDetailToggle>
              <DownArrowIcon />
            </Style.UserDetailToggle>
          </>
        ) : (
          <Style.LoginButton round="rounder">로그인</Style.LoginButton>
        )}
      </Style.RightContainer>
    </Style.Header>
  );
}

Header.propTypes = {
  isLogin: PropTypes.bool,
};

Header.defaultProps = {};
