import React, { useContext } from 'react';
import * as Style from 'components/Layout/Layout.styles';
import Header from 'components/Header/Header';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import { UserInformationContext } from 'providers/UserInformationProvider';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const { isLogin, profileImgURL, userId } = useContext(UserInformationContext);

  const moveLoginPage = () => navigate(PAGE_PATH.LOGIN);
  return (
    <>
      <Header
        isLogin={isLogin}
        profileImgURL={profileImgURL}
        userId={userId}
        loginButtonClick={moveLoginPage}
      />
      <Style.Container>{children}</Style.Container>
    </>
  );
}

Layout.propTypes = {
  isLogin: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
