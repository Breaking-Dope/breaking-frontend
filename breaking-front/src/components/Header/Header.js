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
          <Style.LogoContainer>
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
        <Style.ProfileContent
          onClick={handleToggle}
          onBlur={handleToggle}
          tabIndex="0"
        >
          {isLogin ? (
            <>
              <Style.ProfileImage size="small" src="" />
              <DownArrowIcon />
            </>
          ) : (
            <Style.LoginButton round="rounder" onClick={loginButtonClick}>
              로그인
            </Style.LoginButton>
          )}
        </Style.ProfileContent>
        <Style.ProfileToggle>
          {isOpenToggle && (
            <Toggle width="220px" isArrowMark={true}>
              <Toggle.LabelLink to={PATH.TRANSACTION}>
                <MoneyIcon />
                <Toggle.LabelText>10,000 원</Toggle.LabelText>
                <Toggle.BlueLabelLink>입출금 내역</Toggle.BlueLabelLink>
              </Toggle.LabelLink>
              <Toggle.LabelLink to={PATH.MYPAGE}>
                <MyPageIcon />
                <Toggle.LabelText>마이페이지</Toggle.LabelText>
              </Toggle.LabelLink>
              <Toggle.LabelLink to={PATH.PROFILE_EDIT}>
                <SettingIcon />
                <Toggle.LabelText>프로필 수정</Toggle.LabelText>
              </Toggle.LabelLink>
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
