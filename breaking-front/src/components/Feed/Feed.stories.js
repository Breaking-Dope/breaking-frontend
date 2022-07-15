import React from 'react';
import Feed from 'components/Feed/Feed';

export default {
  title: 'components/Feed',
  component: Feed,
  argTypes: {
    userId: {
      control: { type: 'number' },
    },
  },
};

const Template = (args) => {
  const feedData = {
    postId: '1',
    title: '~~~사건',
    region: '중구',
    thumbnailImgURL: '',
    likeCount: 999,
    postType: 'EXCLUSIVE',
    isSold: false,
    price: 10000,
    viewCount: 1000,
    userId: 123,
    profileImgURL: '',
    realName: '가나다',
    isLiked: false,
    isBookmarked: false,
  };

  const handleProfileClick = () => {
    console.log('유저페이지로 이동');
  };

  const handleFeedClick = () => {
    console.log('피드페이지로 이동');
  };
  return (
    <Feed
      feedData={feedData}
      profileClick={handleProfileClick}
      feedClick={handleFeedClick}
      {...args}
    />
  );
};

export const ItIsMyFeed = Template.bind({});
ItIsMyFeed.args = {
  userId: 123,
};

export const ItIsNotMyFeed = Template.bind({});
ItIsNotMyFeed.args = {
  userId: 124,
};
