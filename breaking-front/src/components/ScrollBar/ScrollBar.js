import styled from 'styled-components';

export const ScrollBarY = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.gray[700]};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.gray[300]};
  }
`;

export const ScrollBarX = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.gray[700]};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.gray[300]};
  }
`;
