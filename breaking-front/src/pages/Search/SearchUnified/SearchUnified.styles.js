import { default as styled } from 'styled-components';

export const UserResultLayout = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[50]};
  text-align: center;
`;

export const UserResultTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  text-align: left;
`;

export const UserInformationList = styled.div`
  display: grid;
  margin-top: 20px;
  text-align: left;
  grid-template-columns: 150px 150px 150px 150px 150px;
  justify-content: space-between;
`;

export const ViewAllButton = styled.button`
  width: 250px;
  height: 30px;
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[100]};
  font-size: 12px;
  cursor: pointer;
`;

export const PostResultLayout = styled.div`
  width: 100%;
  margin: 20px 0px 100px 0px;
  padding: 20px 20px 30px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[50]};
  text-align: center;
`;

export const PostResultTitle = styled.h3`
  padding: 10px;
  font-size: 16px;
  text-align: left;
`;

export const PostResultList = styled.div`
  display: grid;
  min-height: 50vh;
  padding: 10px;
  margin-top: 10px;
  text-align: left;
  grid-template-columns: 400px 400px;
  row-gap: 60px;
  justify-content: space-between;
`;
