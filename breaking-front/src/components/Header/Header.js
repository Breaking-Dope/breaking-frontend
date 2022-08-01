import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import Input from 'components/Input/Input';
import Line from 'components/Line/Line';
import Toggle from 'components/Toggle/Toggle';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'components/Header/Header.styles';
import { ReactComponent as LogoIcon } from 'assets/svg/small_logo.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { ReactComponent as DropDownIcon } from 'assets/svg/drop_down.svg';
import { ReactComponent as MoneyIcon } from 'assets/svg/money.svg';
import { ReactComponent as SettingIcon } from 'assets/svg/setting.svg';
import { ReactComponent as MyPageIcon } from 'assets/svg/mypage.svg';

export default function Header({ loginButtonClick, ...props }) {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const { isLogin, profileImgURL, userId } = useContext(UserInformationContext);
  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleToggle = () => {
    setIsOpenToggle((pre) => !pre);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Style.HeaderContainer isLogin={isLogin} {...props}>
      <Style.HeaderContent>
        <Style.SearchContent>
          <Style.LogoContainer to={PAGE_PATH.HOME}>
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
            onBlur={() => setIsOpenToggle(false)}
            tabIndex="0"
          >
            <ProfileImage size="small" src={profileImgURL} />
            <DropDownIcon />
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
                icon={<MoneyIcon />}
                label="10,000원"
                blueLabel="입출금내역"
                labelClick={() => navigate(PAGE_PATH.TRANSACTION)}
              />
              <Toggle.LabelLink
                icon={<MyPageIcon />}
                label="마이페이지"
                labelClick={() => navigate(PAGE_PATH.PROFILE(userId))}
              />
              <Toggle.LabelLink
                icon={<SettingIcon />}
                label="프로필 수정"
                labelClick={() => navigate(PAGE_PATH.PROFILE_EDIT)}
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
