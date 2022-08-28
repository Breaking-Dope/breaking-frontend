import styled from 'styled-components';
import AppStore from 'assets/svg/app_store.svg';
import GooglePlayStore from 'assets/svg/google_play.svg';

const storeIcon = {
  appstore: AppStore,
  playstore: GooglePlayStore,
};

export const MobileDownloadButton = styled.button`
  width: 160px;
  height: 60px;
  padding: 10px;
  border: none;
  background-image: url(${({ icon }) => storeIcon[icon]});
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
