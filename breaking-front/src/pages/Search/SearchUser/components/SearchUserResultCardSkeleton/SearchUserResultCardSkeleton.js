import React from 'react';
import * as Style from 'pages/Search/SearchUser/components/SearchUserResultCardSkeleton/SearchUserResultCardSkeleton.styles';
import Skeleton from 'components/Skeleton/Skeleton';

const SearchUserResultCardSkeleton = () => {
  return (
    <Style.ResultCardSkeleton>
      <Skeleton width="100px" height="100px" radius="50%" />
      <Style.UserInformationContainerSkeleton>
        <Style.UserTitleContainerSkeleton>
          <Style.UserNickNameSkeleton>
            <Skeleton width="120px" height="30px" />
          </Style.UserNickNameSkeleton>
          <Style.UserEmailSkeleton>
            <Skeleton width="80px" height="15px" />
          </Style.UserEmailSkeleton>
        </Style.UserTitleContainerSkeleton>
        <Style.UserFollowersSkeleton>
          <Skeleton width="60px" height="15px" />
        </Style.UserFollowersSkeleton>
        <Style.UserStatusMSGSkeleton>
          <Skeleton width="240px" height="15px" />
        </Style.UserStatusMSGSkeleton>
      </Style.UserInformationContainerSkeleton>
      <Style.UserFollowContainerSkeleton>
        <Skeleton width="80px" height="40px" />
      </Style.UserFollowContainerSkeleton>
    </Style.ResultCardSkeleton>
  );
};
export default SearchUserResultCardSkeleton;
