import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/MobileDownloadButton/MobileDownload.styles';
import { ReactComponent as AppStore } from 'assets/svg/app_store.svg';
import { ReactComponent as GooglePlayStore } from 'assets/svg/google_play.svg';

const storeIcon = {
  appstore: <AppStore />,
  playstore: <GooglePlayStore />,
};

export default function MobileDownloadButton({ social, onClick }) {
  return (
    <Style.MobileDownloadButton onClick={onClick}>
      {storeIcon[social]}
    </Style.MobileDownloadButton>
  );
}

MobileDownloadButton.propTypes = {
  social: PropTypes.oneOf(['appstore', 'playstore']).isRequired,
  onClick: PropTypes.func,
};
