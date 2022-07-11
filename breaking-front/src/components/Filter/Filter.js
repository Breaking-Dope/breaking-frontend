import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as FilterIcon } from 'assets/svg/filter.svg';
import * as Style from 'components/Filter/Filter.styles';

export default function Filter({
  width,
  selectedFilter,
  isOpen,
  children,
  ...props
}) {
  return (
    <Style.FilterContainer width={width} {...props}>
      <Style.IconContainer>
        <FilterIcon />
      </Style.IconContainer>
      <Style.Filter isOpen={isOpen}>
        {isOpen ? <>{children}</> : <Style.Label>{selectedFilter}</Style.Label>}
      </Style.Filter>
    </Style.FilterContainer>
  );
}

function FilterDetail({ label, filterClick }) {
  return <Style.Label onClick={filterClick}>{label}</Style.Label>;
}

Filter.FilterDetail = FilterDetail;

Filter.propTypes = {
  width: PropTypes.string,
  selectedFilter: PropTypes.string,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};

Filter.defaultProps = {
  width: '100px',
  isOpen: false,
};

FilterDetail.propTypes = {
  label: PropTypes.string,
  filterClick: PropTypes.func,
};
