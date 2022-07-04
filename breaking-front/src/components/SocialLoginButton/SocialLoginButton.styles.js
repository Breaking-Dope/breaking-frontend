import styled from 'styled-components';
import KakaoLoginIcon from 'assets/svg/kakao_login.svg';
import GoogleLoginIcon from 'assets/svg/google_login.svg';

const socialIcon = {
  kakao: KakaoLoginIcon,
  google: GoogleLoginIcon,
};

export const LoginButton = styled.button`
  width: 252px;
  height: 60px;
  padding: 10px;
  border: none;
  background-image: url(${({ icon }) => socialIcon[icon]});
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
