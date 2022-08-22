import styled from 'styled-components';

export const SearchHashtagLayout = styled.div`
  padding: 20px 30px 60px;
`;

export const PostResultList = styled.div`
  display: grid;
  margin-top: 20px;
  min-height: 50vh;
  grid-template-columns: 400px 400px;
  row-gap: 60px;
  justify-content: space-between;
`;

export const SearchHashtagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const Hashtag = styled.h3`
  font-size: 20px;
  font-weight: bold;
  ::after {
    content: ' (으)로 검색한 결과입니다.';
    font-size: 16px;
    font-weight: 300;
  }
`;
