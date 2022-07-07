import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Toggle/Toggle.styles';

export default function Toggle({ isArrowMark, width, children }) {
  return (
    <Style.ToggleContainer>
      {isArrowMark && <Style.ArrowMark />}
      <Style.Toggle width={width}>{children}</Style.Toggle>
    </Style.ToggleContainer>
  );
}

Toggle.LabelLink = Style.LabelLink;
Toggle.BlueLabelLink = Style.BlueLabelLink;
Toggle.LabelText = Style.LabelText;

Toggle.propTypes = {
  isArrowMark: PropTypes.bool,
  width: PropTypes.string,
  children: PropTypes.node,
};

Toggle.defaultProps = {
  isArrowMark: false,
  width: '120px',
};
