import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Input/Input.styles';

function Input({ status, icon, ...props }, ref) {
  return (
    <Style.InputContainer>
      <Style.Input ref={ref} {...props} />
      {icon && <Style.Icon>{icon}</Style.Icon>}
    </Style.InputContainer>
  );
}

Input.propTypes = {
  status: PropTypes.oneOf(['default', 'error']),
  icon: PropTypes.element,
};

Input.defaultProps = {
  status: 'default',
};

export default forwardRef(Input);
