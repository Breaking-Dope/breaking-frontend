import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Line/Line.styles';

export default function Line({ width, height, ...props }) {
  return <Style.Line height={height} width={width} {...props} />;
}

Line.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Line.defaultProps = {
  width: '400px',
  height: '1px',
};
