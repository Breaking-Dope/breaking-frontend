import React from 'react';
import Tag from 'components/Tag/Tag';

export default {
  title: 'components/Tag',
  component: Tag,
};

function Template(args) {
  return <Tag {...args} />;
}

export const UnsoldExclusiveTag = Template.bind({});
UnsoldExclusiveTag.args = {
  postType: 'EXCLUSIVE',
  isSold: false,
  isPurchasable: true,
};

export const SoldExclusiveTag = Template.bind({});
SoldExclusiveTag.args = {
  postType: 'EXCLUSIVE',
  isSold: true,
  isPurchasable: false,
};

export const PurchasableTag = Template.bind({});
PurchasableTag.args = {
  postType: 'CHARGED',
  isSold: false,
  isPurchasable: true,
};

export const UnpurchasableTag = Template.bind({});
UnpurchasableTag.args = {
  postType: 'CHARGED',
  isSold: false,
  isPurchasable: false,
};
