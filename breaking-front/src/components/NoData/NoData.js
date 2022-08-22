import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/NoData/NoData.styles';
import { ReactComponent as NoDataIcon } from 'assets/svg/no_data.svg';

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
