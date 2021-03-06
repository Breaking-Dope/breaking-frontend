import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  height: 65px;
  background-color: ${({ theme }) => theme.blue[900]};
`;

export const HeaderContent = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  max-width: 950px;
  height: 100%;
  padding: 0px 13px;
  margin: 0 auto;
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    > path {
      fill: ${({ theme }) => theme.blue[300]};
    }
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

export const Logout = styled.p`
  text-align: center;
  margin: 10px;
  cursor: pointer;
`;
