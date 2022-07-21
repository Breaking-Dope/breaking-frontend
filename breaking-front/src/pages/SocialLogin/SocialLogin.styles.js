import styled from 'styled-components';
import breakingImage from 'assets/img/breaking-logo.png';

export const LoginTitle = styled.h2`
  padding: 15px;
  font-size: 26px;
  font-weight: bold;
  line-height: 45px;
`;

export const BreakingLogo = styled.img.attrs({ src: `${breakingImage}` })`
  width: 320px;
  height: 272px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 65px);
`;

export const LoginContent = styled.div`
  display: flex;
  padding: 30px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;
