import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as FilterIcon } from 'assets/svg/filter.svg';
import * as Style from 'components/Filter/Filter.styles';

export default function Filter({ width, initalize, children, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(initalize);
  const prop = {
    filterClick: (event) => {
      setSelectedFilter(event.target.innerText);
      setIsOpen(false);
    },
  };

  // React.cloneElement(children.map(()=>{

  // }))
  return (
    <Style.FilterContainer width={width} {...props}>
      <Style.IconContainer onClick={() => setIsOpen((pre) => !pre)}>
        <FilterIcon />
      </Style.IconContainer>
      <Style.Filter isOpen={isOpen}>
        {isOpen ? (
          <>
            {children.map((child) => {
              return React.cloneElement(child, prop);
            })}
          </>
        ) : (
          <Style.Label onClick={() => setIsOpen((pre) => !pre)}>
            {selectedFilter}
          </Style.Label>
        )}
      </Style.Filter>
    </Style.FilterContainer>
  );
}

function FilterDetail({ children, filterClick }) {
  return <Style.Label onClick={filterClick}>{children}</Style.Label>;
}

Filter.FilterDetail = FilterDetail;

Filter.propTypes = {
  width: PropTypes.string,
  initalize: PropTypes.string,
  children: PropTypes.node,
};

Filter.defaultProps = {
  width: '100px',
};

FilterDetail.propTypes = {
  children: PropTypes.string,
  filterClick: PropTypes.func,
};
