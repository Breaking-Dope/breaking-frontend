import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useTheme } from 'styled-components';
import { UserInformationContext } from 'providers/UserInformationProvider';
import useMainFeedOption from 'hooks/queries/useMainFeedOption';
import { PAGE_PATH } from 'constants/path';
import Filter from 'components/Filter/Filter';
import Feed from 'components/Feed/Feed';
import * as Style from 'pages/MainFeed/MainFeed.styles';
import { ReactComponent as PenIcon } from 'assets/svg/pen.svg';

const MainFeed = () => {
  const queryClient = useQueryClient();
  const targetRef = useRef();
  const theme = useTheme();
  const navigate = useNavigate();
  const { userId } = useContext(UserInformationContext);

  const [sort, setSort] = useState('chronological');
  const [option, setOption] = useState('all');

  const {
    data: mainFeedData,
    isFetching: isMainFeedFetching,
    fetchNextPage: FetchNextMainFeed,
  } = useMainFeedOption(sort, option);

  const handleFilter = (sortType) => {
    queryClient.resetQueries('mainFeedOption');
    setSort(sortType);
  };

  const handleOption = () => {
    queryClient.resetQueries('mainFeedOption');
    setOption((pre) => (pre === 'all' ? 'unsold' : 'all'));
  };

  const handleUploadClick = () => {
    navigate(PAGE_PATH.UPLOAD);
  };

  useEffect(() => {
    let observer;
    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        FetchNextMainFeed();
        observer.observe(entry.target);
      }
    };

    if (mainFeedData) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.8,
      });
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [FetchNextMainFeed, mainFeedData]);

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
        {mainFeedData?.pages.map((page) =>
          page.result.map((feed) => (
            <Feed feedData={feed} key={feed.postId} userId={userId} />
          ))
        )}
      </Style.Feeds>
      <Style.TargetDiv ref={targetRef}>
        {isMainFeedFetching && (
          <Style.Loading type="spin" color={theme.blue[900]} width="40px" />
        )}
      </Style.TargetDiv>
    </Style.MainFeed>
  );
};

export default MainFeed;
