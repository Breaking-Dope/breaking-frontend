import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import useLogout from 'hooks/queries/useLogout';
import Input from 'components/Input/Input';
import Line from 'components/Line/Line';
import Toggle from 'components/Toggle/Toggle';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'components/Header/Header.styles';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import { ReactComponent as LogoIcon } from 'assets/svg/small_logo.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { ReactComponent as DropDownIcon } from 'assets/svg/drop_down.svg';
import { ReactComponent as MoneyIcon } from 'assets/svg/money.svg';
import { ReactComponent as SettingIcon } from 'assets/svg/setting.svg';
import { ReactComponent as MyPageIcon } from 'assets/svg/mypage.svg';

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userData = useContext(UserInformationContext);
  const { refetch } = useLogout();

  const [searchText, setSearchText] = useState('');
  const [isOpenToggle, setIsOpenToggle] = useState(false);

  const logoClick = () => {
    if (pathname === '/') window.scrollTo(0, 0);
  };

  const loginButtonClick = () => {
    navigate(PAGE_PATH.LOGIN);
  };

  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleToggle = () => {
    setIsOpenToggle((pre) => !pre);
  };

  const labelClick = (path) => {
    navigate(path);
    setIsOpenToggle(false);
  };

  const logoutClick = () => {
    let logoutConfirm = window.confirm('로그아웃 하시겠습니까?');
    logoutConfirm && refetch();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Style.HeaderContainer>
      <Style.HeaderContent>
        <Style.SearchContent>
          <Style.LogoContainer to={PAGE_PATH.HOME} onClick={logoClick}>
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
        {userData?.isLogin ? (
          <Style.ProfileContent
            onClick={handleToggle}
            onBlur={() => setIsOpenToggle(false)}
            tabIndex="0"
          >
            <ProfileImage
              size="small"
              src={ImageUrlConverter(userData?.profileImgURL)}
            />
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
              <Style.BlueLabel onClick={() => labelClick(PAGE_PATH.FINANCIAL)}>
                입출금내역
              </Style.BlueLabel>
              <Toggle.LabelLink
                icon={<MoneyIcon />}
                label={`${userData?.balance?.toLocaleString('ko-KR')}원`}
                labelClick={() => labelClick(PAGE_PATH.FINANCIAL)}
              />
              <Toggle.LabelLink
                icon={<MyPageIcon />}
                label="마이페이지"
                labelClick={() =>
                  labelClick(PAGE_PATH.PROFILE(userData?.userId))
                }
              />
              <Toggle.LabelLink
                icon={<SettingIcon />}
                label="프로필 수정"
                labelClick={() => labelClick(PAGE_PATH.PROFILE_EDIT)}
              />
              <Line width="200" />
              <Style.Logout onClick={logoutClick}>로그아웃</Style.Logout>
            </Toggle>
          )}
        </Style.ProfileToggle>
      </Style.HeaderContent>
    </Style.HeaderContainer>
  );
}
