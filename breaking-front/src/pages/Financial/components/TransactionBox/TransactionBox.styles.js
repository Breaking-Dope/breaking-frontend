import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TransactionBox = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[50]};
  justify-content: space-between;
  align-items: center;
`;

export const TransactionType = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme, type }) =>
    type === 'deposit' || type === 'sell_post' ? theme.blue[900] : theme.black};
  font-size: 14px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
`;

export const TransactionInformation = styled.div`
  display: flex;
  height: 50px;
  margin-left: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TransactionTitle = styled.p``;

export const ItemLink = styled(Link)`
  font-size: 17px;
  font-weight: 700;
`;

export const TransactionDate = styled.p`
  color: ${({ theme }) => theme.gray[800]};
  font-size: 12px;
`;

export const TransactionStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  flex-grow: 1;
`;

export const Amount = styled.h3`
  color: ${({ theme, type }) =>
    type === 'deposit' || type === 'sell_post' ? theme.blue[900] : theme.black};
  font-size: 18px;
  font-weight: 700;
`;

export const Balance = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.gray[800]};
`;
