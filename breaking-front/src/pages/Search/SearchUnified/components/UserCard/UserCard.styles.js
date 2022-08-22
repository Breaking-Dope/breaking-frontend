import styled from 'styled-components';

export const UserInformationContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 150px;
  height: 170px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[50]};
  text-align: center;
  flex-direction: column;
  align-items: center;
  > * {
    margin-top: 10px;
  }
`;
export const UserName = styled.div`
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;
export const UserStatusMsg = styled.div`
  width: 100%;
  font-size: 10px;
  color: ${({ theme }) => theme.gray[700]};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
