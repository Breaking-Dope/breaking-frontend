import React from 'react';
import * as Style from 'pages/PostEdit/PostEdit.styles';
import dayjs from 'dayjs';
import useInputs from 'hooks/useInputs';
import MESSAGE from 'constants/message';
import PostWriteCommonForm from 'components/PostWriteCommonForm/PostWriteCommonForm';
import usePostEditMutation from 'pages/PostEdit/hooks/usePostEditMutation';
import extractHashtag from 'utils/extractHashTag';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { POST_DATA } from 'mocks/dummyData/contents';

const PostEdit = () => {
  const location = useLocation();
  const state = POST_DATA;

  const [postEditData, onChangePostEditData, setPostEditData] =
    useInputs(state);
  console.log(postEditData);
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
      ...postEditData,
      hashtagList: hashtagList === undefined ? null : hashtagList,
      price: postEditData.postType === 'free' ? 0 : postEditData.price,
      eventTime: dayjs(postEditData.eventTime).format('YYYY-MM-DD HH:mm:ss'),
    });
  };

  useEffect(() => {
    //postEditData이 비어있으면 잘못된 접근처리
  }, [location]);

  return (
    <Style.Container>
      <Style.Title>※ 이미지 동영상 파일은 수정할수 없습니다 ※</Style.Title>
      <form onSubmit={postWriteSubmit}>
        <PostWriteCommonForm
          isMutateLoading={isPostEditMutateLoading}
          onChangeData={onChangePostEditData}
          data={postEditData}
          setData={setPostEditData}
        />
      </form>
    </Style.Container>
  );
};

export default PostEdit;
