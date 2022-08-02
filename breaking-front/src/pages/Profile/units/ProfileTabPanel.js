import React, { useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import * as Style from 'pages/Profile/units/ProfileTabPanel.styles';
import Feed from 'components/Feed/Feed';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { useRef } from 'react';
import ReactLoading from 'react-loading';
import { useQueryClient } from 'react-query';

const ProfileTabPanel = ({
  type,
  data,
  hasNextPage,
  isFetching,
  nextFetch,
  setOption,
}) => {
  const targetRef = useRef();
  const { userId } = useContext(UserInformationContext);
  const queryClient = useQueryClient();

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
                queryClient.resetQueries([type]);
                setOption('all');
              }}
            >
              모든 제보글
            </Filter.FilterDetail>
            <Filter.FilterDetail
              onClick={() => {
                queryClient.resetQueries([type]);
                setOption('unsold');
              }}
            >
              판매되지 않은 제보글
            </Filter.FilterDetail>
            <Filter.FilterDetail
              onClick={() => {
                queryClient.resetQueries([type]);
                setOption('sold');
              }}
            >
              판매된 제보글
            </Filter.FilterDetail>
          </Filter>
        </Style.FilterContainer>
        <Style.FeedContainer>
          <>
            {data?.pages.map((page) =>
              page.result.map((feed) => (
                <Feed feedData={feed} key={feed.postId} userId={userId} />
              ))
            )}
            {isFetching ? <ReactLoading /> : <div ref={targetRef}></div>}
          </>
        </Style.FeedContainer>
      </Style.PanelContainer>
    </>
  );
};

ProfileTabPanel.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
  hasNextPage: PropTypes.bool,
  isFetching: PropTypes.bool,
  nextFetch: PropTypes.func,
  setOption: PropTypes.func,
};

export default ProfileTabPanel;
