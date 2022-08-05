import React, { useState } from 'react';
import * as Style from 'pages/PostWrite/PostWrite.styles';
import PostUploadMediaForm from 'pages/PostWrite/units/PostWriteUploadMediaForm';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import PostWriteSearchLocation from 'pages/PostWrite/units/PostWriteSearchLocation';

const PostWrite = () => {
  const [occurDate, setOccurDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [occurTime, setOccurTime] = useState(dayjs().format('HH:mm'));
  const [selectedPostType, setSelectedPostType] = useState('charged');
  const [selectedAnonymous, setSelectedAnonymous] = useState('public');
  const [price, setPrice] = useState(0);
  const [isShowPriceInput, setIsShowPriceInput] = useState(false);

  const handlePostType = (event) => {
    setSelectedPostType(event.target.id);
  };
  const handleAnonymous = (event) => {
    setSelectedAnonymous(event.target.id);
  };

  const handleOccurDate = (event) => {
    setOccurDate(event.target.value);
  };
  const handleOccurTime = (event) => {
    setOccurTime(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(Number(event.target.value));
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
        ></Style.ContextTitleInput>
        <Style.ContextBodyTextArea
          placeholder="상황을 최대한 상세하게 기록해 주세요&#13;(상황, 시간, 사건 전개과정, 경과상태 등)&#13;&#10;최대 2000자"
        ></Style.ContextBodyTextArea>
        <Style.ContextHashTagInput placeholder="#해시태그를 입력하세요. (최대 8개)"></Style.ContextHashTagInput>
      </Style.ContextLayout>

      <Style.PostTypeLayout>
        <Style.PostWriteTitle>제보 방식</Style.PostWriteTitle>
        <Style.PostRadioButton
          onClick={handlePostType}
          id="charged"
          radioControl={selectedPostType}
        >
          유료제보
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={handlePostType}
          id="free"
          radioControl={selectedPostType}
        >
          무료제보
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={handlePostType}
          id="exclusive"
          radioControl={selectedPostType}
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
            isShowPriceInput ? price : price.toLocaleString('ko-KR') + '원'
          }
          onChange={handlePrice}
          onBlur={toggleShowPirceInput}
          onFocus={toggleShowPirceInput}
        ></Style.PostPriceInput>
      </Style.PriceLayout>

      <Style.AnonymousLayout>
        <Style.PostWriteTitle>프로필을 공개하시겠습니까?</Style.PostWriteTitle>
        <Style.PostRadioButton
          onClick={handleAnonymous}
          id="private"
          radioControl={selectedAnonymous}
        >
          비공개
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={handleAnonymous}
          id="public"
          radioControl={selectedAnonymous}
        >
          공개
        </Style.PostRadioButton>
      </Style.AnonymousLayout>

      <Style.PostSubmitButton type="submit">제보 하기</Style.PostSubmitButton>
    </Style.Container>
  );
};

export default PostWrite;
