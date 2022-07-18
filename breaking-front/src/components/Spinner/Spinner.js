import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import * as Style from 'components/Spinner/Spinner.styles';
import theme from 'styles/theme';

export default function Spinner({ type, color, isLoading, children }) {
  return (
    <>
      {isLoading ? (
        <Style.Spinner>
          <ReactLoading type={type} color={color} />
        </Style.Spinner>
      ) : (
        children
      )}
    </>
  );
}

Spinner.propTypes = {
  type: PropTypes.oneOf([
    'blank',
    'balls',
    'bars',
    'bubbles',
    'cubes',
    'cylon',
    'spin',
    'spinningBubbles',
    'spokes',
  ]),
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

Spinner.defaultProps = {
  color: theme.blue[900],
};
