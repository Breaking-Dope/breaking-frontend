import styled from 'styled-components';

export const MissionFeed = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  flex-direction: column;
  filter: drop-shadow(0px 0px 5px ${({ theme }) => theme.gray[300]});
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  padding: 7px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.gray[500]};
  justify-content: center;
  align-items: center;
  svg {
    outline: none;
    cursor: pointer;
  }
`;

export const WriterNickname = styled.p`
  margin-left: 5px;
  font-size: 14px;
  flex-grow: 1;
`;

export const MissionFeedToggle = styled.div`
  position: absolute;
  right: -60px;
  bottom: 45px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Bookmark = styled.div`
  margin: 10px 15px 10px auto;
  cursor: pointer;
  svg {
    width: 12px;
    path {
      fill: ${({ theme }) => theme.blue[900]};
    }
  }
`;

export const Title = styled.div`
  width: 350px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ContentFooter = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

export const Status = styled.div`
  margin-top: auto;
`;

export const ViewCount = styled.span`
  color: ${({ theme }) => theme.gray[800]};
  font-size: 12px;
`;

export const CreatedDate = styled(ViewCount)`
  &:before {
    content: ' • ';
  }
`;

export const TimeBox = styled.div`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  white-space: pre-wrap;
`;

export const MissionTime = styled.p`
  color: ${({ theme }) => theme.red[500]};
`;
