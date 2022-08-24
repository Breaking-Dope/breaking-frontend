import styled from 'styled-components';
import {
  UserInformationContainer,
  UserName,
  UserStatusMsg,
} from 'pages/Search/SearchUnified/components/UserCard/UserCard.styles';

export const UserCardSkeletonContainer = styled(UserInformationContainer)``;
export const UserSkeletonName = styled(UserName)``;
export const UserSkeletonStatusMsg = styled(UserStatusMsg)`
  display: flex;
  justify-content: center;
`;
