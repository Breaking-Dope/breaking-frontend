import React from 'react';
import * as Style from 'components/ScrollToTop/ScrollToTop.styles';
import { ReactComponent as TopIcon } from 'assets/svg/top.svg';

const ScrollToTop = () => {
  const scrollToTopClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Style.ScrollToTop onClick={scrollToTopClick}>
      <TopIcon />
    </Style.ScrollToTop>
  );
};

export default ScrollToTop;
