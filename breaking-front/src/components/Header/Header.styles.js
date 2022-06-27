import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import styled from 'styled-components';

export const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65px;
  background-color: #014d91;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
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

// 임의로 프로필 사진을 동그란 회색 div로 표시함
export const UserImage = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #eee;
`;

// 추후 토글 컴포넌트 구현시 수정
export const UserDetailToggle = styled.div``;
