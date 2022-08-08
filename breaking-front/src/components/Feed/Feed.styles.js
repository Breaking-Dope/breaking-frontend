import styled from 'styled-components';

export const Feed = styled.div`
  display: ${({ isDeleted }) => (isDeleted ? 'none' : 'block')};
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.gray[50]};
  filter: drop-shadow(2px 2px 2px ${({ theme }) => theme.gray[300]});
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.gray[200]};
  object-fit: cover;
  cursor: pointer;
`;

export const DefaultThumbnailImage = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.gray[200]};
  align-items: center;
  justify-content: center;
  object-fit: cover;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  padding: 0px 10px;
  align-items: center;
`;

export const ETCIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  cursor: pointer;
`;

export const Context = styled.div`
  width: 200px;
  margin-left: 12px;
  font-size: 12px;
`;

export const Title = styled.a`
  display: -webkit-box;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  cursor: pointer;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Detail = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.gray[800]};
`;

export const ViewCount = styled(Detail)`
  display: inline-block;
`;

export const ContextFooter = styled.div`
  > * {
    margin-right: 5px;
  }
`;

export const ContentStatus = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Price = styled.h3`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.blue[900]};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

export const LikeIconContainer = styled.div`
  display: flex;
  margin-left: 8px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const LikeCount = styled.span`
  margin-left: 5px;
`;

export const FeedToggle = styled.div`
  position: absolute;
  right: -65px;
  bottom: 100px;
`;
