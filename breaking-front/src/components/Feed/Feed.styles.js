import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Feed = styled.div`
  display: flex;
  width: 400px;
  height: 480px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  flex-direction: column;
  filter: drop-shadow(0px 0px 5px ${({ theme }) => theme.gray[300]});
`;

export const FeedHeader = styled.div`
  position: relative;
  display: flex;
  height: 56px;
  padding-left: 10px;
  padding-right: 15px;
  justify-content: center;
  align-items: center;
  svg {
    outline: none;
    cursor: pointer;
  }
`;

export const FeedProfile = styled.div`
  margin-left: 5px;
  flex-grow: 1;
`;

export const WriterNickname = styled.p`
  margin-bottom: 3px;
  font-size: 14px;
`;

export const Location = styled.div`
  display: flex;
  color: ${({ theme }) => theme.gray[800]};
  font-size: 12px;
  align-items: center;
  svg {
    margin-right: 2px;
  }
`;

export const FeedThumbnailContainer = styled(Link)``;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.gray[200]};
  object-fit: cover;
  cursor: pointer;
`;

export const DefaultThumbnailImage = styled(ThumbnailImage)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeedContentContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  flex-grow: 1;
`;

export const FeedContentHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const Bookmark = styled.div`
  cursor: pointer;
  svg {
    width: 12px;
    path {
      fill: ${({ theme }) => theme.blue[900]};
    }
  }
`;

export const FeedContent = styled(Link)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

export const FeedTitle = styled.div`
  width: 250px;
  font-size: 16px;
  font-weight: 700;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  overflow: hidden;
`;

export const FeedPrice = styled.div`
  color: ${({ theme }) => theme.blue[900]};
  font-size: 16px;
`;

export const FeedContentFooter = styled.div`
  display: flex;
  color: ${({ theme }) => theme.gray[800]};
  font-size: 12px;
  justify-content: space-between;
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ViewCount = styled.span`
  &:after {
    content: ' • ';
  }
`;

export const CreatedDate = styled.span``;

export const LikeCount = styled.span`
  display: inline-flex;
  align-items: center;
  svg {
    margin-right: 2px;
    path {
      fill: ${({ theme }) => theme.gray[800]};
    }
  }
`;

export const CommentCount = styled(LikeCount)`
  margin-left: 5px;
  svg {
    path {
      fill: none;
      stroke: ${({ theme }) => theme.gray[800]};
    }
  }
`;

export const FeedToggle = styled.div`
  position: absolute;
  right: -50px;
  bottom: 45px;
`;
