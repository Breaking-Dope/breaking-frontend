import styled from 'styled-components';

export const MainFeed = styled.div`
  padding: 40px 30px 60px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ShowSoldFeed = styled.label`
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-size: 12px;
`;

export const FeedUploadButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.gray[500]};
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

export const Feeds = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  row-gap: 60px;
  justify-content: space-between;
`;
