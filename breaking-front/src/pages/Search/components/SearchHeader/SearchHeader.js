import * as Style from 'pages/Search/components/SearchHeader/SearchHeader.styles';
import React from 'react';
import PropTypes from 'prop-types';

const SearchHeader = ({ focusTab, children }) => {
  return (
    <>
      <Style.SearchTabs>
        <Style.SearchTabList>
          <Style.SearchTabItem isActiveTabItem={focusTab === 0}>
            통합 검색
          </Style.SearchTabItem>
          <Style.SearchTabItem isActiveTabItem={focusTab === 1}>
            게시글
          </Style.SearchTabItem>
          <Style.SearchTabItem isActiveTabItem={focusTab === 2}>
            해시태그
          </Style.SearchTabItem>
          <Style.SearchTabItem isActiveTabItem={focusTab === 3}>
            사람
          </Style.SearchTabItem>
        </Style.SearchTabList>
      </Style.SearchTabs>
      {children}
    </>
  );
};

SearchHeader.propTypes = {
  focusTab: PropTypes.number,
  children: PropTypes.node,
};

export default SearchHeader;
