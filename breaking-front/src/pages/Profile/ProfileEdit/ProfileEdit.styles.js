import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  width: 600px;
  height: 50px;
  margin: 0 auto;
`;

export const WithdrawalToggle = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.gray[800]};
  font-size: 12px;
  cursor: pointer;
`;

export const ProfileWithdrawalForm = styled.form`
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    margin-top: 20px;
  }
`;

export const WithdrawalCaution = styled.div`
  color: ${({ theme }) => theme.gray[800]};
  font-size: 14px;
`;

export const Check = styled.label`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;
