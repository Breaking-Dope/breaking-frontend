import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 30px;
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 30px;
`;
export const NickName = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

export const StatusMessage = styled.h5`
  font-size: 18px;
  margin-bottom: 30px;
`;

export const Information = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  > * {
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const WritedPost = styled.div``;

export const Follower = styled.div``;

export const Following = styled.div``;
