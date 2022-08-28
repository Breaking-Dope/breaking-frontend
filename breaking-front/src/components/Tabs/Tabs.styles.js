import styled from 'styled-components';

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Tab = styled.li`
  padding: 10px;
  margin-right: 25px;
  text-align: center;
  border-bottom: ${({ isActiveTabItem, theme }) =>
    isActiveTabItem ? `1px solid ${theme.blue[900]}` : 'none'};
  cursor: pointer;
`;

export const TabLabel = styled.p`
  font-size: 18px;
`;

export const TabPanel = styled.div`
  display: ${({ isActiveTabPanel }) => (isActiveTabPanel ? 'block' : 'none')};
  margin-top: 20px;
`;
