import Button from 'components/Button/Button';
import styled from 'styled-components';

export const TransactionForm = styled.form`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AmountContainer = styled.div`
  display: flex;
  width: 330px;
  margin-bottom: 100px;
  align-items: center;
  p {
    padding: 10px;
    border-right: 1px solid ${({ theme }) => theme.gray[500]};
    font-weight: 700;
  }
`;

export const AmountInput = styled.input`
  width: 180px;
  margin-left: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
  font-size: 16px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const SubmitButton = styled(Button)`
  display: block;
  width: 170px;
  margin: 0 auto 50px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue[500]};
`;
