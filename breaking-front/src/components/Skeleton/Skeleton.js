import React from 'react';
import PropTypes from 'prop-types';
import Line from 'components/Line/Line';
import * as Style from 'components/Skeleton/Skeleton.styles';

export default function Skeleton({ width, height, radius }) {
  return <Style.Skeleton width={width} height={height} radius={radius} />;
}

export function FeedSkeleton() {
  return (
    <Style.FeedSkeleton>
      <Style.FeedHeader>
        <Style.FeedProfileImage width="40px" height="40px" radius="50%" />
        <Style.FeedProfile>
          <Style.WriterNickname width="40px" height="14px" />
          <Style.FeedLocation width="80px" height="12px" />
        </Style.FeedProfile>
      </Style.FeedHeader>
      <Style.FeedThumbnailImage width="400px" height="300px" radius="0px" />
      <Style.FeedContentContainer>
        <Style.Tag width="40px" height="16px" />
        <Style.FeedContent>
          <Style.FeedTitle width="170px" height="18px" />
          <Style.FeedPrice width="100px" height="18px" />
        </Style.FeedContent>
        <Style.FeedContentFooter>
          <Style.FeedViewCount width="120px" height="12px" />
          <Style.FeedStatus width="100px" height="12px" />
        </Style.FeedContentFooter>
      </Style.FeedContentContainer>
    </Style.FeedSkeleton>
  );
}

export function FollowCardSkeleton() {
  return (
    <Style.FollowCardSkeleton>
      <Style.FollowCardProfileImage width="51px" height="51px" radius="50%" />
      <Style.FollowCardContent>
        <Style.FollowCardNickname width="50px" height="14px" />
        <Style.FollowCardStatusMessage width="100px" height="14px" />
      </Style.FollowCardContent>
    </Style.FollowCardSkeleton>
  );
}

export function PostSkeleton() {
  return (
    <Style.PostSkeleton>
      <Style.PostCarousel width="800px" height="400px" />
      <Style.PostHeader>
        <div>
          <Style.PostProfileImage width="100px" height="100px" radius="50%" />
          <Style.PostWriterName width="50px" height="18px" />
        </div>
        <Style.PostContext>
          <Style.PostType width="40px" height="20px" />
          <Style.PostTitle width="200px" height="24px" />
          <Style.PostLocation width="80px" height="12px" />
          <Style.PostCreatedTime width="50px" height="12px" />
          <Style.PostViewCount width="50px" height="12px" />
        </Style.PostContext>
        <Style.PostPriceContainer>
          <Style.PostPrice width="100px" height="24px" />
          <Style.PostBuyButton width="100px" height="51px" />
          <Style.PostSoldCount width="70px" height="12px" />
        </Style.PostPriceContainer>
      </Style.PostHeader>
      <Line width="800px" />
      <Style.PostContent width="800px" height="500px" />
      <Style.PostFooter>
        <Style.PostStatus width="50px" height="24px" />
        <Style.PostStatus width="50px" height="24px" />
      </Style.PostFooter>
    </Style.PostSkeleton>
  );
}

export function ProfileSkeleton() {
  return (
    <Style.ProfileSkeleton>
      <Style.ProfileImage width="200px" height="200px" radius="50%" />
      <Style.ProfileContent>
        <Style.ProfileName width="100px" height="32px" />
        <Style.ProfileStatusMessage width="200px" height="48px" />
        <Style.ProfileInformationContainer>
          <Style.ProfileInformation width="50px" height="12px" />
          <Style.ProfileInformation width="50px" height="12px" />
          <Style.ProfileInformation width="50px" height="12px" />
        </Style.ProfileInformationContainer>
      </Style.ProfileContent>
    </Style.ProfileSkeleton>
  );
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
};
