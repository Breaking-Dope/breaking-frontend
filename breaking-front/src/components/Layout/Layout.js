import React from 'react';
import * as Style from 'components/Layout/Layout.styles';
import Header from 'components/Header/Header';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Style.Container>{children}</Style.Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
