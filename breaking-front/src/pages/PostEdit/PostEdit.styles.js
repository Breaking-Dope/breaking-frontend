import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  margin: 60px auto;
`;

export const UploadTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
`;

export const Message = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;

export const UploadForm = styled.div`
  display: flex;
  height: 200px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[50]};
  justify-content: center;
  align-items: center;
`;
