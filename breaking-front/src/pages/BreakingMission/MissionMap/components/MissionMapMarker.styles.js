import styled from 'styled-components';

export const FeedUI = styled.div`
  padding: 5px;
  border: solid 2px ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  font-size: 12px;
`;
