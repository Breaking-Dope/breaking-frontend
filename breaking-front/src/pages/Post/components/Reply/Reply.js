import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'pages/Post/components/Comment/Comment';
import * as Style from 'pages/Post/components/Reply/Reply.styles';
import { ReactComponent as MoreIcon } from 'assets/svg/more_arrow.svg';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';

const Reply = ({ replyData, isFetching, FetchNextReply }) => {
  return (
    <Style.Reply>
      {replyData?.pages.map((page) =>
        page.result.map((reply) => (
          <Comment comment={reply} type="reply" key={reply.commentId} />
        ))
      )}
      {replyData?.pages.slice(-1)[0].hasNextReply && !isFetching && (
        <Style.MoreShowReply
          onClick={() => {
            FetchNextReply();
          }}
        >
          <MoreIcon />
          더보기
        </Style.MoreShowReply>
      )}
      <InfiniteTargetDiv isFetching={isFetching} height="0px" />
    </Style.Reply>
  );
};

Reply.propTypes = {
  replyData: PropTypes.object,
  isFetching: PropTypes.bool,
  FetchNextReply: PropTypes.func,
};

export default Reply;
