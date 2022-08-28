import React from 'react';
import NoData from 'components/NoData/NoData';

export default {
  title: 'components/NoData',
  component: NoData,
};

function Template(args) {
  return <NoData {...args} />;
}

export const NoSearchData = Template.bind({});
NoSearchData.args = { message: '검색 결과가 존재하지 않습니다.' };

export const NoProfileFeedData = Template.bind({});
NoProfileFeedData.args = { message: '작성한 제보가 없습니다.' };
