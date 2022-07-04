import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/SignUpInput/SignUpInput.styles';

export default function SignUpInput({ label, errorMessage, ...props }) {
  return (
    <Style.Label>
      <Style.LabelText>{label}</Style.LabelText>
      <Style.SignUpInput {...props} />
      {errorMessage && <Style.Message>{errorMessage}</Style.Message>}
    </Style.Label>
  );
}

SignUpInput.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
