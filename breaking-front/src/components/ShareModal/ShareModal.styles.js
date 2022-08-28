import styled from 'styled-components';

export const ShareIcons = styled.div`
  display: flex;
  margin: 50px 0px 30px;
  justify-content: center;
`;

export const KakaoShareButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const FacebookShareButton = styled(KakaoShareButton)`
  img {
    width: 68px;
    height: 69px;
  }
`;

export const TwitterShareButton = styled(FacebookShareButton)``;

export const Clipboard = styled.div`
  display: flex;
  justify-content: center;
`;

export const ClipboardInput = styled.input`
  padding: 5px;
  border-width: 1px 0 1px 1px;
`;

export const ClipboardButton = styled.button`
  padding: 5px;
  cursor: pointer;
`;
