import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { UserInformationContext } from 'providers/UserInformationProvider';
import { PAGE_PATH } from 'constants/path';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import ExtractHashtag from 'utils/ExtractHashtag';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import * as Style from 'pages/Post/Post/components/CommentForm/CommentForm.styles';

const CommentForm = ({ content, closeClick, onSubmit }) => {
  const navigate = useNavigate();
  const { profileImgURL, isLogin } = useContext(UserInformationContext);
  const textareaRef = useRef();
  const [commentContent, setCommentContent] = useState(content);

  const handleChange = (event) => {
    textareaRef.current.style.height = '27px';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';

    setCommentContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!commentContent) return;

    const hashtagList = ExtractHashtag(commentContent);
    onSubmit({ commentContent, hashtagList });

    setCommentContent('');
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
            <ProfileImage
              size="medium"
              src={ImageUrlConverter(profileImgURL)}
            />
          </Style.ProfileImageContainer>
          <Style.CommentTextarea
            ref={textareaRef}
            placeholder="댓글 추가"
            value={commentContent}
            onChange={handleChange}
            onFocus={() => {
              if (!isLogin) {
                alert('로그인이 필요합니다.');
                return navigate(PAGE_PATH.LOGIN);
              }
            }}
          />
        </Style.FlexContainer>
        <Style.CommentFormFooter>
          {closeClick && (
            <Style.CommentButton onClick={closeClick}>취소</Style.CommentButton>
          )}
          <Style.CommentButton type="submit">등록</Style.CommentButton>
        </Style.CommentFormFooter>
      </Style.CommentForm>
    </>
  );
};

CommentForm.propTypes = {
  content: PropTypes.string,
  closeClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

CommentForm.defaultProps = {
  content: '',
};

export default CommentForm;
