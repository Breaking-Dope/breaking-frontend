import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './Header.styles';
import { ReactComponent as LogoIcon } from 'assets/svg/small-logo.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { ReactComponent as DownArrowIcon } from 'assets/svg/down-arrow.svg';

export function Header({ isLogin, ...props }) {
  return (
    <Style.HeaderContainer isLogin={isLogin} {...props}>
      <Style.HeaderContent>
        <Style.SearchContent>
          <Style.LogoContainer>
            <LogoIcon width="100%" height="100%" />
          </Style.LogoContainer>
          <Style.Form>
            <Style.SearchInput icon={<SearchIcon />} />
          </Style.Form>
        </Style.SearchContent>
        <Style.UserContent>
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
        </Style.UserContent>
      </Style.HeaderContent>
    </Style.HeaderContainer>
  );
}

Header.propTypes = {
  isLogin: PropTypes.bool,
};

Header.defaultProps = {};
