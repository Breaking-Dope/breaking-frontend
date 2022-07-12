import React from 'react';
import Filter from 'components/Filter/Filter';

export default {
  title: 'components/Filter',
  component: Filter,
};

export const DefaultFilter = () => {
  return (
    <Filter initalize="최신순">
      <Filter.FilterDetail>최신순</Filter.FilterDetail>
      <Filter.FilterDetail>좋아요</Filter.FilterDetail>
      <Filter.FilterDetail>조회수</Filter.FilterDetail>
    </Filter>
  );
};
