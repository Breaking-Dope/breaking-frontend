import React from 'react';
import PropTypes from 'prop-types';
import usePostReply from 'pages/Post/Post/hooks/queries/usePostReply';
import Comment from 'pages/Post/Post/components/Comment/Comment';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import * as Style from 'pages/Post/Post/components/Reply/Reply.styles';
import { ReactComponent as MoreIcon } from 'assets/svg/more_arrow.svg';

const Reply = ({ isOpen, commentId }) => {
  const {
    data: postReplyData,
    isFetching: isPostReplyFetching,
    fetchNextPage: FetchNextPostReply,
  } = usePostReply(commentId);

  return (
    isOpen && (
      <Style.Reply>
        {postReplyData?.pages.map((page) =>
          page.result.map((reply) => (
            <Comment comment={reply} type="reply" key={reply.commentId} />
          ))
        )}
        {postReplyData?.pages.slice(-1)[0].hasNextReply &&
          !isPostReplyFetching && (
            <Style.MoreShowReply
              onClick={() => {
                FetchNextPostReply();
              }}
            >
              <MoreIcon />
              더보기
            </Style.MoreShowReply>
          )}
        <InfiniteTargetDiv isFetching={isPostReplyFetching} height="0px" />
      </Style.Reply>
    )
  );
};

Reply.propTypes = {
  isOpen: PropTypes.bool,
  commentId: PropTypes.string,
};

export default Reply;
