import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const TargetDiv = styled.div`
  position: relative;
  height: 100px;
`;

export const Loading = styled(ReactLoading)`
  position: absolute;
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, -50%);
`;
