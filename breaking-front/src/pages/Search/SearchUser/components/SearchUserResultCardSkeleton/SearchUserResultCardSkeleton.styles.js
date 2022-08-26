import styled from 'styled-components';
import {
  ResultCard,
  UserEmail,
  UserFollowers,
  UserInformationContainer,
  UserNickName,
  UserStatusMSG,
  UserTitleContainer,
} from 'pages/Search/SearchUser/components/SearchUserResultCard/SearchUserResultCard.styles';

export const ResultCardSkeleton = styled(ResultCard)``;

export const UserInformationContainerSkeleton = styled(
  UserInformationContainer
)``;

export const UserTitleContainerSkeleton = styled(UserTitleContainer)``;

export const UserNickNameSkeleton = styled(UserNickName)``;

export const UserEmailSkeleton = styled(UserEmail)``;

export const UserFollowersSkeleton = styled(UserFollowers)``;

export const UserStatusMSGSkeleton = styled(UserStatusMSG)``;

export const UserFollowContainerSkeleton = styled.div`
  margin-left: 20px;
  padding: 5px;
`;
