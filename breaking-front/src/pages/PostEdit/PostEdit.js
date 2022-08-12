import React from 'react';
import * as Style from 'pages/PostEdit/PostEdit.styles';
import dayjs from 'dayjs';
import useInputs from 'hooks/useInputs';
import MESSAGE from 'constants/message';
import PostWriteCommonForm from 'components/PostWriteCommonForm/PostWriteCommonForm';
import usePostEditMutation from 'pages/PostEdit/hooks/usePostEditMutation';
import extractHashtag from 'utils/extractHashTag';
import { useLocation } from 'react-router-dom';

const PostEdit = () => {
  const location = useLocation();
  const [postEditData, onChangePostEditData, setPostEditData] = useInputs(
    location.state
  );
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

  return (
    <Style.Container>
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
