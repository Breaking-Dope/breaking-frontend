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

function LabelLink({ labelClick, label, icon }) {
  return (
    <Style.LabelLink>
      <Style.Label onClick={labelClick}>
        {icon}
        <Style.LabelText>{label}</Style.LabelText>
      </Style.Label>
    </Style.LabelLink>
  );
}

Toggle.LabelLink = LabelLink;

Toggle.propTypes = {
  isArrowMark: PropTypes.bool,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Toggle.defaultProps = {
  isArrowMark: false,
  width: '120px',
};

LabelLink.propTypes = {
  labelClick: PropTypes.func,
  icon: PropTypes.node,
  label: PropTypes.string,
};
