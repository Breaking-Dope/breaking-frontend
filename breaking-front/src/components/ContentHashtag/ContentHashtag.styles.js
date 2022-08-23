import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const Hashtag = styled(Link)`
  color: ${({ theme }) => theme.blue[900]};
`;
