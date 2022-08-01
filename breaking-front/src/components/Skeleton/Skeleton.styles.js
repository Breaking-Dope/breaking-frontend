import styled from 'styled-components';

export const Skeleton = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => (radius ? radius : '10px')};
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const FeedSkeleton = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.gray[200]};
  filter: drop-shadow(2px 2px 2px ${({ theme }) => theme.gray[300]});
`;
export const FeedThumbnailImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.gray[200]};
`;
export const FeedContent = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 0px 10px;
  background-color: ${({ theme }) => theme.white};
  align-items: center;
`;

export const FeedProfileImage = styled(Skeleton)``;

export const FeedContext = styled.div`
  margin-left: 12px;
  flex-grow: 1;
  > * {
    margin: 4px;
  }
`;

export const FeedTitle = styled(Skeleton)``;
export const FeedLocation = styled(Skeleton)``;
export const FeedTime = styled(Skeleton)``;

export const FeedPostType = styled(Skeleton)`
  display: inline-block;
`;

export const FeedViewCount = styled(Skeleton)`
  display: inline-block;
`;

export const FeedContentStatus = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeedPrice = styled(Skeleton)`
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const FeedIcons = styled(Skeleton)``;

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
