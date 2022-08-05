import styled from 'styled-components';

export const ScrollToTop = styled.div`
  position: fixed;
  display: flex;
  bottom: 50px;
  right: 50px;
  z-index: 120;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  filter: drop-shadow(3px 3px 3px ${({ theme }) => theme.gray[300]});
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
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
