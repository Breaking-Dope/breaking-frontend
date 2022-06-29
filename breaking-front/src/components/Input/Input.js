import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './Input.styles';

export default function Input({ status = 'default', icon, ...props }) {
  return (
    <Style.InputContainer>
      <Style.Input {...props} />
      {icon && <Style.Icon>{icon}</Style.Icon>}
    </Style.InputContainer>
  );
}

Input.propTypes = {
  status: PropTypes.oneOf(['default', 'error']),
  icon: PropTypes.element,
};
