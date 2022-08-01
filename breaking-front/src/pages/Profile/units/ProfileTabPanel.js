import React, { useEffect, useState } from 'react';
import Filter from 'components/Filter/Filter';
import * as Style from 'pages/Profile/units/ProfileTabPanel.styles';
import Feed from 'components/Feed/Feed';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { useRef } from 'react';
import ReactLoading from 'react-loading';

const ProfileTabPanel = ({
  data,
  hasNextPage,
  isFetching,
  nextFetch,
  setOption,
}) => {
  const targetRef = useRef();
  const { userId } = useContext(UserInformationContext);
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    data &&
      setFeedList((pre) => [
        ...pre,
        ...data.pages[data.pages.length - 1].result,
      ]);
  }, [data]);

  useEffect(() => {
    let observer;
    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        nextFetch();
        observer.observe(entry.target);
      }
    };
    if (hasNextPage && !isFetching) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.8,
      });
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [hasNextPage, nextFetch, isFetching]);

  return (
    <>
      <Style.PanelContainer>
        <Style.FilterContainer>
          <Filter width="180px">
            <Filter.FilterDetail
              onClick={() => {
                setOption('all');
                setFeedList([]);
              }}
            >
              모든 제보글
            </Filter.FilterDetail>
            <Filter.FilterDetail
              onClick={() => {
                setOption('unsold');
                setFeedList([]);
              }}
            >
              판매되지 않은 제보글
            </Filter.FilterDetail>
            <Filter.FilterDetail
              onClick={() => {
                setOption('sold');
                setFeedList([]);
              }}
            >
              판매된 제보글
            </Filter.FilterDetail>
          </Filter>
        </Style.FilterContainer>
        <Style.FeedContainer>
          <>
            {feedList.map((feed) => (
              <Feed feedData={feed} key={feed.postId} userId={userId} />
            ))}
            {isFetching ? <ReactLoading /> : <div ref={targetRef}></div>}
          </>
        </Style.FeedContainer>
      </Style.PanelContainer>
    </>
  );
};

ProfileTabPanel.propTypes = {
  data: PropTypes.object,
  hasNextPage: PropTypes.bool,
  isFetching: PropTypes.bool,
  nextFetch: PropTypes.func,
  setOption: PropTypes.func,
};

export default ProfileTabPanel;
