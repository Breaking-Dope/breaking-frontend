import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Line from 'components/Line/Line';
import Toggle from 'components/Toggle/Toggle';
import { PATH } from 'constants/path';
import * as Style from 'components/Header/Header.styles';
import { ReactComponent as LogoIcon } from 'assets/svg/small-logo.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { ReactComponent as DownArrowIcon } from 'assets/svg/down-arrow.svg';
import { ReactComponent as MoneyIcon } from 'assets/svg/money.svg';
import { ReactComponent as SettingIcon } from 'assets/svg/setting.svg';
import { ReactComponent as MyPageIcon } from 'assets/svg/mypage.svg';

export default function Header({ isLogin, loginButtonClick, ...props }) {
  const [searchText, setSearchText] = useState('');
  const [isOpenToggle, setIsOpenToggle] = useState(false);

  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleToggle = () => {
    setIsOpenToggle(!isOpenToggle);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Style.HeaderContainer isLogin={isLogin} {...props}>
      <Style.HeaderContent>
        <Style.SearchContent>
          <Style.LogoContainer to={PATH.HOME}>
            <LogoIcon width="100%" height="100%" />
          </Style.LogoContainer>
          <Style.Form onSubmit={handleSubmit}>
            <Input
              icon={<SearchIcon />}
              onChange={onChange}
              value={searchText}
            />
          </Style.Form>
        </Style.SearchContent>
        {isLogin ? (
          <Style.ProfileContent
            onClick={handleToggle}
            onBlur={handleToggle}
            tabIndex="0"
          >
            <Style.ProfileImage size="small" src="" />
            <DownArrowIcon />
          </Style.ProfileContent>
        ) : (
          <Style.ProfileContent>
            <Style.LoginButton round="rounder" onClick={loginButtonClick}>
              로그인
            </Style.LoginButton>
          </Style.ProfileContent>
        )}

        <Style.ProfileToggle onMouseDown={(event) => event.preventDefault()}>
          {isOpenToggle && (
            <Toggle width="220px" isArrowMark={true}>
              <Toggle.LabelLink
                path={PATH.TRANSACTION}
                icon={<MoneyIcon />}
                label="10,000원"
                blueLabel="입출금내역"
              />
              <Toggle.LabelLink
                path={PATH.MYPAGE}
                icon={<MyPageIcon />}
                label="마이페이지"
              />
              <Toggle.LabelLink
                path={PATH.PROFILE_EDIT}
                icon={<SettingIcon />}
                label="프로필 수정"
              />
              <Line width="200" />
              <Style.Logout>로그아웃</Style.Logout>
            </Toggle>
          )}
        </Style.ProfileToggle>
      </Style.HeaderContent>
    </Style.HeaderContainer>
  );
}

Header.propTypes = {
  isLogin: PropTypes.bool,
  loginButtonClick: PropTypes.func,
};
