/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useMainFeedOption from 'hooks/queries/useMainFeedOption';
import { PAGE_PATH } from 'constants/path';
import Filter from 'components/Filter/Filter';
import Feed from 'components/Feed/Feed';
import * as Style from 'pages/MainFeed/MainFeed.styles';
import { ReactComponent as PenIcon } from 'assets/svg/pen.svg';

const MainFeed = () => {
  const navigate = useNavigate();
  const { userId } = useContext(UserInformationContext);

  const [feedList, setFeedList] = useState([]);
  const [sort, setSort] = useState('chronological');
  const [option, setOption] = useState('all');
  const { data, isLoading } = useMainFeedOption(5, 5, sort, option);

  const handleFilter = (sortType) => {
    if (sort !== sortType) {
      setFeedList([]);
      setSort(sortType);
    }
  };

  const handleOption = () => {
    setFeedList([]);
    setOption((pre) => (pre === 'all' ? 'unsold' : 'all'));
  };

  const handleUploadClick = () => {
    navigate(PAGE_PATH.UPLOAD);
  };

  useEffect(() => {
    data && setFeedList((pre) => [...pre, ...data.data]);
  }, [data]);

  return (
    <Style.MainFeed>
      <Style.NavBar>
        <Style.FilterContainer>
          <Filter>
            <Filter.FilterDetail
              onClick={() => {
                handleFilter('chronological');
              }}
            >
              최신순
            </Filter.FilterDetail>
            <Filter.FilterDetail
              onClick={() => {
                handleFilter('view');
              }}
            >
              조회순
            </Filter.FilterDetail>
            <Filter.FilterDetail
              onClick={() => {
                handleFilter('like');
              }}
            >
              좋아요순
            </Filter.FilterDetail>
          </Filter>
          <Style.ShowSoldFeed>
            판매 안 된 제보글만 보기
            <input
              type="checkbox"
              checked={option !== 'all'}
              onChange={handleOption}
            />
          </Style.ShowSoldFeed>
        </Style.FilterContainer>
        <Style.FeedUploadButton onClick={handleUploadClick}>
          <PenIcon />
          작성하기
        </Style.FeedUploadButton>
      </Style.NavBar>
      <Style.Feeds>
        {feedList?.map((feed) => (
          <Feed feedData={feed} key={feed?.postId} userId={userId} />
        ))}
      </Style.Feeds>
    </Style.MainFeed>
  );
};

export default MainFeed;
