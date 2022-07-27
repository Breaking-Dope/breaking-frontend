import styled from 'styled-components';

export const MediaModalOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 110;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.opacityBlack};
  justify-content: center;
  align-items: center;
  cursor: zoom-out;
`;

export const MediaModal = styled.div`
  position: relative;
  width: 80vh;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Media = styled.img`
  width: 100%;
`;
