import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as FilterIcon } from 'assets/svg/filter.svg';
import * as Style from 'components/Filter/Filter.styles';

//기본적인 로직은 각 컴포넌트는 한번 랜더링이 되고 조건에 따라서 숨김/보임 처리가 된다.
export default function Filter({ width, children, ...props }) {
  const [selectedLabel, setSelectedLabel] = useState('0-Label');
  // 각 Label은 id가 숫자-label 형식으로 이루어져 있고 state는 클릭된 라벨의 id가 저장된다.
  const [isOpen, setIsOpen] = useState(false);
  // open이 활성화되면 모든 라벨을 보일수 있게 한다.
  const childProps = {
    filterClick: (event) => {
      setSelectedLabel(event.target.id);
    },
    isOpen,
    selectedLabel,
  };
  // 자식 컴포넌트에 넘겨줄 props, state와 클릭시에 어떤 라벨이 클리되었는지 선택하는 callback 함수가 넘어간다.
  return (
    <Style.FilterContainer
      width={width}
      {...props}
      onClick={() => setIsOpen((pre) => !pre)}
    >
      <Style.IconContainer>
        <FilterIcon />
      </Style.IconContainer>
      <Style.Filter>
        {children.map((child, index) => {
          return React.cloneElement(child, { ...childProps, index });
        })}
      </Style.Filter>
    </Style.FilterContainer>
  );
}

function FilterDetail({
  index,
  children,
  filterClick,
  isOpen,
  selectedLabel,
  onClick,
}) {
  const isHidden = () =>
    !isOpen && selectedLabel !== `${index}-Label` ? true : false;
  // 지금 컴포넌트가 보여줘야하는지 판단하는 함수
  return (
    <Style.Label
      id={`${index}-Label`}
      onClick={(event) => {
        filterClick(event);
        onClick && onClick();
      }}
      hidden={isHidden()}
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
  filterClick: PropTypes.func,
  index: PropTypes.number,
  isOpen: PropTypes.bool,
  selectedLabel: PropTypes.string,
  onClick: PropTypes.func,
};
//onClick 함수를 이용해 filter가 클릭되었을때 API나 다른 일을 수행하도록 한다.
