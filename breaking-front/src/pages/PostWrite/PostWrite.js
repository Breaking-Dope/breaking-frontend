import React, { useState } from 'react';
import * as Style from 'pages/PostWrite/PostWrite.styles';
import PostUploadMediaForm from 'pages/PostWrite/units/PostWriteUploadMediaForm';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import PostWriteSearchLocation from 'pages/PostWrite/units/PostWriteSearchLocation';
import useInputs from 'hooks/useInputs';

const PostWrite = () => {
  const [occurDate, setOccurDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [occurTime, setOccurTime] = useState(dayjs().format('HH:mm'));

  const [isShowPriceInput, setIsShowPriceInput] = useState(false);

  const [postData, onChangePostData, setPostData] = useInputs({
    title: '',
    content: '',
    price: 0,
    postType: 'charged',
    isAnonymous: false,
  });

  console.log(postData);

  const SetPrivate = () => {
    setPostData((pre) => ({ ...pre, isAnonymous: true }));
  };
  const SetPublic = () => {
    setPostData((pre) => ({ ...pre, isAnonymous: false }));
  };

  const handleOccurDate = (event) => {
    setOccurDate(event.target.value);
  };
  const handleOccurTime = (event) => {
    setOccurTime(event.target.value);
  };
  const handlePrice = (event) => {
    setPostData((pre) => ({ ...pre, price: Number(event.target.value) }));
  };

  const toggleShowPirceInput = () => {
    setIsShowPriceInput((pre) => !pre);
  };

  const maxLengthCheck = ({ target }) => {
    if (target.value.length > target.maxLength) {
      target.value = target.value.slice(0, target.maxLength);
    }
  };

  return (
    <Style.Container>
      <PostUploadMediaForm />
      <Style.OccurTimeLayout>
        <Style.PostWriteTitle>제보 발생 시간</Style.PostWriteTitle>
        <Style.DatePicker
          type="date"
          value={occurDate}
          onChange={handleOccurDate}
        ></Style.DatePicker>
        <Style.DatePicker
          type="time"
          value={occurTime}
          onChange={handleOccurTime}
        ></Style.DatePicker>
      </Style.OccurTimeLayout>

      <Style.LocationLayout>
        <PostWriteSearchLocation />
      </Style.LocationLayout>

      <Style.ContextLayout>
        <Style.ContextTitleInput
          type="text"
          placeholder="제목을 입력하세요"
          onChange={onChangePostData}
          name="title"
        ></Style.ContextTitleInput>
        <Style.ContextBodyTextArea
          placeholder="상황을 최대한 상세하게 기록해 주세요&#13;(상황, 시간, 사건 전개과정, 경과상태 등)&#13;&#10;최대 2000자"
          onChange={onChangePostData}
          name="content"
        ></Style.ContextBodyTextArea>
      </Style.ContextLayout>

      <Style.PostTypeLayout>
        <Style.PostWriteTitle>제보 방식</Style.PostWriteTitle>
        <Style.PostRadioButton
          onClick={onChangePostData}
          value="charged"
          name="postType"
          radioControl={postData.postType}
        >
          유료제보
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={onChangePostData}
          value="free"
          name="postType"
          radioControl={postData.postType}
        >
          무료제보
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={onChangePostData}
          value="exclusive"
          name="postType"
          radioControl={postData.postType}
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
              ? postData.price
              : postData.price.toLocaleString('ko-KR') + '원'
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
          radioControl={postData.isAnonymous}
        >
          비공개
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={SetPublic}
          value={false}
          radioControl={postData.isAnonymous}
        >
          공개
        </Style.PostRadioButton>
      </Style.AnonymousLayout>

      <Style.PostSubmitButton type="submit">제보 하기</Style.PostSubmitButton>
    </Style.Container>
  );
};

export default PostWrite;
