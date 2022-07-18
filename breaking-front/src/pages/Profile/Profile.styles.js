import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 30px;
`;

export const UserInformation = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const NickName = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

export const StatusMessage = styled.h5`
  margin-bottom: 30px;
  font-size: 18px;
`;

export const Information = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  > * {
    margin-right: 20px;
    cursor: pointer;
  }
`;
export const PostInformation = styled.div``;
