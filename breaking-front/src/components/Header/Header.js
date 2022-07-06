import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Header/Header.styles';
import { ReactComponent as LogoIcon } from 'assets/svg/small-logo.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { ReactComponent as DownArrowIcon } from 'assets/svg/down-arrow.svg';
import UserImage from 'components/UserImage/UserImage';

export default function Header({ isLogin, loginButtonClick, ...props }) {
  const [searchText, setSearchText] = useState('');

  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Style.HeaderContainer isLogin={isLogin} {...props}>
      <Style.HeaderContent>
        <Style.SearchContent>
          <Style.LogoContainer>
            <LogoIcon width="100%" height="100%" />
          </Style.LogoContainer>
          <Style.Form onSubmit={handleSubmit}>
            <Style.SearchInput
              icon={<SearchIcon />}
              onChange={onChange}
              value={searchText}
            />
          </Style.Form>
        </Style.SearchContent>
        <Style.UserContent>
          {isLogin ? (
            <>
              <UserImage size="small" style={{ marginRight: '10px' }} />
              <Style.UserDetailToggle>
                <DownArrowIcon />
              </Style.UserDetailToggle>
            </>
          ) : (
            <Style.LoginButton round="rounder" onClick={loginButtonClick}>
              로그인
            </Style.LoginButton>
          )}
        </Style.UserContent>
      </Style.HeaderContent>
    </Style.HeaderContainer>
  );
}

Header.propTypes = {
  isLogin: PropTypes.bool,
  loginButtonClick: PropTypes.func,
};
