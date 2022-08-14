import React, { useState } from 'react';
import * as Style from 'pages/PostWrite/PostWrite.styles';
import PostUploadMediaForm from 'pages/PostWrite/components/PostWriteUploadMediaForm';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import useInputs from 'hooks/useInputs';
import MESSAGE from 'constants/message';
import PostWriteCommonForm, {
  PostSubmitButton,
} from 'components/PostWriteCommonForm/PostWriteCommonForm';
import usePostWriteMutation from 'pages/PostWrite/hooks/usePostWriteMutation';
import extractHashtag from 'utils/extractHashtag';

const PostWrite = () => {
  const [mediaList, setMediaList] = useState([]);
  const [postWriteData, onChangePostWriteData, setPostWriteData] = useInputs({
    location: undefined,
    eventDate: dayjs().format('YYYY-MM-DDTHH:mm'),
    title: '',
    content: '',
    price: 0,
    postType: 'CHARGED',
    isAnonymous: false,
    thumbnailIndex: 0,
  });

  const { mutate: PostWriteMutate, isLoading: isPostWriteMutateLoading } =
    usePostWriteMutation();

  const postWriteSubmit = (event) => {
    event.preventDefault();

    if (!postWriteData.location) {
      alert(MESSAGE.POST_WRITE.LOCATION_BLANK);
      return;
    } else if (postWriteData.title === '') {
      alert(MESSAGE.POST_WRITE.TITLE_BLANK);
      return;
    } else if (postWriteData.content === '') {
      alert(MESSAGE.POST_WRITE.CONTENT_BLANK);
      return;
    }

    const formData = new FormData();

    const hashtagList = extractHashtag(postWriteData.content);

    for (let i = 0; i < mediaList.length; i++) {
      formData.append('mediaList', mediaList[i]);
    }

    formData.append(
      'data',
      JSON.stringify({
        ...postWriteData,
        hashtagList: hashtagList === undefined ? null : hashtagList,
        price: postWriteData.postType === 'free' ? 0 : postWriteData.price,
        eventDate: dayjs(postWriteData.eventDate).format('YYYY-MM-DD HH:mm:ss'),
      })
    );
    PostWriteMutate(formData);
  };

  return (
    <Style.Container>
      <form onSubmit={postWriteSubmit}>
        <PostUploadMediaForm setMediaList={setMediaList} />
        <PostWriteCommonForm
          isMutateLoading={isPostWriteMutateLoading}
          onChangeData={onChangePostWriteData}
          data={postWriteData}
          setData={setPostWriteData}
        />
        <PostSubmitButton isMutateLoading={isPostWriteMutateLoading}>
          제보 하기
        </PostSubmitButton>
      </form>
    </Style.Container>
  );
};

export default PostWrite;
