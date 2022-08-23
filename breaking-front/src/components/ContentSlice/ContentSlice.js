import React from 'react';
import PropTypes from 'prop-types';
import { PAGE_PATH } from 'constants/path';
import extractHashtag from 'utils/extractHashtag';
import * as Style from 'components/ContentSlice/ContentSlice.styles';

export default function ContentSlice({ content }) {
  return (
    <Style.Content>
      {content.split(/(#[^\s#]+)/g).map((contentSlice, index) => {
        if (contentSlice[0] === '#')
          return (
            <Style.Hashtag
              key={`hashtag-${index}`}
              to={
                PAGE_PATH.SEARCH_HASHTAG +
                `?query=${extractHashtag(contentSlice)}`
              }
            >
              {contentSlice}
            </Style.Hashtag>
          );
        return contentSlice;
      })}
    </Style.Content>
  );
}

ContentSlice.propTypes = {
  content: PropTypes.string.isRequired,
};
