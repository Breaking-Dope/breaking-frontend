import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/SignUpInput/SignUpInput.styles';

const SignUpInput = forwardRef(({ label, errorMessage, ...props }, ref) => {
  return (
    <Style.Label>
      <Style.LabelText>{label}</Style.LabelText>
      <Style.SignUpInput ref={ref} {...props} />
      {errorMessage && <Style.Message>{errorMessage}</Style.Message>}
    </Style.Label>
  );
});

SignUpInput.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

SignUpInput.displayName = 'SignUpInput';

export default SignUpInput;
