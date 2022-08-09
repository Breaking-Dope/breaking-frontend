import { ScrollBarY } from 'components/ScrollBar/ScrollBar';
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
  height: 500px;
  padding: 25px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.blue[900]};
  font-weight: 700;
  text-align: center;
`;

export const GridContent = styled(ScrollBarY)`
  display: grid;
  height: 400px;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px 20px;
  align-content: start;
  justify-items: center;
`;

export const NoGridContent = styled(ScrollBarY)`
  width: 850px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Div = styled.div`
  width: 400px;
  height: 80px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[300]};
`;
