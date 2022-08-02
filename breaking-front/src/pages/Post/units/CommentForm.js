import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'pages/Post/units/CommentForm.styles';
import { useMutation, useQueryClient } from 'react-query';
import {
  postPostCommentWrite,
  postPostReplyWrite,
  putPostCommentEdit,
} from 'api/post';

const CommentForm = ({
  profileImgURL,
  postId,
  commentId,
  content,
  cancelClick,
  type,
}) => {
  const queryClient = useQueryClient();
  const textareaRef = useRef();
  const [comment, setComment] = useState(content);

  const { mutate: CommentWrite } = useMutation(postPostCommentWrite, {
    onSuccess: () => {
      queryClient.resetQueries('postComment');
    },
  });

  const { mutate: CommentReply } = useMutation(postPostReplyWrite, {
    onSuccess: () => {
      queryClient.resetQueries(['postReply', commentId]);
    },
  });

  const { mutate: CommentEdit } = useMutation(putPostCommentEdit, {
    onSuccess: () => {
      queryClient.resetQueries('postComment');
      queryClient.resetQueries('postReply');
    },
  });

  const handleChange = (event) => {
    textareaRef.current.style.height = '27px';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';

    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!comment) return;

    const hashtagList = comment
      .match(/#[^\s#]+/g)
      ?.map((hashtag) => hashtag.replace('#', ''));

    switch (type) {
      case 'comment':
        CommentWrite({
          postId: postId,
          content: comment,
          hashtagList: hashtagList,
        });
        break;

      case 'reply':
        CommentReply({
          commentId: commentId,
          content: comment,
          hashtagList: hashtagList,
        });
        break;

      case 'edit':
        CommentEdit({
          commentId: commentId,
          content: comment,
          hashtagList: hashtagList,
        });
        break;

      default:
        break;
    }
    setComment('');
    textareaRef.current.style.height = '27px';
  };

  useEffect(() => {
    textareaRef.current.style.height = '27px';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  }, []);

  return (
    <>
      <Style.CommentForm onSubmit={handleSubmit}>
        <Style.FlexContainer>
          <Style.ProfileImageContainer>
            <ProfileImage size="medium" src={profileImgURL} />
          </Style.ProfileImageContainer>
          <Style.CommentTextarea
            ref={textareaRef}
            placeholder="댓글 추가"
            onChange={handleChange}
            value={comment}
          />
        </Style.FlexContainer>
        <Style.CommentFormFooter>
          {type === 'edit' && (
            <Style.CommentButton onClick={cancelClick}>
              취소
            </Style.CommentButton>
          )}
          <Style.CommentButton type="submit">등록</Style.CommentButton>
        </Style.CommentFormFooter>
      </Style.CommentForm>
    </>
  );
};
CommentForm.propTypes = {
  profileImgURL: PropTypes.string,
  postId: PropTypes.number,
  commentId: PropTypes.number,
  content: PropTypes.string,
  cancelClick: PropTypes.func,
  type: PropTypes.oneOf(['comment', 'reply', 'edit']),
};

CommentForm.defaultProps = {
  content: '',
};

export default CommentForm;
