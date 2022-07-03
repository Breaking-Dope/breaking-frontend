import styled from 'styled-components';
import breakingImage from 'assets/img/breaking-logo.png';

export const LoginTitle = styled.h2`
  font-size: 26px;
  font-weight: bold;
`;

export const BreakingLogo = styled.img.attrs({ src: `${breakingImage}` })`
  width: 320px;
  height: 272px;
`;

export const Body = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const RightContent = styled.div``;

export const LeftContent = styled.div``;
