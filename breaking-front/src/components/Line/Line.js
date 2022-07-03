import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Line/Line.style';

export default function Line({ width, height, ...props }) {
  return <Style.Line height={height} width={width} />;
}

Line.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Line.defaultProps = {
  width: '400px',
  height: '1px',
};
