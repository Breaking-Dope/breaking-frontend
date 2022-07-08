import React from 'react';
import { Feed } from 'components/Feed/Feed';
import Button from 'components/Button/Button';
import styled from 'styled-components';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import { ReactComponent as BookMarkIcon } from 'assets/svg/bookmark.svg';
import { ReactComponent as ETCIcon } from 'assets/svg/etc.svg';

const ProfileFrame = styled.div``;

const Context = styled.div`
  flex-direction: column;
  margin-left: 12px;
  font-size: 12px;
  > * {
    margin: 4px;
  }
`;

const Icons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  align-items: center;
  > * {
    margin-right: 10px;
  }
`;

export default {
  title: 'components/Feed',
  component: Feed,
  subcomponent: {
    'Feed.Title': Feed.Title,
    'Feed.ProfileImage': Feed.ProfileImage,
    'Feed.FeedImage': Feed.FeedImage,
    'Feed.Content': Feed.Content,
    'Feed.Location': Feed.Location,
    'Feed.Time': Feed.Time,
    'Feed.Cost': Feed.Cost,
    'Feed.IconWrapper': Feed.IconWrapper,
  },
};

function Template(args) {
  return <Feed {...args} />;
}

export const ExampleFeed = Template.bind({});

ExampleFeed.args = {
  children: (
    <>
      <Feed.FeedImage />
      <Feed.Content>
        <ProfileFrame>
          <Feed.ProfileImage />
        </ProfileFrame>
        <Context>
          <Feed.Title>일이삼사오육칠팔구십일이삼사오육칠</Feed.Title>
          <Feed.Location>중구</Feed.Location>
          <Feed.Time>12분전</Feed.Time>
          <Button color="dark" size="small">
            단독
          </Button>
          <Button color="danger" size="small">
            판매 완료
          </Button>
          <Feed.Cost>1,000원</Feed.Cost>
        </Context>
        <Icons>
          <Feed.IconWrapper>
            <LikeIcon />0
          </Feed.IconWrapper>
          <Feed.IconWrapper>
            <BookMarkIcon />
          </Feed.IconWrapper>
          <Feed.IconWrapper>
            <ETCIcon />
          </Feed.IconWrapper>
        </Icons>
      </Feed.Content>
    </>
  ),
};
