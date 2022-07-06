import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
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
export const UserContent = styled.div`
  display: flex;
  align-items: center;
`;

// 추후에 Link 태그로 바꾸고 클릭 시 홈으로 이동하도록 수정
export const LogoContainer = styled.div`
  width: 55px;
  margin-right: 70px;
`;

export const Form = styled.form`
  width: 280px;
`;

export const SearchInput = styled(Input)``;

export const LoginButton = styled(Button)`
  padding: 10px 30px;
`;

// 추후 토글 컴포넌트 구현시 수정
export const UserDetailToggle = styled.div``;
