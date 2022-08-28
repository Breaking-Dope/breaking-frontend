import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import * as Style from 'components/Layout/Layout.styles';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const { Kakao } = window;
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  return (
    <>
      <Header />
      <Style.Container>{children}</Style.Container>
    </>
  );
}

Layout.propTypes = {
  isLogin: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
