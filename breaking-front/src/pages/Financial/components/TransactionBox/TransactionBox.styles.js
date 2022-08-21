import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TransactionBox = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[300]};
  justify-content: space-between;
`;

export const TransactionInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TransactionType = styled.p``;

export const ItemLink = styled(Link)`
  font-size: 17px;
  font-weight: 700;
`;

export const TransactionDate = styled.p`
  font-size: 14px;
`;

export const TransactionStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;

export const Amount = styled.h3`
  color: ${({ theme, type }) =>
    type === 'deposit' || type === 'sell_post'
      ? theme.blue[900]
      : theme.red[500]};
  font-size: 18px;
  font-weight: 700;
`;

export const Balance = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.gray[800]};
`;
