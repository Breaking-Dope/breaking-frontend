import ReactLoading from 'react-loading';
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
  margin-left: 15px;
  font-size: 12px;
  align-items: center;
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
  min-height: 100vh;
  grid-template-columns: 400px 400px;
  row-gap: 60px;
  justify-content: space-between;
`;

export const TargetDiv = styled.div`
  position: relative;
  height: 100px;
`;

export const Loading = styled(ReactLoading)`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
`;
