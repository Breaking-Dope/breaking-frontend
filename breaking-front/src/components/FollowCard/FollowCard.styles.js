import Button from 'components/Button/Button';
import styled from 'styled-components';

export const FollowCard = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 80px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[50]};
`;

export const Container = styled.div`
  width: 250px;
  margin-left: 20px;
`;

export const Nickname = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  cursor: pointer;
`;
export const StatusMessage = styled.p`
  font-size: 8px;
  color: ${({ theme }) => theme.gray[700]};
`;

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.white};
  padding: 5px 10px;
`;
