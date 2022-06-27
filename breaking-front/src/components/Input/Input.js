import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './Input.styles';

export function Input({ status = 'default', icon, ...props }) {
  return (
    <Style.InputWrapper>
      {icon && <Style.Icon>{icon}</Style.Icon>}
      <Style.Input {...props} />
    </Style.InputWrapper>
  );
}

Input.propTypes = {
  status: PropTypes.oneOf('default', 'error', 'success'),
  icon: PropTypes.element,
};
