import styled from 'styled-components';

export const Skeleton = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => (radius ? radius : '10px')};
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const FeedSkeleton = styled.div`
  display: flex;
  width: 400px;
  height: 480px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  flex-direction: column;
  filter: drop-shadow(0px 0px 5px ${({ theme }) => theme.gray[300]});
`;

export const FeedThumbnailImage = styled(Skeleton)``;

export const FeedHeader = styled.div`
  display: flex;
  height: 56px;
  padding-left: 10px;
  padding-right: 15px;
  justify-content: center;
  align-items: center;
`;

export const FeedProfileImage = styled(Skeleton)``;

export const FeedProfile = styled.div`
  margin-left: 5px;
  flex-grow: 1;
`;

export const WriterNickname = styled(Skeleton)`
  margin-bottom: 3px;
`;

export const FeedLocation = styled(Skeleton)``;

export const FeedContentContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  flex-grow: 1;
`;

export const Tag = styled(Skeleton)`
  margin-bottom: 10px;
`;

export const FeedContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

export const FeedTitle = styled(Skeleton)``;

export const FeedPrice = styled(Skeleton)``;

export const FeedContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeedViewCount = styled(Skeleton)``;

export const FeedStatus = styled(Skeleton)``;

export const MissionFeedSkeleton = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  flex-direction: column;
  filter: drop-shadow(0px 0px 5px ${({ theme }) => theme.gray[300]});
`;

export const MissionFeedHeader = styled.div`
  display: flex;
  padding: 7px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.gray[500]};
  justify-content: center;
  align-items: center;
`;

export const MissionFeedContent = styled.div`
  flex-grow: 1;
`;

export const MissionFeedTitle = styled(FeedTitle)`
  margin: 0 auto;
  margin-top: 35px;
`;

export const MissionFeedContentFooter = styled(FeedContentFooter)`
  padding: 10px;
`;

export const MissionFeedStatus = styled(FeedViewCount)`
  margin-top: auto;
`;

export const TimeBox = styled(Skeleton)``;

export const FollowCardSkeleton = styled.div`
  display: flex;
  width: 400px;
  height: 80px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[50]};
  align-items: center;
`;

export const FollowCardProfileImage = styled(Skeleton)``;

export const FollowCardContent = styled.div`
  display: flex;
  width: 250px;
  margin-left: 20px;
  flex-direction: column;
`;

export const FollowCardNickname = styled(Skeleton)`
  margin-bottom: 5px;
`;

export const FollowCardStatusMessage = styled(Skeleton)``;

export const PostSkeleton = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export const PostCarousel = styled(Skeleton)`
  margin-bottom: 27px;
`;

export const PostHeader = styled.div`
  display: flex;
  min-height: 160px;
  padding: 20px;
  align-items: center;
`;

export const PostProfileImage = styled(Skeleton)``;

export const PostWriterName = styled(Skeleton)`
  margin: 0 auto;
  margin-top: 5px;
`;

export const PostContext = styled.div`
  width: 500px;
  padding: 0px 30px;
  flex-grow: 1;
`;

export const PostType = styled(Skeleton)`
  margin: 5px 5px 5px 0px;
`;
export const PostTitle = styled(Skeleton)`
  margin-bottom: 20px;
`;
export const PostLocation = styled(Skeleton)`
  margin-top: 10px;
`;
export const PostCreatedTime = styled(Skeleton)`
  display: inline-block;
  margin-top: 10px;
`;
export const PostViewCount = styled(Skeleton)`
  display: inline-block;
  margin-left: 5px;
  margin-top: 10px;
`;

export const PostPriceContainer = styled.div`
  width: 160px;
`;

export const PostPrice = styled(Skeleton)`
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const PostBuyButton = styled(Skeleton)`
  margin: 0 auto;
`;

export const PostSoldCount = styled(Skeleton)`
  margin: 0 auto;
  margin-top: 10px;
`;

export const PostContent = styled(Skeleton)`
  margin-top: 20px;
`;

export const PostFooter = styled.div`
  padding: 0px 10px;
  margin-top: 20px;
`;

export const PostStatus = styled(Skeleton)`
  display: inline-block;
  margin-right: 10px;
`;

export const ProfileSkeleton = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  margin-top: 30px;
`;

export const ProfileImage = styled(Skeleton)``;

export const ProfileContent = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProfileName = styled(Skeleton)``;

export const ProfileStatusMessage = styled(Skeleton)``;

export const ProfileInformationContainer = styled.div`
  margin-top: 10px;
`;

export const ProfileInformation = styled(Skeleton)`
  display: inline-block;
  margin-right: 20px;
`;
