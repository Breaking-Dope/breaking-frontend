import React from 'react';
import PropTypes from 'prop-types';
import * as Style from 'components/Skeleton/Skeleton.styles';

export default function Skeleton({ width, height, radius }) {
  return <Style.Skeleton width={width} height={height} radius={radius} />;
}

export function FeedSkeleton() {
  return (
    <Style.FeedSkeleton>
      <Style.FeedThumbnailImage />
      <Style.FeedContent>
        <Style.FeedProfileImage />
        <Style.FeedContext>
          <Style.FeedTitle />
          <Style.FeedLocation />
          <Style.FeedTime />
          <Style.FeedPostType />
          <Style.FeedViewCount />
        </Style.FeedContext>
        <Style.FeedContentStatus>
          <Style.FeedPrice />
          <Style.FeedIcons />
        </Style.FeedContentStatus>
      </Style.FeedContent>
    </Style.FeedSkeleton>
  );
}

export function FollowCardSkeleton() {
  return (
    <Style.FollowCardSkeleton>
      <Style.FollowCardProfileImage />
      <Style.FollowCardContent>
        <Style.FollowCardNickname />
        <Style.FollowCardStatusMessage />
      </Style.FollowCardContent>
    </Style.FollowCardSkeleton>
  );
}

export function CommentSkeleton() {}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
};

Skeleton.defaultProps = {
  radius: '10px',
};
