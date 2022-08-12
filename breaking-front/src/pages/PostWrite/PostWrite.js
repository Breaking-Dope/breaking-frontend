import React, { useState } from 'react';
import * as Style from 'pages/PostWrite/PostWrite.styles';
import PostUploadMediaForm from 'pages/PostWrite/components/PostWriteUploadMediaForm';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import useInputs from 'hooks/useInputs';
import MESSAGE from 'constants/message';
import PostWriteCommonForm from 'components/PostWriteCommonForm/PostWriteCommonForm';
import usePostWriteMutation from './hooks/usePostWriteMutation';

const PostWrite = () => {
  const [mediaList, setMediaList] = useState([]);
  const [postWriteData, onChangePostWriteData, setPostWriteData] = useInputs({
    location: undefined,
    eventTime: dayjs().format('YYYY-MM-DDTHH:mm'),
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

    const hashtagList = postWriteData.content
      .match(/#[^\s#]+/g)
      ?.map((hashtag) => hashtag.replace('#', ''));

    for (let i = 0; i < mediaList.length; i++) {
      formData.append('mediaList', mediaList[i]);
    }

    formData.append(
      'data',
      JSON.stringify({
        ...postWriteData,
        hashtagList: hashtagList === undefined ? null : hashtagList,
        price: postWriteData.postType === 'free' ? 0 : postWriteData.price,
        eventTime: dayjs(postWriteData.eventTime).format('YYYY-MM-DD HH:mm:ss'),
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
      </form>
    </Style.Container>
  );
};

export default PostWrite;
