import React from 'react';
import Feed from 'components/Feed/Feed';
import { NORMAL_CONTENT } from 'mocks/dummyData/contents';
import * as Style from 'pages/BreakingMission/MissionPost/components/MissionPostFeed/MissionPostFeed.styles';

const MissionPostFeed = () => {
  return (
    <Style.FeedContainer>
      <Style.MissionPostFeed>
        <Feed feedData={NORMAL_CONTENT} />
        <Feed feedData={NORMAL_CONTENT} />
        <Feed feedData={NORMAL_CONTENT} />
        <Feed feedData={NORMAL_CONTENT} />
      </Style.MissionPostFeed>
    </Style.FeedContainer>
  );
};

export default MissionPostFeed;
