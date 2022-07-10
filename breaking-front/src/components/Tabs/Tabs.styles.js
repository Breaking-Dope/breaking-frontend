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
  cursor: pointer;
`;

// TabItem 컴포넌트
export const ActiveTab = styled(Tab)`
  border-bottom: 1px solid ${({ theme }) => theme.blue[900]};
`;

export const TabLabel = styled.p`
  font-size: 18px;
`;

export const TabPanel = styled.div`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  margin-top: 20px;
`;
