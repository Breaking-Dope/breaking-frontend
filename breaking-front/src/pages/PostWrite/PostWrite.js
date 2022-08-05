import React, { useState } from 'react';
import * as Style from 'pages/PostWrite/PostWrite.styles';
import PostUploadMediaForm from 'pages/PostWrite/units/PostWriteUploadMediaForm';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import PostWriteSearchLocation from 'pages/PostWrite/units/PostWriteSearchLocation';
import useInputs from 'hooks/useInputs';
import { useMutation } from 'react-query';
import { postPostWrite } from 'api/postWrite';

const PostWrite = () => {
  const [isShowPriceInput, setIsShowPriceInput] = useState(false);

  const [postWriteData, onChangePostWriteData, setPostWriteData] = useInputs({
    location: undefined,
    eventTime: dayjs().format('YYYY-MM-DDTHH:mm'),
    title: '',
    content: '',
    price: 0,
    postType: 'charged',
    isAnonymous: false,
    thumbnailIndex: 0,
  });

  const { mutate: PostWriteMutate } = useMutation(postPostWrite);

  const SetPrivate = () => {
    setPostWriteData((pre) => ({ ...pre, isAnonymous: true }));
  };
  const SetPublic = () => {
    setPostWriteData((pre) => ({ ...pre, isAnonymous: false }));
  };

  const handlePrice = (event) => {
    setPostWriteData((pre) => ({ ...pre, price: Number(event.target.value) }));
  };

  const toggleShowPirceInput = () => {
    setIsShowPriceInput((pre) => !pre);
  };

  const maxLengthCheck = ({ target }) => {
    if (target.value.length > target.maxLength) {
      target.value = target.value.slice(0, target.maxLength);
    }
  };

  const postWriteSubmit = (event) => {
    event.preventDefault();
    PostWriteMutate({
      data: JSON.stringify({
        ...postWriteData,
        eventTime: postWriteData.eventTime.format('YYYY-MM-DD HH:ss:ss'),
      }),
    });
  };
  return (
    <Style.Container>
      <PostUploadMediaForm />
      <Style.OccurTimeLayout>
        <Style.PostWriteTitle>제보 발생 시간</Style.PostWriteTitle>
        <Style.DatePicker
          type="datetime-local"
          name="eventTime"
          value={postWriteData.eventTime}
          onChange={onChangePostWriteData}
        ></Style.DatePicker>
      </Style.OccurTimeLayout>

      <Style.LocationLayout>
        <PostWriteSearchLocation setPostWriteData={setPostWriteData} />
      </Style.LocationLayout>

      <Style.ContextLayout>
        <Style.ContextTitleInput
          type="text"
          placeholder="제목을 입력하세요"
          onChange={onChangePostWriteData}
          name="title"
        ></Style.ContextTitleInput>
        <Style.ContextBodyTextArea
          placeholder="상황을 최대한 상세하게 기록해 주세요&#13;(상황, 시간, 사건 전개과정, 경과상태 등)&#13;&#10;최대 2000자"
          onChange={onChangePostWriteData}
          name="content"
        ></Style.ContextBodyTextArea>
      </Style.ContextLayout>

      <Style.PostTypeLayout>
        <Style.PostWriteTitle>제보 방식</Style.PostWriteTitle>
        <Style.PostRadioButton
          onClick={onChangePostWriteData}
          value="charged"
          name="postType"
          radioControl={postWriteData.postType}
        >
          유료제보
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={onChangePostWriteData}
          value="free"
          name="postType"
          radioControl={postWriteData.postType}
        >
          무료제보
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={onChangePostWriteData}
          value="exclusive"
          name="postType"
          radioControl={postWriteData.postType}
        >
          단독제보
        </Style.PostRadioButton>
      </Style.PostTypeLayout>

      <Style.PriceLayout>
        <Style.PostWriteTitle>제보 가격</Style.PostWriteTitle>
        <Style.PostPriceInput
          type="text"
          onInput={maxLengthCheck}
          maxLength="15"
          value={
            isShowPriceInput
              ? postWriteData.price
              : postWriteData.price.toLocaleString('ko-KR') + '원'
          }
          onChange={handlePrice}
          onBlur={toggleShowPirceInput}
          onFocus={toggleShowPirceInput}
        ></Style.PostPriceInput>
      </Style.PriceLayout>

      <Style.AnonymousLayout>
        <Style.PostWriteTitle>프로필을 공개하시겠습니까?</Style.PostWriteTitle>
        <Style.PostRadioButton
          onClick={SetPrivate}
          value={true}
          radioControl={postWriteData.isAnonymous}
        >
          비공개
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={SetPublic}
          value={false}
          radioControl={postWriteData.isAnonymous}
        >
          공개
        </Style.PostRadioButton>
      </Style.AnonymousLayout>

      <Style.PostSubmitButton type="submit">제보 하기</Style.PostSubmitButton>
    </Style.Container>
  );
};

export default PostWrite;
