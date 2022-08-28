import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  min-width: 950px;
  height: 65px;
  background-color: ${({ theme }) => theme.blue[900]};
`;

export const HeaderContent = styled.div`
  display: flex;
  position: relative;
  width: 950px;
  height: 100%;
  padding: 0px 13px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg > path {
    fill: ${({ theme }) => theme.blue[300]};
  }
`;

export const LogoContainer = styled(Link)`
  width: 55px;
  margin-right: 70px;
`;

export const Form = styled.form`
  width: 280px;
`;

export const LoginButton = styled(Button)`
  padding: 10px 30px;
`;

export const ProfileToggle = styled.div`
  position: absolute;
  top: 70px;
  right: -16px;
`;

export const BlueLabel = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.blue[900]};
  font-weight: 700;
  cursor: pointer;
`;

export const Logout = styled.p`
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;
