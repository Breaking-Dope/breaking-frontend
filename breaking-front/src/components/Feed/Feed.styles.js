import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Feed = styled.div`
  display: ${({ isDeleted }) => (isDeleted ? 'none' : 'flex')};
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

export const WriterNickName = styled.p`
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

export const FeedContentContainer = styled(Link)`
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  flex-grow: 1;
`;

export const Tag = styled.div`
  margin-bottom: 10px;
  button {
    margin-right: 5px;
  }
`;

export const FeedContent = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
`;

export const FeedTitle = styled.div`
  width: 65%;
  font-size: 18px;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  overflow: hidden;
`;

export const FeedPrice = styled.div`
  width: 35%;
  color: ${({ theme }) => theme.blue[900]};
  font-size: 18px;
  text-align: end;
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

export const FeedStatus = styled.div`
  display: flex;
  div {
    display: flex;
    margin-left: 5px;
    align-items: center;
    svg {
      margin-right: 2px;
    }
  }
`;

export const LikeCount = styled.div`
  svg {
    path {
      fill: ${({ theme }) => theme.gray[800]};
    }
  }
`;

export const CommentCount = styled.div`
  svg {
    path {
      stroke: ${({ theme }) => theme.gray[800]};
    }
  }
`;

export const FeedToggle = styled.div`
  position: absolute;
  right: 0px;
  top: 45px;
`;
