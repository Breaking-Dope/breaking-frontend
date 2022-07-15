import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as FilterIcon } from 'assets/svg/filter.svg';
import * as Style from 'components/Filter/Filter.styles';

export default function Filter({ width, children, ...props }) {
  const [selectedLabel, setSelectedLabel] = useState(
    children[0].props.children
  );
  //state에는 FilterDetail children이 들어가 있는다.

  const [isOpen, setIsOpen] = useState(false);
  // open이 활성화되면 모든 라벨을 보일수 있게 한다.

  const childProps = {
    isOpen,
    setSelectedLabel,
  };

  return (
    <Style.FilterContainer
      width={width}
      {...props}
      onClick={() => setIsOpen((pre) => !pre)}
    >
      <Style.ClosedFilter width={width}>
        <Style.IconContainer>
          <FilterIcon />
        </Style.IconContainer>
        <Style.Label>{selectedLabel}</Style.Label>
      </Style.ClosedFilter>

      <Style.OpenedFilter width={width} isOpen={isOpen}>
        <Style.IconContainer>
          <FilterIcon />
        </Style.IconContainer>
        {children.map((child, index) => {
          return React.cloneElement(child, {
            ...childProps,
            key: `${index}-Label`,
          });
        })}
      </Style.OpenedFilter>
    </Style.FilterContainer>
  );
}

function FilterDetail({ children, setSelectedLabel, onClick }) {
  return (
    <Style.Label
      onClick={() => {
        setSelectedLabel(children);
        onClick && onClick();
      }}
    >
      {children}
    </Style.Label>
  );
}

Filter.FilterDetail = FilterDetail;

Filter.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node,
};

Filter.defaultProps = {
  width: '100px',
};

FilterDetail.propTypes = {
  children: PropTypes.string,
  setSelectedLabel: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};
//onClick 함수를 이용해 filter가 클릭되었을때 API나 다른 일을 수행하도록 한다.
