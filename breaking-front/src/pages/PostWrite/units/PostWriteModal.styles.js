import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.opacityBlack};
  justify-content: center;
  align-items: center;
  z-index: 110;
`;

export const Modal = styled.div`
  position: relative;
  width: 950px;
  height: 700px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const HambugerButton = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 60px;
`;
