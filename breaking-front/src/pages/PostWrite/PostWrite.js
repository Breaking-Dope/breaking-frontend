import React, { useState } from 'react';
import * as Style from 'pages/PostWrite/PostWrite.styles';
import PostUploadForm from 'pages/PostWrite/units/PostWriteUploadForm';
import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

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
    console.log(target.value);
    if (target.value.length > target.maxLength) {
      target.value = target.value.slice(0, target.maxLength);
    }
  };

  return (
    <Style.Container>
      <Style.BackSpace></Style.BackSpace>

      <PostUploadForm />

      <Style.OccurTimeLayOut>
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
      </Style.OccurTimeLayOut>

      <Style.LocationLayOut>
        <Style.PostWriteTitle>
          위치
          <Style.FindLocationLayOut>
            <LocationIcon />
            <Style.FindLocationMessage>
              현재 위치 찾기
            </Style.FindLocationMessage>
          </Style.FindLocationLayOut>
        </Style.PostWriteTitle>

        <Style.LocationInputContainer>
          <Style.LocationInput type="text" placeholder="주소를 입력하세요" />
        </Style.LocationInputContainer>
      </Style.LocationLayOut>

      <Style.ContextLayout>
        <Style.TitleInput
          type="text"
          placeholder=" 제목을 입력하세요"
        ></Style.TitleInput>
        <Style.BodyTextArea
          placeholder=" 상황을 최대한 상세하게 기록해 주세요&#13; (상황, 시간, 사건 전개과정, 경과상태 등&#13;&#10; 최대 2000자"
        ></Style.BodyTextArea>
        <Style.HashTagInput placeholder=" # 해시태그를 입력하세요. (최대 8개)"></Style.HashTagInput>
      </Style.ContextLayout>

      <Style.PostTypeLayOut>
        <Style.PostWriteTitle>제보 방식</Style.PostWriteTitle>
        <Style.PostRadioButton
          onClick={handlePostType}
          id="charged"
          radioContorl={selectedPostType}
        >
          유료제보
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={handlePostType}
          id="free"
          radioContorl={selectedPostType}
        >
          무료제보
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={handlePostType}
          id="exclusive"
          radioContorl={selectedPostType}
        >
          단독제보
        </Style.PostRadioButton>
      </Style.PostTypeLayOut>

      <Style.PriceLayOut>
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
      </Style.PriceLayOut>

      <Style.AnonymousLayOut>
        <Style.PostWriteTitle>프로필을 공개하시겠습니까?</Style.PostWriteTitle>
        <Style.PostRadioButton
          onClick={handleAnonymous}
          id="private"
          radioContorl={selectedAnonymous}
        >
          비공개
        </Style.PostRadioButton>
        <Style.PostRadioButton
          onClick={handleAnonymous}
          id="public"
          radioContorl={selectedAnonymous}
        >
          공개
        </Style.PostRadioButton>
      </Style.AnonymousLayOut>

      <Style.PostSubmitButton type="submit">제보 하기</Style.PostSubmitButton>
    </Style.Container>
  );
};

export default PostWrite;
