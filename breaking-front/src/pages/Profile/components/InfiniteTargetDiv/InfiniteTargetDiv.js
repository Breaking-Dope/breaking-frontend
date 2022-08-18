import React from 'react';
import * as Style from 'pages/Profile/components/InfiniteTargetDiv/InfiniteTargetDiv.styles';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

const InfiniteTargetDiv = ({ targetRef, isFetching }) => {
  const theme = useTheme();
  return (
    <Style.TargetDiv ref={targetRef}>
      {isFetching && (
        <Style.Loading type="spin" color={theme.blue[900]} width="40px" />
      )}
    </Style.TargetDiv>
  );
};

InfiniteTargetDiv.propTypes = {
  targetRef: PropTypes.object,
  isFetching: PropTypes.bool,
};

export default InfiniteTargetDiv;
