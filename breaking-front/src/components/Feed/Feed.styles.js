import styled from 'styled-components';
import logo from 'assets/svg/logo.svg';

export const Feed = styled.div`
  width: 403px;
  height: 404px;
  background-color: ${({ theme }) => theme.gray[50]};
  filter: drop-shadow(2px 2px 2px ${({ theme }) => theme.gray[300]});
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

export const FeedImage = styled.img`
  width: 100%;
  height: 300px;
`;

export const FeedDefaultImage = styled.img.attrs({
  src: `${logo}`,
})`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const Location = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.gray[800]};
`;

export const Cost = styled.p`
  display: inline;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.blue[900]};
`;

export const Content = styled.div`
  display: flex;
  width: 400px;
  height: 100px;
  padding: 10px;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    margin-right: 7px;
  }
`;

export const ProfileWrapper = styled.div``;
