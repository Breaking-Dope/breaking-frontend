import React from 'react';
import * as Style from 'pages/Search/SearchUnified/components/UserCardSkeleton/UserCardSkeleton.styles';
import Skeleton from 'components/Skeleton/Skeleton';

const UserCardSkeleton = () => {
  return (
    <Style.UserCardSkeletonContainer>
      <Skeleton width="70px" height="70px" radius="50%" />
      <Style.UserSkeletonName>
        <Skeleton width="40px" height="12px" />
      </Style.UserSkeletonName>
      <Style.UserSkeletonStatusMsg>
        <Skeleton width="120px" height="15px" />
      </Style.UserSkeletonStatusMsg>
      <Skeleton width="40px" height="20px" />
    </Style.UserCardSkeletonContainer>
  );
};

export default UserCardSkeleton;
