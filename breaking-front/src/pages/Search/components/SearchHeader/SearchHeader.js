import * as Style from 'pages/Search/components/SearchHeader/SearchHeader.styles';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import useConvertURLQuery from 'pages/Search/hooks/useConvertURLQuery.js';

const SearchHeader = ({ focusTab, children }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentQuery = useConvertURLQuery();
  const SearchUnifiedClick = () => {
    navigate(PAGE_PATH.SEARCH + `?query=${currentQuery}`);
  };

  const SearchPostClick = () => {
    navigate(PAGE_PATH.SEARCH_POST + `?query=${currentQuery}`);
  };

  const SearchHashtagClick = () => {
    navigate(PAGE_PATH.SEARCH_HASHTAG + `?query=${currentQuery}`);
  };

  const SearchUserClick = () => {
    navigate(PAGE_PATH.SEARCH_USER + `?query=${currentQuery}`);
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
      <Style.SearchResultContent>
        <Style.SearchContent>
          {focusTab === 2 && '#'}
          {searchParams.get('query')}
        </Style.SearchContent>
      </Style.SearchResultContent>
      {children}
    </>
  );
};

SearchHeader.propTypes = {
  focusTab: PropTypes.number,
  children: PropTypes.node,
};

export default SearchHeader;
