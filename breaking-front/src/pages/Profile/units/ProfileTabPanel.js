import React from 'react';
import Filter from 'components/Filter/Filter';
import * as Style from 'pages/Profile/units/ProfileTabPanel.styles';
import Feed from 'components/Feed/Feed';
import PropTypes from 'prop-types';

const ProfileTabPanel = ({ data, setOption, userId }) => {
  return (
    <>
      <Style.FilterContainer>
        <Filter width="180px">
          <Filter.FilterDetail onClick={() => setOption('all')}>
            모든 제보글
          </Filter.FilterDetail>
          <Filter.FilterDetail onClick={() => setOption('unsold')}>
            판매되지 않은 제보글
          </Filter.FilterDetail>
          <Filter.FilterDetail onClick={() => setOption('sold')}>
            판매된 제보글
          </Filter.FilterDetail>
        </Filter>
      </Style.FilterContainer>
      <Style.FeedContainer>
        {data?.map((feed) => (
          <Feed feedData={feed} key={feed.postId} userId={userId} />
        ))}
      </Style.FeedContainer>
    </>
  );
};

ProfileTabPanel.propTypes = {
  data: PropTypes.array,
  setOption: PropTypes.func,
  userId: PropTypes.string,
};

export default ProfileTabPanel;
