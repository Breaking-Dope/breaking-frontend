import { default as styled } from 'styled-components';

export const UserResultLayout = styled.div`
  margin-top: 20px;
  padding: 30px;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.gray[50]};
  border-radius: 10px;
`;

export const UserResultTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
`;

export const UserInformationList = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 150px 150px 150px 150px 150px;
  justify-content: space-between;
`;

export const ViewAllButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
  width: 300px;
  font-size: 12px;
  height: 22px;
  background-color: ${({ theme }) => theme.blue[100]};
  border: none;
  border-radius: 10px;
`;

export const PostResultLayout = styled.div`
  margin: 20px 0px 100px 0px;
  padding: 20px 20px 60px 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.gray[50]};
  border-radius: 10px;
`;

export const PostResultTitle = styled.h3`
  padding: 10px;
  font-size: 16px;
`;

export const PostResultList = styled.div`
  display: grid;
  padding: 10px;
  margin-top: 10px;
  min-height: 50vh;
  grid-template-columns: 400px 400px;
  row-gap: 60px;
  justify-content: space-between;
`;
