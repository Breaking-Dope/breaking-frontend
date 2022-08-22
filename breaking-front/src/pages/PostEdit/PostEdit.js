import React from 'react';
import * as Style from 'pages/PostEdit/PostEdit.styles';
import dayjs from 'dayjs';
import useInputs from 'hooks/useInputs';
import MESSAGE from 'constants/message';
import PostWriteCommonForm, {
  PostSubmitButton,
} from 'components/PostWriteCommonForm/PostWriteCommonForm';
import usePostEditMutation from 'pages/PostEdit/hooks/usePostEditMutation';
import extractHashtag from 'utils/extractHashtag';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import usePost from 'pages/Post/hooks/queries/usePost';

const PostEdit = () => {
  let { id: postId } = useParams();
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
    postData &&
      setPostEditData({
        location: postData.data.location,
        eventDate: dayjs(postData.data.eventDate).format('YYYY-MM-DDTHH:mm'),
        title: postData.data.title,
        content: postData.data.content,
        price: postData.data.price,
        postType: postData.data.postType,
        isAnonymous: postData.data.isAnonymous,
        thumbnailIndex: 0,
      });
  }, [postData]);

  return (
    <Style.Container>
      <Style.UploadTitle>사진/동영상 업로드</Style.UploadTitle>
      <Style.UploadForm>
        <Style.Message>
          ※ 이미지 동영상 파일은 수정할 수 없습니다 ※
        </Style.Message>
      </Style.UploadForm>
      {postEditData && (
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
      )}
    </Style.Container>
  );
};

export default PostEdit;
