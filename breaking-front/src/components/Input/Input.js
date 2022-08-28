import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Input/Input.styles';

const Input = forwardRef(({ status, icon, iconClick, ...props }, ref) => {
  return (
    <Style.InputContainer>
      <Style.Input ref={ref} {...props} />
      {icon && <Style.Icon onClick={iconClick}>{icon}</Style.Icon>}
    </Style.InputContainer>
  );
});

Input.propTypes = {
  status: PropTypes.oneOf(['default', 'error']),
  icon: PropTypes.element,
  iconClick: PropTypes.func,
};

Input.defaultProps = {
  status: 'default',
};

Input.displayName = 'Input';

export default Input;
