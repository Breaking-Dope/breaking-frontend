import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/ProfileSettingForm/ProfileSettingInput.styles';

const ProfileSettingInput = forwardRef(
  ({ label, isSuccess, errorMessage, ...props }, ref) => {
    return (
      <Style.Label>
        <Style.LabelText>{label}</Style.LabelText>
        <Style.ProfileSettingInput
          ref={ref}
          isSuccess={isSuccess}
          isError={!!errorMessage}
          {...props}
        />
        {errorMessage && <Style.Message>{errorMessage}</Style.Message>}
      </Style.Label>
    );
  }
);

ProfileSettingInput.propTypes = {
  label: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool,
  errorMessage: PropTypes.string,
};

ProfileSettingInput.displayName = 'ProfileSettingInput';

export default ProfileSettingInput;
