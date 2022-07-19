import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Button/Button.styles';

export default function Button({
  children,
  color,
  size,
  round,
  isSelected,
  ...props
}) {
  return (
    <Style.Button
      color={color}
      size={size}
      round={round}
      isSelected={isSelected}
      {...props}
    >
      {children}
    </Style.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'follow']),
  round: PropTypes.oneOf(['none', 'round', 'rounder']),
  isSelected: PropTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  round: 'round',
  isSelected: false,
};
