import React from 'react';
import Skeleton, {
  FeedSkeleton,
  FollowCardSkeleton,
  MissionFeedSkeleton,
  PostSkeleton,
  ProfileSkeleton,
} from 'components/Skeleton/Skeleton';

export default {
  title: 'components/Skeleton',
  component: Skeleton,
};

export const FeedSkeletonUI = (args) => {
  return <FeedSkeleton />;
};

export const MissionFeedSkeletonUI = (args) => {
  return <MissionFeedSkeleton />;
};

export const FollowCardSkeletonUI = (args) => {
  return <FollowCardSkeleton />;
};

export const PostSkeletonUI = (args) => {
  return <PostSkeleton />;
};

export const ProfileSkeletonUI = (args) => {
  return <ProfileSkeleton />;
};
