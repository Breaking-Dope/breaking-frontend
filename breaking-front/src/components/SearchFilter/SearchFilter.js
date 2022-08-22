import React from 'react';
import PropTypes from 'prop-types';
import Filter from 'components/Filter/Filter';
import * as Style from 'components/SearchFilter/SearchFilter.styles';
import { useQueryClient } from 'react-query';

export default function SearchFilter({ setSort, option, setOption, queryKey }) {
  const queryClient = useQueryClient();

  const handleFilter = (sortType) => {
    queryClient.resetQueries(queryKey);
    setSort(sortType);
  };

  const handleOption = () => {
    queryClient.resetQueries(queryKey);
    setOption((pre) => (pre === 'all' ? 'unsold' : 'all'));
  };

  return (
    <Style.FilterContainer>
      <Filter>
        <Filter.FilterDetail
          onClick={() => {
            handleFilter('chronological');
          }}
        >
          최신순
        </Filter.FilterDetail>
        <Filter.FilterDetail
          onClick={() => {
            handleFilter('view');
          }}
        >
          조회순
        </Filter.FilterDetail>
        <Filter.FilterDetail
          onClick={() => {
            handleFilter('like');
          }}
        >
          좋아요순
        </Filter.FilterDetail>
      </Filter>
      <Style.ShowSoldFeed>
        판매 안 된 제보글만 보기
        <input
          type="checkbox"
          checked={option !== 'all'}
          onChange={handleOption}
        />
      </Style.ShowSoldFeed>
    </Style.FilterContainer>
  );
}

SearchFilter.propTypes = {
  setSort: PropTypes.func,
  option: PropTypes.string,
  setOption: PropTypes.func,
  queryKey: PropTypes.string,
};
