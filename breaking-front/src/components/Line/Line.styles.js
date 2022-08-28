import styled from 'styled-components';

export const Line = styled.hr`
  border: 0;
  background-color: ${({ theme }) => theme.gray[500]};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
