import styled from 'styled-components';
import logo from 'assets/svg/logo.svg';

export const Feed = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.gray[50]};
  filter: drop-shadow(2px 2px 2px ${({ theme }) => theme.gray[300]});
`;

export const ThumbNailImage = styled.img`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.gray[200]};
  cursor: pointer;
`;

export const ThumbnailDefaultImage = styled(ThumbNailImage).attrs({
  src: `${logo}`,
})`
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 10px;
  align-items: center;
`;

export const Context = styled.div`
  margin-left: 12px;
  font-size: 12px;
  flex-grow: 1;
  > * {
    margin: 4px;
  }
`;

export const Title = styled.a`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const Detail = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.gray[800]};
`;

export const Price = styled.p`
  display: inline;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.blue[900]};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const Count = styled.span`
  margin-left: 5px;
`;

export const FeedToggle = styled.div`
  position: absolute;
  right: -45px;
  bottom: 60px;
`;
