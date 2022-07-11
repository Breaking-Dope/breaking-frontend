import React, { useState } from 'react';
import Filter from 'components/Filter/Filter';

export default {
  title: 'components/Filter',
  component: Filter,
};

export const DefaultFilter = () => {
  const label = [
    { label: '최신순', id: '1' },
    { label: '조회순', id: '2' },
    { label: '좋아요순', id: '3' },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Filter
      selectedFilter={label[index].label}
      onClick={() => setIsOpen((prev) => !prev)}
      isOpen={isOpen}
    >
      <Filter.FilterDetail
        label={label[0].label}
        filterClick={() => setIndex(0)}
      />
      <Filter.FilterDetail
        label={label[1].label}
        filterClick={() => setIndex(1)}
      />
      <Filter.FilterDetail
        label={label[2].label}
        filterClick={() => setIndex(2)}
      />
    </Filter>
  );
};
