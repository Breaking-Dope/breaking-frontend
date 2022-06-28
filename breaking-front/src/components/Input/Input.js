import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './Input.styles';

export function Input({ status = 'default', icon, ...props }) {
  return (
    <Style.InputContainer>
      {icon && <Style.Icon>{icon}</Style.Icon>}
      <Style.Input {...props} />
    </Style.InputContainer>
  );
}

Input.propTypes = {
  status: PropTypes.oneOf('default', 'error', 'success'),
  icon: PropTypes.element,
};
