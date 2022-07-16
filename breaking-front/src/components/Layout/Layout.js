import React from 'react';
import * as Style from 'components/Layout/Layout.styles';
import Header from 'components/Header/Header';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';

export default function Layout({ isLogin, children }) {
  const navigate = useNavigate();
  const moveLoginPage = () => navigate(PAGE_PATH.LOGIN);
  return (
    <>
      <Header isLogin={isLogin} loginButtonClick={moveLoginPage} />
      <Style.Container>{children}</Style.Container>
    </>
  );
}

Layout.propTypes = {
  isLogin: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
