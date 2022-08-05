import styled from 'styled-components';

export const ScrollToTop = styled.div`
  position: fixed;
  display: flex;
  bottom: 50px;
  right: 50px;
  z-index: 120;
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: none;
    background-color: ${({ theme }) => theme.blue[900]};
    svg > path {
      fill: ${({ theme }) => theme.white};
    }
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;
