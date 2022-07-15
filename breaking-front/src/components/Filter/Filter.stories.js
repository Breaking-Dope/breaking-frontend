import React from 'react';
import Filter from 'components/Filter/Filter';

export default {
  title: 'components/Filter',
  component: Filter,
  subComponents: {
    'Filter.FilterDetail': Filter.FilterDetail,
  },
};

export const DefaultFilter = () => {
  return (
    <>
      <div>대충 위의 컨텐츠</div>
      <Filter width="160px">
        <Filter.FilterDetail>모든 제보글</Filter.FilterDetail>
        <Filter.FilterDetail>판매되지 않은 제보글</Filter.FilterDetail>
        <Filter.FilterDetail>판매된 제보글</Filter.FilterDetail>
      </Filter>
      <div>대충 밑의 컨텐츠</div>
    </>
  );
};
