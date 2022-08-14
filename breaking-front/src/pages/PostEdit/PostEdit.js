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
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { POST_DATA } from 'mocks/dummyData/contents';

const PostEdit = () => {
  const location = useLocation();
  const state = POST_DATA;
  /*
  state:{
    postId:number,
    data:data
  }
  */

  const [postEditData, onChangePostEditData, setPostEditData] =
    useInputs(state);
  /*{
    location: undefined,
    eventTime: dayjs().format('YYYY-MM-DDTHH:mm'),
    title: '',
    content: '',
    price: 0,
    postType: 'CHARGED',
    isAnonymous: false,
    thumbnailIndex: 0,
  }*/

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
        price: postEditData.postType === 'free' ? 0 : postEditData.price,
        eventTime: dayjs(postEditData.eventTime).format('YYYY-MM-DD HH:mm:ss'),
      },
      postId: 0,
    });
  };

  useEffect(() => {
    //postEditData이 비어있으면 잘못된 접근처리 게시글 페이지에서 연동할때 작성
  }, [location]);

  return (
    <Style.Container>
      <Style.UploadTitle>사진/동영상 업로드</Style.UploadTitle>
      <Style.UploadForm>
        <Style.Message>
          ※ 이미지 동영상 파일은 수정할수 없습니다 ※
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
  );
};

export default PostEdit;
