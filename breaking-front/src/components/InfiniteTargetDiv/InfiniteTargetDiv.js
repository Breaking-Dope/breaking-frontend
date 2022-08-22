import React from 'react';
import * as Style from 'components/InfiniteTargetDiv/InfiniteTargetDiv.styles';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

const InfiniteTargetDiv = ({ targetRef, isFetching, height, ...props }) => {
  const theme = useTheme();
  return (
    <Style.TargetDiv ref={targetRef} height={height} {...props}>
      {isFetching && (
        <Style.Loading type="spin" color={theme.blue[900]} width="40px" />
      )}
    </Style.TargetDiv>
  );
};

InfiniteTargetDiv.propTypes = {
  targetRef: PropTypes.object,
  isFetching: PropTypes.bool,
  height: PropTypes.string,
};

InfiniteTargetDiv.defaultProps = {
  height: '100px',
};

export default InfiniteTargetDiv;
