import styled from 'styled-components';

export const Line = styled.hr`
  border: 0;
  background-color: #bababa;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
