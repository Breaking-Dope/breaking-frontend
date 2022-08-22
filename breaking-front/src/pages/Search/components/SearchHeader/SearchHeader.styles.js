import {
  Tab,
  TabList,
  TabPanel,
  TabsContainer,
} from 'components/Tabs/Tabs.styles';
import { default as styled } from 'styled-components';

export const SearchTabs = styled(TabsContainer)`
  margin-top: 30px;
`;

export const SearchTabList = styled(TabList)``;

export const SearchTabItem = styled(Tab)`
  font-size: 18px;
`;

export const SearchTabPanel = styled(TabPanel)``;

export const SearchResultContent = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[100]};
  justify-content: center;
  align-items: center;
`;

export const SearchContent = styled.h3`
  font-size: 20px;
  font-weight: bold;
  ::after {
    content: ' (으)로 검색한 결과입니다.';
    font-size: 16px;
    font-weight: 300;
  }
`;
