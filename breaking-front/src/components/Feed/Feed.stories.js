import React from 'react';
import { Feed } from 'components/Feed/Feed';

export default {
  title: 'components/Feed',
  component: Feed,
  subcomponent: {
    'Feed.Context': Feed.Context,
    'Feed.ProfileImage': Feed.ProfileImage,
    'Feed.FeedImage': Feed.FeedImage,
    'Feed.Content': Feed.Content,
    'Feed.Icons': Feed.Icons,
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
        <Feed.ProfileImage />
        <Feed.Context
          location="중구"
          time="12분전"
          isSold={true}
          postType="EXCLUSIVE"
          cost={1000}
          title="일이삼사오육칠팔구십일이삼사오육칠"
        ></Feed.Context>
        <Feed.Icons
          likeCount={27}
          isLiked={true}
          isBookmarked={true}
        ></Feed.Icons>
      </Feed.Content>
    </>
  ),
};
