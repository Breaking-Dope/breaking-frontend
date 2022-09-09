import styled from 'styled-components';

export const MainFeed = styled.div`
  padding: 40px 30px 60px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const FeedUploadButton = styled.button`
  display: flex;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.gray[500]};
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
`;

export const Feeds = styled.div`
  display: grid;
  min-height: 50vh;
  grid-template-columns: 400px 400px;
  row-gap: 60px;
  justify-content: space-between;
`;
