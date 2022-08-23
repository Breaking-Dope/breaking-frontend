import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/NoData/NoData.styles';
import { ReactComponent as NoDataIcon } from 'assets/svg/no_data.svg';

/**
 * @param {string} message NoData에 사용될 메시지
 * @description 부모 태그에 position: relative 속성과 height가 필수로 들어가야 합니다.
 */
export default function NoData({ message }) {
  return (
    <Style.NoData>
      <NoDataIcon />
      <Style.Message>{message}</Style.Message>
    </Style.NoData>
  );
}

NoData.propTypes = {
  message: PropTypes.string,
};
