import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'pages/Post/units/CommentForm.styles';

const CommentForm = ({ profileImgURL }) => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComment('');
  };
  return (
    <>
      <Style.CommentForm onSubmit={handleSubmit}>
        <ProfileImage size="medium" src={profileImgURL} />
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
};

export default CommentForm;
