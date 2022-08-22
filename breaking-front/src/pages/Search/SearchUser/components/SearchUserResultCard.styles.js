import styled from 'styled-components';

export const ResultCard = styled.div`
  display: flex;
  padding: 20px;
  width: 700px;
  height: 140px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[50]};
  align-items: center;
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-left: 30px;
  > * {
    margin-top: 5px;
  }
`;

export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNickName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const UserEmail = styled.h2`
  margin-left: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.gray[700]};
`;

export const UserFollowers = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.gray[700]};
`;

export const UserStatusMSG = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;
