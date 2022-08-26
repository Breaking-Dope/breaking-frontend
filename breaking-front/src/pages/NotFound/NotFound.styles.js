import styled from 'styled-components';

export const NotFoundLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  > * {
    margin-bottom: 30px;
  }
`;

export const NotFound = styled.h1`
  font-size: 64px;
`;

export const PageNotFound = styled.h5`
  font-size: 24px;
`;

export const NotFoundContent = styled.span`
  font-size: 12px;
`;
