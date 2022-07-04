import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/MobileDownloadButton/MobileDownload.styles';

export default function MobileDownloadButton({ social, onClick }) {
  return <Style.MobileDownloadButton onClick={onClick} icon={social} />;
}

MobileDownloadButton.propTypes = {
  social: PropTypes.oneOf(['appstore', 'playstore']).isRequired,
  onClick: PropTypes.func,
};
