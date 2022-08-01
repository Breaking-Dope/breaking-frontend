import React from 'react';
import Skeleton, {
  CommentSkeleton,
  FeedSkeleton,
  FollowCardSkeleton,
  PostSkeleton,
} from 'components/Skeleton/Skeleton';

export default {
  title: 'components/Skeleton',
  component: Skeleton,
  subComponents: {
    FeedSkeleton: FeedSkeleton,
    PostSkeleton: PostSkeleton,
    FollowCardSkeleton: FollowCardSkeleton,
    CommentSkeleton: CommentSkeleton,
  },
};

export const FeedSkeletonUI = (args) => {
  return <FeedSkeleton />;
};

export const PostSkeletonUI = (args) => {
  return <PostSkeleton />;
};

export const FollowCardSkeletonUI = (args) => {
  return <FollowCardSkeleton />;
};

export const CommentSkeletonUI = (args) => {
  return <CommentSkeleton />;
};
