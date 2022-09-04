import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import useInputs from 'hooks/useInputs';
import usePost from 'hooks/queries/usePost';
import MESSAGE from 'constants/message';
import PostWriteCommonForm, {
  PostSubmitButton,
} from 'components/PostWriteCommonForm/PostWriteCommonForm';
import usePostEditMutation from 'pages/Post/PostEdit/hooks/usePostEditMutation';
import extractHashtag from 'utils/extractHashtag';
import * as Style from 'pages/Post/PostEdit/PostEdit.styles';

const PostEdit = () => {
  let { id: postId } = useParams();
  const navigate = useNavigate();

  const { data: postData } = usePost(postId);
  const [postEditData, onChangePostEditData, setPostEditData] = useInputs();
  const { mutate: PostEditMutate, isLoading: isPostEditMutateLoading } =
    usePostEditMutation();

  const postWriteSubmit = (event) => {
    event.preventDefault();

    if (!postEditData.location) {
      alert(MESSAGE.POST_WRITE.LOCATION_BLANK);
      return;
    } else if (postEditData.title === '') {
      alert(MESSAGE.POST_WRITE.TITLE_BLANK);
      return;
    } else if (postEditData.content === '') {
      alert(MESSAGE.POST_WRITE.CONTENT_BLANK);
      return;
    }

    const hashtagList = extractHashtag(postEditData.content);

    PostEditMutate({
      data: {
        ...postEditData,
        hashtagList: hashtagList === undefined ? null : hashtagList,
        price: postEditData.postType === 'FREE' ? 0 : postEditData.price,
        eventDate: dayjs(postEditData.eventDate).format('YYYY-MM-DD HH:mm:ss'),
      },
      postId: postId,
    });
  };
  useEffect(() => {
    if (postData) {
      if (!postData.data.isMyPost || postData.data.isSold) {
        alert('비정상적인 접근입니다.');
        return navigate(-1);
      }

      setPostEditData({
        location: postData.data.location,
        eventDate: dayjs(postData.data.eventDate).format('YYYY-MM-DDTHH:mm'),
        title: postData.data.title,
        content: postData.data.content,
        price: postData.data.price,
        postType: postData.data.postType,
        isAnonymous: postData.data.isAnonymous,
        thumbnailIndex: 0,
        isSold: postData.data.isSold,
        isMyPost: postData.data.isMyPost,
      });
    }
  }, [postData]);

  return (
    <>
      {postEditData && (
        <Style.Container>
          <Style.UploadTitle>사진/동영상 업로드</Style.UploadTitle>
          <Style.UploadForm>
            <Style.Message>
              ※ 이미지 동영상 파일은 수정할 수 없습니다 ※
            </Style.Message>
          </Style.UploadForm>
          <form onSubmit={postWriteSubmit}>
            <PostWriteCommonForm
              isMutateLoading={isPostEditMutateLoading}
              onChangeData={onChangePostEditData}
              data={postEditData}
              setData={setPostEditData}
            />
            <PostSubmitButton isMutateLoading={isPostEditMutateLoading}>
              수정하기
            </PostSubmitButton>
          </form>
        </Style.Container>
      )}
    </>
  );
};

export default PostEdit;
