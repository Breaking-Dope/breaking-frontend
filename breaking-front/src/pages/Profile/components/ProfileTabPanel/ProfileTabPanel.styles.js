import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const PanelContainer = styled.div`
  padding: 40px 30px 60px;
`;

export const FilterContainer = styled.div`
  margin-bottom: 30px;
`;

export const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  row-gap: 60px;
  justify-content: space-between;
`;

export const Loading = styled(ReactLoading)`
  position: absolute;
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, -50%);
`;

export const TargetDiv = styled.div`
  position: relative;
  height: 100px;
`;
