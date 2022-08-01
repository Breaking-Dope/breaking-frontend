import styled from 'styled-components';

export const Skeleton = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
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

export const FeedProfileImage = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const FeedContext = styled.div`
  margin-left: 12px;
  flex-grow: 1;
  > * {
    margin: 4px;
  }
`;

export const FeedTitle = styled.div`
  width: 150px;
  height: 21px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const FeedLocation = styled.div`
  width: 50px;
  height: 14px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const FeedTime = styled(FeedLocation)`
  width: 100px;
`;

export const FeedPostType = styled.div`
  display: inline-block;
  width: 30px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const FeedViewCount = styled(FeedPostType)`
  width: 50px;
`;

export const FeedContentStatus = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeedPrice = styled.div`
  width: 100px;
  height: 18px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const FeedIcons = styled.div`
  width: 120px;
  height: 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const FollowCardSkeleton = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 80px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[50]};
`;

export const FollowCardProfileImage = styled(FeedProfileImage)``;

export const FollowCardContent = styled.div`
  display: flex;
  width: 250px;
  margin-left: 20px;
  flex-direction: column;
`;
export const FollowCardNickname = styled(FeedLocation)`
  width: 50px;
  margin-bottom: 5px;
`;

export const FollowCardStatusMessage = styled(FeedLocation)`
  width: 100px;
`;
