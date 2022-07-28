import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PAGE_PATH } from 'constants/path';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'pages/Post/units/CommentForm.styles';
import { useMutation, useQueryClient } from 'react-query';
import { postPostCommentWrite } from 'api/post';

const CommentForm = ({ profileImgURL, userId, postId }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');

  const { mutate: CommentWrite } = useMutation(postPostCommentWrite, {
    onSuccess: () => {
      queryClient.invalidateQueries(['postComment']);
      queryClient.invalidateQueries(['postReply']);
    },
  });

  const handleProfileClick = () => {
    navigate(PAGE_PATH.PROFILE(userId));
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hashtagList = comment
      .match(/#[^\s#]+/g)
      ?.map((hashtag) => hashtag.replace('#', ''));

    comment &&
      CommentWrite({
        postId: postId,
        content: comment,
        hashtagList: hashtagList,
      });
    setComment('');
  };
  return (
    <>
      <Style.CommentForm onSubmit={handleSubmit}>
        <ProfileImage
          size="medium"
          src={profileImgURL}
          profileClick={handleProfileClick}
        />
        <Style.CommentInput
          placeholder="댓글 추가"
          onChange={handleChange}
          value={comment}
        />
        <Style.CommentButton type="submit">등록</Style.CommentButton>
      </Style.CommentForm>
    </>
  );
};
CommentForm.propTypes = {
  profileImgURL: PropTypes.string,
  userId: PropTypes.number,
  postId: PropTypes.number,
};

export default CommentForm;
