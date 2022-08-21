import ReactLoading from 'react-loading';
import styled from 'styled-components';

export const Transaction = styled.div`
  display: flex;
  width: 700px;
  margin: 50px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
