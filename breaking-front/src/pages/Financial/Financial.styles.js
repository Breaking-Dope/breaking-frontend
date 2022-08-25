import styled from 'styled-components';

export const Financial = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export const BalanceBox = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[200]};
  font-size: 18px;
  align-items: center;
`;

export const Balance = styled.p`
  margin-left: 30px;
  color: ${({ theme }) => theme.blue[900]};
  font-weight: 700;
`;
