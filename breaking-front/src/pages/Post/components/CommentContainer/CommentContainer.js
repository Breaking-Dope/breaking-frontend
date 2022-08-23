import React from 'react';
import PropTypes from 'prop-types';

import useInfiniteScroll from 'hooks/useInfiniteScroll';
import InfiniteTargetDiv from 'components/InfiniteTargetDiv/InfiniteTargetDiv';
import useCommentWrite from 'pages/Post/hooks/mutations/useCommentWrite';
import usePostComment from 'pages/Post/hooks/queries/usePostComment';
import CommentForm from 'pages/Post/components/CommentForm/CommentForm';
import Comment from 'pages/Post/components/Comment/Comment';
import * as Style from 'pages/Post/components/CommentContainer/CommentContainer.styles';

const CommentContainer = ({ postId }) => {
  const {
    data: postCommentData,
    isFetching: isPostCommentFetching,
    fetchNextPage: FetchNextPostComment,
  } = usePostComment(postId);
  const { mutate: CommentWrite } = useCommentWrite();

  const { targetRef } = useInfiniteScroll(
    postCommentData,
    FetchNextPostComment
  );

  const handleSubmit = ({ comment, hashtagList }) => {
    CommentWrite({
      postId: postId,
      content: comment,
      hashtagList: hashtagList,
    });
  };

  return (
    <Style.CommentContainer>
      <CommentForm onSubmit={handleSubmit} />
      {postCommentData?.pages.map((page) =>
        page.result.map((comment) => (
          <Comment comment={comment} type="comment" key={comment.commentId} />
        ))
      )}
      <InfiniteTargetDiv
        targetRef={targetRef}
        isFetching={isPostCommentFetching}
      />
    </Style.CommentContainer>
  );
};

CommentContainer.propTypes = {
  postId: PropTypes.number,
};

export default CommentContainer;
