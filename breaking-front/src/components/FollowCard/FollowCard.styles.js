import Button from 'components/Button/Button';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

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

export const Nickname = styled.span`
  font-size: 12px;
  cursor: pointer;
`;
export const StatusMessage = styled.p`
  margin-top: 5px;
  font-size: 8px;
  color: ${({ theme }) => theme.gray[700]};
`;

export const DeleteButton = styled(Button)`
  padding: 5px 10px;
  width: 60px;
  height: 20px;
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  text-align: center;
`;

export const Loading = styled(ReactLoading)`
  display: inline-block;
`;
