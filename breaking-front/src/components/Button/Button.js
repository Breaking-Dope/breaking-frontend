import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './Button.styles';

export function Button({ children, color, size, round, ...props }) {
  return (
    <Style.Button color={color} size={size} round={round} {...props}>
      {children}
    </Style.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  round: PropTypes.oneOf(['none', 'round', 'rounder']),
  onclick: PropTypes.func,
};

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  round: 'round',
  onClick: undefined,
};
