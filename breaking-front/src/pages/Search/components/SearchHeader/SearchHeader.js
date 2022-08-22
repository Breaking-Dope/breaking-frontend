import * as Style from 'pages/Search/components/SearchHeader/SearchHeader.styles';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';

const SearchHeader = ({ focusTab, children }) => {
  const navigate = useNavigate();
  const SearchUnifiedClick = () => {
    navigate(PAGE_PATH.SEARCH);
  };

  const SearchPostClick = () => {
    navigate(PAGE_PATH.SEARCH_POST);
  };

  const SearchHashtagClick = () => {
    navigate(PAGE_PATH.SEARCH_HASHTAG);
  };

  const SearchUserClick = () => {
    navigate(PAGE_PATH.SEARCH_USER);
  };
  return (
    <>
      <Style.SearchTabs>
        <Style.SearchTabList>
          <Style.SearchTabItem
            isActiveTabItem={focusTab === 0}
            onClick={SearchUnifiedClick}
          >
            통합 검색
          </Style.SearchTabItem>
          <Style.SearchTabItem
            isActiveTabItem={focusTab === 1}
            onClick={SearchPostClick}
          >
            게시글
          </Style.SearchTabItem>
          <Style.SearchTabItem
            isActiveTabItem={focusTab === 2}
            onClick={SearchHashtagClick}
          >
            해시태그
          </Style.SearchTabItem>
          <Style.SearchTabItem
            isActiveTabItem={focusTab === 3}
            onClick={SearchUserClick}
          >
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
